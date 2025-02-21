import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

// 회원가입 로직
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
