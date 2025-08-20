import type { Movie } from "../types";


const MovieDetail = ({title, genre, releaseAt, director, explan}:Movie) => {
  return (
    <div>
      <div className="bg-blue-100 h-[500px]">ㅁㄴㅇㄹ</div>
      <h1>{title}</h1>
      <p>장르: {genre}</p>
      <p>개봉일: {releaseAt}</p>
      <p>감독: {director}</p>
      <p>{explan}</p>
    </div>
  )
}

export default MovieDetail;