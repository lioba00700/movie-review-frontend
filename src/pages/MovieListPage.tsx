//2025.08.21 작성 - 박민서
//영화 목록 페이지
import MovieList from "../features/movie/components/MovieList";

const MovieListPage = () => {
  return(
    <div className="pt-[90px] p-[50px] dark:text-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-[30px] dark:text-white">영화 목록</h1>
      <MovieList />
    </div>
  )
}

export default MovieListPage;