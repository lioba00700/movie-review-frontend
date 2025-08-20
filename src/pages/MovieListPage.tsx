import MainHeader from "../features/layout/components/MainHeader"
import MovieList from "../features/movie/components/MovieList";

const MovieListPage = () => {
    return(
        <div>
            <MainHeader />
            <h1>영화 목록</h1>
            <MovieList />
        </div>
    )
}

export default MovieListPage;