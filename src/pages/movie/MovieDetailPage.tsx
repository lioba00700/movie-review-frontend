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
        console.log(res.data);
        setMovie(res.data);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div className="w-full h-full dark:text-white">
      <MovieDetail
        title={"movie?.title"}
        genre="호러"
        releaseAt="2025-05-05"
        director="홍길동"
        explan="영화설명"
        poster=""
      />
      <div className="p-[50px] dark:bg-black">
        <ReviewList />
      </div>
    </div>
  );
};

export default MovieDetailPage;
