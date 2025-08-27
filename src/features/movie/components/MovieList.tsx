//2025.08.26 API 연결 - 박민서
//2025.08.22 스켈레톤 UI 적용
//2025.08.21 영화 목록 컴포넌트
import { useEffect } from "react";
import MovieItem from "./MovieItem";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import SkeletonMovieList from "./SkeletonMovieList";
import { getMovieList } from "../services/movieAPI";
import BackToTopButton from "@/common/components/BackToTopButton";
import React from "react";

const MovieList = () => {
  const { ref, inView } = useInView();

  const fetchPage = async (pageParam: number) => {
    const res = await getMovieList();
    if (res.pass) {
      const movies = res.data;

      console.log(movies);
      return {
        movies,
        nextCursor: undefined,
      };
    }

    return {
      movies: [],
      nextCusor: undefined,
    };
  };

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam }) => fetchPage(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      //새 영화 데이터 요청
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage]);

  return (
    <>
      {isLoading && <SkeletonMovieList />}
      <ul className="grid grid-cols-5 gap-[20px] xl:max-2xl:grid-cols-4 md:max-xl:grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1 justify-center">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.movies?.map(
              (movie: {
                movie_id: number;
                movie_image: string;
                movie_name: string;
                movie_director: string;
                movie_review_count: number;
                movie_rating: number;
                movie_genre: string;
                created_at: string;
                movie_date: string;
              }) => (
                <MovieItem
                  key={movie.movie_id}
                  movie_id={movie.movie_id}
                  movie_rating={movie.movie_rating}
                  movie_image={`${import.meta.env.VITE_SERVER_API}${movie.movie_image}`}
                  movie_name={movie.movie_name}
                  movie_genre={movie.movie_genre}
                  movie_date={movie.movie_date}
                  movie_director={movie.movie_director}
                />
              ),
            )}
          </React.Fragment>
        ))}
      </ul>
      {isFetchingNextPage ? <SkeletonMovieList /> : <div ref={ref}></div>}
      <BackToTopButton />
    </>
  );
};

export default MovieList;
