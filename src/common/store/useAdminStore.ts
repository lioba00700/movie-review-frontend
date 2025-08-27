//2025.08.27 관리자 로그인 상태 관리 로직 - 박민서
import { create } from "zustand";
import type { AdminState } from "../types";

const useAdminStore = create<AdminState>(set => ({
  token:
    "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJjaG9laHVud29vQGdtYWlsLmNvbSIsImlhdCI6MTc1NjI4MDAxNywiZXhwIjoxNzU2MjgzODU3LCJzdWIiOiJhZG1pbiIsImlkIjoxLCJ0eXBlIjoiQSIsImF1dGhvcml0aWVzIjpbIkRFTEVURV9BVVRIT1JJVFkiLCJSRUFEX0FVVEhPUklUWSIsIlVQREFURV9BVVRIT1JJVFkiLCJDUkVBVEVfQVVUSE9SSVRZIiwiUk9MRV9BRE1JTiJdfQ.NWbWXgGzb4k0OH7tel5kKuVLElY8FKspoyzeAJBKJWA",
  login: token =>
    set({
      token,
    }),
  logout: () =>
    set({
      token: "",
    }),
}));

export default useAdminStore;
