//2025.08.22 영화 목록 스켈레톤 UI - 박민서
const SkeletonMovieItem = () => {
  return(
    <li 
      className="animate-pulse bg-white dark:bg-gray-500/40 dark:border-none min-w-[250px] transition-all cursor-pointer rounded-xl hover:shadow-2xl overflow-hidden border-1 border-gray-200">
      <div 
        className="w-full bg-gray-300 dark:bg-white/20 aspect-[1/1.3]">
      </div>
      <div className="p-[20px]">
        <div className="mb-[20px] w-[70%] h-[20px] bg-gray-300 rounded-full"></div>  
        <div className="w-[40%] h-[20px] bg-gray-300 rounded-full mt-[10px] mb-[10px]"></div>
        <div className="w-[60%] h-[20px] bg-gray-300 rounded-full mb-[10px]"></div>
        <div className="w-[40%] h-[20px] bg-gray-300 rounded-full mb-[10px]"></div>
      </div>
    </li>
  )
}

export default SkeletonMovieItem;