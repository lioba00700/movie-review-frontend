//2025.08.21 작성 - 박민서
//영화 상세 페이지
import MovieDetail from "@movie/components/MovieDetail";
import ReviewList from "@review/components/ReviewList";

const MovieDetailPage = () => {
  return (
    <div className="w-full h-full dark:text-white">
      <MovieDetail title={"영화 제목"} genre="호러" releaseAt="2025-05-05" director="홍길동" explan="영화설명" poster=""/>
      <div className="p-[50px] dark:bg-black">
        <ReviewList />
      </div>
    </div>
  )
}

export default MovieDetailPage;