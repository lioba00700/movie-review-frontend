import MainHeader from "../features/layout/components/MainHeader";
import MovieForm from "../features/movie/components/MovieForm";

const MovieCreatePage = () => {
    return (
        <div>
            <MainHeader />
            <h1>영화 등록</h1>
            <MovieForm />
        </div>
    )
}

export default MovieCreatePage;