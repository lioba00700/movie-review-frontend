//2025.08.21 평점 버튼 - 박민서
import { IoStar, IoStarOutline } from "react-icons/io5";

const RatingButton = ({rating, onClick, disabled}:{rating:number, onClick?:(rating:number)=>void, disabled?:boolean}) => {
  return(
    <div className="flex items-center text-yellow-400">
      {
        Array.from({length: 5}).map((_,i)=>(
          <button key={i} disabled={disabled} className={`${disabled ? 'text-md' : 'text-2xl cursor-pointer'}`} onClick={(!disabled && onClick) ? ()=>onClick(i+1) : undefined}>
            {i < rating ? <IoStar /> : <IoStarOutline />}
          </button>
        ))
      }
      <span className="ml-[10px]" >{rating}</span>
    </div>
  )
}

export default RatingButton;