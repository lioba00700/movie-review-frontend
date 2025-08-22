import { useEffect } from "react";
import MovieItem from "./MovieItem";
import { useInView } from 'react-intersection-observer';
import {useInfiniteQuery} from '@tanstack/react-query';
import React from "react";
import SkeletonMovieItem from "@movie/components/SkeletonMovieItem";
import SkeletonMovieList from "./SkeletonMovieList";

const MovieList = () => {
  const {ref, inView} = useInView();

  const fetchPage =  async (pageParam:number) => {
    //무한 스크롤 구현 위한 mock 함수
    const pageSize = 20;
    await new Promise((resolve)=>setTimeout(resolve, 500));
    
    //페이지 크기만큼 예시 데이터 불러옴
    const movies = Array.from({length: pageSize}).map((_, index) => ({
      id: pageParam*pageSize + index,
      title: `영화제목${pageParam*pageSize + index}`
    }))

    return {
      movies,
      nextCursor: pageParam<5 ? pageParam + 1 : undefined
    }
  }

  const {
    data,
    error,   
    isLoading, 
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({pageParam})=>fetchPage(pageParam),
    initialPageParam: 1,
    getNextPageParam:(lastPage) => lastPage.nextCursor,
  });

  useEffect(()=>{
    if((inView && !isFetchingNextPage && hasNextPage)){
      //새 영화 데이터 요청 
      fetchNextPage();
    }
  },[inView, isFetchingNextPage, hasNextPage]);

  return(
    <>
      {
        isLoading && <SkeletonMovieList /> 
      }
      <ul className="grid grid-cols-5 gap-[20px] xl:max-2xl:grid-cols-4 md:max-xl:grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1 justify-center">
        {
          data?.pages.map((group,i)=>(
            <React.Fragment key={i}>
              {
                group.movies?.map((movie)=>(
                  <MovieItem 
                    key={movie.id}
                    poster=""
                    title={movie.title}
                    genre="장르"
                    releaseAt="2025-08-20"
                    director="홍길동"/>
                ))
              }
            </React.Fragment>
          ))
        }
      </ul>
      {
        isFetchingNextPage ? (
          <SkeletonMovieList />
        ) : (
          <div ref={ref}></div>
        )
      }
    </>
  )
}

export default MovieList;