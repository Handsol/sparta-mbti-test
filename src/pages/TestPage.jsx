import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult, getTestResults } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import { useEffect } from "react";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 로컬스토리지에 저장된 유저 정보 가져오기
    const fetchUserData = async () => {
      const currentToken = localStorage.getItem("accessToken");
      const userData = await getUserProfile(currentToken);

      setUser(userData.data);
    };

    fetchUserData();
  }, []);

  // 테스트 결과에 랜덤한 아이디를 부여해서 생성
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    const newTestResult = {
      id: crypto.randomUUID(),
      nickname: user?.nickname,
      result: mbtiResult,
      date: Date.now(),
      userId: user.id,
    };

    //예외처리
    const testResults = await getTestResults();
    if (testResults.some((result) => result.userId === user.id)) {
      alert("결과가 이미 존재합니다. 결과 페이지로 이동합니다.");
      return navigate(`/result`);
    }

    try {
      const data = await createTestResult(newTestResult);
      if (data) {
        setResult(data.result);
      }
    } catch (error) {
      console.error("테스트 전송 실패 : ", error);
      alert("테스트 결과 전송에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-auto">
        <div className=" bg-white z-10 w-full mb-4">
          <h1 className="text-3xl font-bold text-primary-color mb-6">
            MBTI 테스트
          </h1>
          <TestForm onSubmit={handleTestSubmit} />
          <div className="mt-4">
            <label className="mr-2">결과 공개:</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]"> </div>
      </div>
    </div>
  );
};

export default TestPage;
