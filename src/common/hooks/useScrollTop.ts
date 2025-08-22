//2025.08.22 화면 이동 시 스크롤 위치 초기화 - 박민서

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const useScrollTop = () => {
  const location = useLocation();
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])
}

export default useScrollTop;