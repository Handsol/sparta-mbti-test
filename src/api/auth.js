import axios from "axios";
import useAuthStore from "../zustand/bearsStore";

const API_URL = "https://www.nbcamp-react-auth.link";

// 회원가입 로직
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

// 로그인 로직
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);

    // 로그인하면 토큰을 로컬 스토리지에 저장
    if (response.data.accessToken) {
      // localStorage.setItem("accessToken", response.data.accessToken);

      // 로그인 정보를 zustand에 저장
      useAuthStore
        .getState()
        .setUserLogin(
          true,
          response.data.accessToken,
          response.data.avatar,
          response.data.nickname
        );
    }
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

//로그아웃 로직
export const logout = () => {
  // zustand 초기화
  useAuthStore.getState().setUserLogout();
  window.location.href = "/";
};
