import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  accessToken: localStorage.getItem("accessToken") || null,
  avatar: localStorage.getItem("avatar") || null,
  nickname: localStorage.getItem("nickname") || null,
  id: localStorage.getItem("userId") || null,

  setUserLogin: (status, token, avatar, nickname, userId) => {
    // 로그인 성공 시 로컬 스토리지에 정보 저장
    localStorage.setItem("accessToken", token);
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("userId", userId);

    set({
      isAuthenticated: status,
      accessToken: token,
      avatar: avatar,
      nickname: nickname,
      userId: userId,
    });
  },
  // 로그아웃 시 정보 및 토큰 초기화
  setUserLogout: () => {
    // 로그아웃 시 로컬 스토리지에 저장한 정보 삭제
    localStorage.removeItem("accessToken");
    localStorage.removeItem("avatar");
    localStorage.removeItem("nickname");
    localStorage.removeItem("userId");

    set({
      isAuthenticated: false,
      accessToken: null,
      avatar: null,
      nickname: null,
      userId: null,
    });
  },
}));

export default useAuthStore;
