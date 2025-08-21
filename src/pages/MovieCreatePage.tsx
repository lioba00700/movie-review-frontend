import MainHeader from "../features/layout/components/MainHeader";
import MovieForm from "../features/movie/components/MovieForm";

const MovieCreatePage = () => {
    return (
        <div>
            <div className="pt-[90px] p-[50px] w-md dark:text-white">
                <h1 className="text-2xl font-bold mb-[30px]">영화 등록</h1>
                <MovieForm />
            </div>
        </div>
    )
}

export default MovieCreatePage;