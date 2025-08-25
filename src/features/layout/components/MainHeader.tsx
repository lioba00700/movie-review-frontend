//2025.08.22 통일성을 위해 NavLink를 useNavigate로 변경 - 박민서
//2025.08.21 공용 헤더 컴포넌트 - 박민서
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import useTheme from "@/common/hooks/useTheme";

const MainHeader = () => {
    const navigate = useNavigate();
    const {theme, changeTheme } = useTheme();

    const toggleTheme = () => {
        //전역 상태관리로 변경 예정
        changeTheme();
    }

    return(
        <header
            className="flex justify-between bg-white dark:bg-black fixed w-full h-[60px] z-4 border-b-1 border-gray-200 dark:border-gray-500 items-center p-[20px] top-0">
            <h1 className="text-2xl font-bold dark:text-white">영화 리뷰</h1>
            <div className="flex gap-[30px] text-md font-semibold text-gray-600 dark:text-gray-200">
                <p className="hover:text-gray-400 cursor-pointer" onClick={()=>navigate('/')}>목록</p>
                <p className="hover:text-gray-400 cursor-pointer" onClick={()=>navigate('/add/director')} >감독 등록</p>
                {
                    <p className="hover:text-gray-400 cursor-pointer" onClick={()=>navigate('/admin/movies')} >영화 관리</p>
                }
            </div>
            <div className="flex items-center gap-[20px] ">
                <p className="hover:text-gray-400 cursor-pointer text-gray-600 dark:text-gray-200 text-md font-semibold" onClick={()=>navigate('/admin/login')} >관리자 로그인</p>
                <ThemeToggle theme={theme} onClick={toggleTheme}/>
            </div>
        </header>
    )
}

export default MainHeader;