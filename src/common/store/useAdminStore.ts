//2025.08.27 관리자 로그인 상태 관리 로직 - 박민서
import { create } from "zustand";
import type { AdminState } from "../types";
import { persist } from "zustand/middleware";

const useAdminStore = create<AdminState>()(
  persist(
    set => ({
      token: null,
      isLogin: false,
      login: (token: string) =>
        set({
          token,
          isLogin: true,
        }),
      logout: () =>
        set({
          token: null,
          isLogin: false,
        }),
    }),
    { name: "admin-storage" },
  ),
);

export default useAdminStore;
