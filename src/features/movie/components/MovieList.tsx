import { useEffect } from "react";
import MovieItem from "./MovieItem";
import { useInView } from 'react-intersection-observer';

const MovieList = () => {
  const {ref, inView} = useInView();

  useEffect(()=>{
    if(inView){
      //새 영화 데이터 요청
    }
  },[inView]);

  return(
    <>
      <ul className="grid grid-cols-4 gap-[20px] md:max-xl:grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1">
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
        <MovieItem 
          title="영화 제목"
          genre="장르"
          releaseAt="2025-08-20"
          director="홍길동"/>
      </ul>
      <div ref={ref}></div>
    </>
  )
}

export default MovieList;