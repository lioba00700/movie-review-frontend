//2025.08.26 API 연결 - 박민서
//2025.08.21 영화 상세 컴포넌트 - 박민서
import BackToTopButton from "@/common/components/BackToTopButton";
import RatingButton from "@/features/review/components/RatingButton";
import type { Movie } from "@movie/types";

const MovieDetail = ({movie_image, movie_name, movie_genre, movie_date, movie_director, movie_description, movie_rating}:Movie) => {

  return (
    <div className="h-screen">
      <div className="bg-gray-300 h-screen dark:bg-gray-500/50 overflow-hidden">
        <img src={movie_image} alt="poster" width={'100%'}/>
      </div>
      <div className="p-[50px] absolute bottom-[100px] right-[100px] bg-white/70 dark:bg-black/70 rounded-xl text-black dark:text-white min-w-lg">
        <RatingButton rating={movie_rating} />
        <h1 className="text-4xl font-bold mb-[20px]">{movie_name}</h1>
        <div className="flex gap-[15px] text-md text-gray-400 dark:text-gray-300">
          <p>장르: <span className="font-semibold">{movie_genre}</span></p>
          <p>감독: <span className="font-semibold" >{movie_director}</span></p>
          <p>개봉일: <span className="font-semibold">{movie_date}</span></p>
        </div>
        <p className="mt-[20px] text-lg">{movie_description}</p>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default MovieDetail;