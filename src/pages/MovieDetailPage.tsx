import MainHeader from "../features/layout/components/MainHeader";
import MovieDetail from "../features/movie/components/MovieDetail";
import ReviewList from "../features/review/components/ReviewList";

const MovieDetailPage = () => {
    return (
        <div>
            <MainHeader />
            <MovieDetail title={"영화 제목"} genre="호러" releaseAt="2025-05-05" director="홍길동" explan="여름 더위 공포 특집 호러 인기 배우 출연"/>
            <ReviewList />
        </div>
    )
}

export default MovieDetailPage;