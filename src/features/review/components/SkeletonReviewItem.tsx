//2025.08.22 리뷰 목록 스켈레톤 UI - 박민서

const SkeletonReviewItem = () => {
  return(
    <li className="animate-pulse border-1 border-gray-300 rounded-xl w-full p-[20px] relative">
      <div className="rounded-full bg-gray-300 w-[10%] h-[15px] mb-[15px]"></div>
      <div className="rounded-full bg-gray-300 w-[20%] h-[15px] mb-[30px]"></div>
      <div className="rounded-full bg-gray-300 w-[80%] h-[15px]"></div>
    </li>
  )
}

export default SkeletonReviewItem;