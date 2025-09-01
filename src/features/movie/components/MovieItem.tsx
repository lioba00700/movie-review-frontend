//2025.08.26 API 연결 - 박민서
//2025.08.25 삭제 및 수정 버튼 제거 - 박민서
//2025.08.22 영화 목록 아이템 - 박민서
import { useNavigate } from "react-router-dom";
import type { Movie } from "@movie/types";

const MovieItem = ({
  movie_id,
  movie_name,
  movie_genre,
  movie_date,
  movie_director,
  movie_image,
}: Movie) => {
  const navigate = useNavigate();

  return (
    <li className="bg-white dark:bg-gray-500/40 dark:border-none min-w-[250px] transition-all cursor-pointer rounded-xl hover:shadow-2xl overflow-hidden border-1 border-gray-200">
      <div
        className="w-full bg-gray-300 dark:bg-white/20  aspect-[1/1.3] overflow-hidden"
        onClick={() => navigate(`/detail/${movie_id}`)}
      >
        <img src={movie_image} alt="poster" width={"100%"} height={"100%"} />
      </div>
      <div className="p-[30px]">
        <h4 className="text-xl font-bold mb-[10px]">{movie_name}</h4>
        <p>장르: {movie_genre}</p>
        <p>개봉일: {movie_date}</p>
        <p>감독: {movie_director}</p>
      </div>
    </li>
  );
};

export default MovieItem;
