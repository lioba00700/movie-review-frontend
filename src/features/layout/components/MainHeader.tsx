import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../../../common/hooks/useTheme";

const MainHeader = () => {
    const {theme, changeTheme } = useTheme();

    const toggleTheme = () => {
        //전역 상태관리로 변경 예정
        changeTheme();
    }

    return(
        <header
            className="flex justify-between bg-white dark:bg-black fixed w-full h-[60px] z-4 border-b-1 border-gray-200 dark:border-gray-500 items-center p-[20px] top-0">
            <h1 className="text-2xl font-bold dark:text-white">영화 리뷰</h1>
            <div className="flex gap-[30px] text-lg font-semibold text-gray-600 dark:text-gray-200">
                <NavLink className="hover:text-gray-400" to={'/'}>목록</NavLink>
                <NavLink className="hover:text-gray-400" to={'/add'}>영화 등록</NavLink>
            </div>
            <ThemeToggle theme={theme} onClick={toggleTheme}/>
        </header>
    )
}

export default MainHeader;