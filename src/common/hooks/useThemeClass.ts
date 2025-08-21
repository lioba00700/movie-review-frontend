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