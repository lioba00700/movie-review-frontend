import { NavLink } from "react-router-dom";

const MainHeader = () => {
    return(
        <header
            className="flex justify-between  -lg">
            <h1>영화 리뷰</h1>
            <div>
                <NavLink to={'/'}>목록</NavLink>
                <NavLink to={'/add'}>영화 등록</NavLink>
            </div>
        </header>
    )
}

export default MainHeader;