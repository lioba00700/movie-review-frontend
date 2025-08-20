import { create } from 'zustand'

const useThemeStore = create((set)=>({
    theme: 'light',
    changeTheme: (theme: 'light' | 'dark') => set({theme: theme})
}))

export default useThemeStore;