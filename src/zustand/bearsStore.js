import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  accessToken: null,
  setUserLogin: (status, token) => {
    set({ isAuthenticated: status, accessToken: token });
  },
  // 로그아웃 시 정보 및 토큰 초기화
  setUserLogout: () => set({ isAuthenticated: false, accessToken: null }),
}));

export default useAuthStore;
