import type { Movie } from "../types";


const MovieDetail = ({title, genre, releaseAt, director, explan}:Movie) => {
  return (
    <div className="h-screen">
      <div className="bg-gray-300 h-full dark:bg-gray-500/50">ㅁㄴㅇㄹ</div>
      <div className="p-[50px] absolute bottom-[100px] right-[100px] bg-white/40 dark:bg-black/40 rounded-xl text-black dark:text-white min-w-lg">
        <h1 className="text-4xl font-bold mb-[20px]">{title}</h1>
        <div className="flex gap-[15px] text-md text-gray-400 dark:text-gray-300">
          <p>장르: <span className="font-semibold">{genre}</span></p>
          <p>감독: <span className="font-semibold" >{director}</span></p>
          <p>개봉일: <span className="font-semibold">{releaseAt}</span></p>
        </div>
        <p className="mt-[20px] text-lg">{explan}</p>
      </div>
    </div>
  )
}

export default MovieDetail;