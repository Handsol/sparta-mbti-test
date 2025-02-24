import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 테스트 결과를 가져오는 로직
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 테스트 결과를 생성하는 로직
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

// 테스트 결과를 삭제하는 로직
export const deleteTestResult = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// 테스트 결과 공개여부를 제어하는 로직
export const updateTestResultVisibility = async (id, visibility) => {
  await axios.patch(`${API_URL}/${id}`, { visibility });
};
