//2025.08.22 영화 목록 스켈레톤 UI - 박민서
import SkeletonMovieItem from "./SkeletonMovieItem"

const SkeletonMovieList = () => {
  return(
    <ul className="grid grid-cols-5 gap-[20px] xl:max-2xl:grid-cols-4 md:max-xl:grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1 justify-center mt-[20px]">
        {
          Array.from({length:20}).map((_, i)=>(
            <SkeletonMovieItem key={i}/>
          ))
        }
      </ul>
  )
}

export default SkeletonMovieList;