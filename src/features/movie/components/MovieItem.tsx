import { useNavigate } from "react-router-dom"
import type { Movie } from "../types";

const MovieItem = ({title, genre, releaseAt, director}:Movie) => {
  const navigate = useNavigate();

  return (
    <li 
      className="bg-gray-200 max-w-sm min-w-[250px] cursor-pointer hover:bg-gray-300 rounded-xl"
      onClick={()=>navigate(`/detail/${title.replace(" ","")}`)}>
      <div className="w-full h-[300px] bg-blue-300">movie poster</div>
      <h4>{title}</h4>
      <p>장르: {genre}</p>
      <p>개봉일: {releaseAt}</p>
      <p>감독: {director}</p>
      <button>삭제</button>
      <button>수정</button>
    </li>
  )
}

export default MovieItem;