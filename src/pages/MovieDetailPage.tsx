import MovieDetail from "../features/movie/components/MovieDetail";
import ReviewList from "../features/review/components/ReviewList";

const MovieDetailPage = () => {
  return (
    <div className="w-full h-full dark:text-white">
      <MovieDetail title={"영화 제목"} genre="호러" releaseAt="2025-05-05" director="홍길동" explan="영화설명" poster=""/>
      <div className="m-[50px]">
        <ReviewList />
      </div>
    </div>
  )
}

export default MovieDetailPage;