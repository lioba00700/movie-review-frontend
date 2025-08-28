//2025.08.27 관리자 로그인 상태 관리 로직 - 박민서
import { create } from "zustand";
import type { AdminState } from "../types";

const useAdminStore = create<AdminState>(set => ({
  token:
    "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJjaG9laHVud29vQGdtYWlsLmNvbSIsImlhdCI6MTc1NjM0MzYzMywiZXhwIjoxNzU2NTU5NjMzLCJzdWIiOiJhZG1pbiIsImlkIjoxLCJ0eXBlIjoiQSIsImF1dGhvcml0aWVzIjpbIlJFQURfQVVUSE9SSVRZIiwiREVMRVRFX0FVVEhPUklUWSIsIkNSRUFURV9BVVRIT1JJVFkiLCJVUERBVEVfQVVUSE9SSVRZIiwiUk9MRV9BRE1JTiJdfQ.2UunQ2LVAukeryszoX2yAL6aazinqA3OVxRYs4x4Ff0",
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
