//2025.08.25 삭제 및 수정 버튼 제거 - 박민서
//2025.08.22 영화 목록 아이템 - 박민서
import { useNavigate } from "react-router-dom";
import type { Movie } from "@movie/types";

const MovieItem = ({ id, title, genre, releaseAt, director, poster }: Movie) => {
  const navigate = useNavigate();

  return (
    <li className="bg-white dark:bg-gray-500/40 dark:border-none min-w-[250px] transition-all cursor-pointer rounded-xl hover:shadow-2xl overflow-hidden border-1 border-gray-200">
      <div
        className="w-full bg-gray-300 dark:bg-white/20  aspect-[1/1.3]"
        onClick={() => navigate(`/detail/${id}`)}
      >
        <img src={poster} alt="poster" />
      </div>
      <div className="p-[30px]">
        <h4 className="text-xl font-bold mb-[10px]">{title}</h4>
        <p>장르: {genre}</p>
        <p>개봉일: {releaseAt}</p>
        <p>감독: {director}</p>
      </div>
    </li>
  );
};

export default MovieItem;
