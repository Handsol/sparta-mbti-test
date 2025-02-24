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

    // 로그인 시 정보를 zustand에 전송
    if (response.data.accessToken) {
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

// 로그아웃 로직
export const logout = () => {
  // zustand 초기화
  useAuthStore.getState().setUserLogout();
  window.location.href = "/";
};

// 프로필 확인 로직
export const getUserProfile = async (token) => {
  const response = await fetch("https://yourapi.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // 헤더에 토큰을 포함시켜 유저 정보 요청
    },
  });

  if (!response.ok) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }

  return await response.json(); // 유저 정보를 반환
};

// 프로필 수정 로직
export const updateProfile = async (formData) => {
  console.log(formData);
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(error.response.data.message);
    }
  }
};
