import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeState } from '../types';

const useThemeStore = create<ThemeState>()(
  persist((set)=>({
    theme: 'light',
    changeTheme: () => set((state)=>({
      theme: state.theme === 'light' ? 'dark' : 'light'
    }))
  }),
  {
    name:'theme-storage',
  }
))

export default useThemeStore;