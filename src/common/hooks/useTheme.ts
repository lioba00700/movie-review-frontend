//2025.08.21 Zustand 테마 상태값 관리 - 박민서
import useThemeStore from "@/common/store/useThemeStore"

const useTheme = () => {
  const theme = useThemeStore((state)=>state.theme);
  const changeTheme = useThemeStore((state)=>state.changeTheme);

  return {theme, changeTheme}
}

export default useTheme