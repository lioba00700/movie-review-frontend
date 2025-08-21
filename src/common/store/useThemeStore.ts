import { create } from 'zustand'
import type { ThemeState } from '../types';

const useThemeStore = create<ThemeState>((set)=>({
  theme: 'light',
  changeTheme: () => set((state)=>({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
}))

export default useThemeStore;