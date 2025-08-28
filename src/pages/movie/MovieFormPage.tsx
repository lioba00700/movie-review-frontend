//2025.08.21 작성 - 박민서
//영화 등록 페이지
import { postMovie, putMovie } from "@/features/movie/services/movieAPI";
import type { MovieCreateState } from "@/features/movie/types";
import MovieForm from "@movie/components/MovieForm";
import { useParams } from "react-router-dom";

const MovieFormPage = () => {
  const { movieId } = useParams();

  return (
    <div className="pt-[90px] h-full p-[50px] w-md dark:text-white">
      <h1 className="text-2xl font-bold mb-[30px]">
        {movieId ? "영화 수정" : "영화 등록"}
      </h1>
      <MovieForm
        onSubmit={
          movieId
            ? (form: MovieCreateState) => putMovie(Number(movieId), form)
            : (form: MovieCreateState) => postMovie(form)
        }
        movieId={movieId}
      />
    </div>
  );
};

export default MovieFormPage;
