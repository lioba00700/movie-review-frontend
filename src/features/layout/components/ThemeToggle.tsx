import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

type ThemeToggle = {
  theme:string, 
  onClick:(theme:string)=>void
}

const ThemeToggle = ({theme, onClick}:ThemeToggle) => {
  return (
    <div className={`${theme==='light' ? "bg-gray-400" : "bg-white"} w-[50px]`}>
      <button onClick={()=>onClick('light')}/>
      <button onClick={()=>onClick('dark')}/>
      <span className="">
        {
          theme == 'light' ? (
            <MdDarkMode className="text-white"/>
          ) : (
            <MdOutlineLightMode />
          )
        }
      </span>
    </div>
  )
}

export default ThemeToggle;