//2025.08.21 작성 - 박민서
//영화 상세 페이지
import { getMovieDetail } from "@/features/movie/services/movieAPI";
import type { Movie } from "@/features/movie/types";
import MovieDetail from "@movie/components/MovieDetail";
import ReviewList from "@review/components/ReviewList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const getMovie = async () => {
      const res = await getMovieDetail(Number(movieId));
      if (res.pass) {
        setMovie(res.data);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div className="w-full h-full dark:text-white">
      {!movie ? (
        <p>불러오는중</p>
      ) : (
        <>
          <MovieDetail
            movie_id={movie.movie_id}
            movie_name={movie.movie_name}
            movie_genre={movie.movie_genre}
            movie_date={movie.movie_date}
            movie_director={movie.movie_director}
            movie_description={movie.movie_description}
            movie_image={`${import.meta.env.VITE_SERVER_API}${movie.movie_image}`}
            movie_rating={movie.movie_rating}
            movie_cast_list={movie.movie_cast_list}
          />
          <div className="p-[50px] dark:bg-black">
            <ReviewList movieId={movie.movie_id} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;
