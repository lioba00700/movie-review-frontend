//2025.08.21 루트(html) 태그 테마 클래스 추가 - 박민서
import { useEffect } from "react";
import useTheme from "./useTheme"

const useThemeClass = () => {
  const {theme} = useTheme();

  useEffect(()=>{
    const root = document.querySelector('html');
    if(root){
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
  },[theme])
}

export default useThemeClass;