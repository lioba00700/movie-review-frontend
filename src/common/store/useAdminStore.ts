//2025.08.27 관리자 로그인 상태 관리 로직 - 박민서
import { create } from "zustand";
import type { AdminState } from "../types";
import { persist } from "zustand/middleware";

const useAdminStore = create<AdminState>()(
  persist(
    set => ({
      isLogin: false,
      login: () =>
        set({
          isLogin: true,
        }),
      logout: () =>
        set({
          isLogin: false,
        }),
    }),
    { name: "admin-storage" },
  ),
);

export default useAdminStore;
