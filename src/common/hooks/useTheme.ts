import useThemeStore from "../store/useThemeStore"

const useTheme = () => {
  const theme = useThemeStore((state)=>state.theme);
  const changeTheme = useThemeStore((state)=>state.changeTheme);

  return {theme, changeTheme}
}

export default useTheme