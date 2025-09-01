//2025.08.22 리뷰 목록 스켈레톤 UI - 박민서
import SkeletonReviewItem from "./SkeletonReviewItem";

const SkeletonReviewList = () => {
  return(
    <ul className="flex flex-col gap-[20px] w-[60%] min-w-xl mt-[20px]">
        {
          Array.from({length: 10}).map((_, i)=>(
            <SkeletonReviewItem key={i} />
          ))
        }
      </ul>
  )
}

export default SkeletonReviewList;