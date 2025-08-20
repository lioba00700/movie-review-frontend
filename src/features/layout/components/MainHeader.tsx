import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const MainHeader = () => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = (theme:string) => {
        //전역 상태관리로 변경 예정
        setTheme(theme);
    }

    return(
        <header
            className="flex justify-between bg-blue-400">
            <h1>영화 리뷰</h1>
            <div>
                <NavLink to={'/'}>목록</NavLink>
                <NavLink to={'/add'}>영화 등록</NavLink>
            </div>
            <ThemeToggle theme={theme} onClick={toggleTheme}/>
        </header>
    )
}

export default MainHeader;