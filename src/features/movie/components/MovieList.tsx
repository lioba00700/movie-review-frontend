//2025.08.22 스켈레톤 UI 적용
//2025.08.21 영화 목록 컴포넌트
import { useEffect } from "react";
import MovieItem from "./MovieItem";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonMovieList from "./SkeletonMovieList";
import { getMovieList } from "../services/movieAPI";
import BackToTopButton from "@/common/components/BackToTopButton";

const MovieList = () => {
  const { ref, inView } = useInView();

  const fetchPage = async (pageParam: number) => {
    //무한 스크롤 구현 위한 mock 함수

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
          <div key={i}>
            {group.movies?.map(
              (movie: {
                id: number;
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
                  key={movie.id}
                  id={movie.id}
                  poster={`${import.meta.env.VITE_SERVER_API}${movie.movie_image}`}
                  title={movie.movie_name}
                  genre={movie.movie_genre}
                  releaseAt={movie.movie_date}
                  director={movie.movie_director}
                />
              ),
            )}
          </div>
        ))}
      </ul>
      {isFetchingNextPage ? <SkeletonMovieList /> : <div ref={ref}></div>}
      <BackToTopButton />
    </>
  );
};

export default MovieList;
