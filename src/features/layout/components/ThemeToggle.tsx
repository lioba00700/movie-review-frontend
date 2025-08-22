//2025.08.21 테마 토글 버튼- 박민서
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

type ThemeToggle = {
  theme:string, 
  onClick:()=>void
}

const ThemeToggle = ({theme, onClick}:ThemeToggle) => {
  return (
    <button 
      className={`${theme==='light' ? "bg-black" : "bg-white border-gray-400 border-1"} flex w-[60px] transition-all rounded-full cursor-pointer p-[3px]`}
      onClick={onClick} >
      <span className={`${theme==='light' ? "bg-white -translate-x-0" : "bg-black translate-x-full"} flex w-[25px] h-[25px] rounded-full transition-all items-center justify-center`}>
        {
          theme == 'light' ? (
            <MdDarkMode className="text-black"/>
          ) : (
            <MdOutlineLightMode className="text-white"/>
          )
        }
      </span>
    </button>
  )
}

export default ThemeToggle;