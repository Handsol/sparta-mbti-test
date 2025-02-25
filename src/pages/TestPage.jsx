import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult, getTestResults } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/bearsStore";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { nickname, userId } = useAuthStore((state) => state);

  // 테스트 결과에 랜덤한 아이디를 부여해서 생성
  const handleTestSubmit = async (answers) => {
    if (!nickname || !userId) {
      alert("접속된 계정이 없음");
      return;
    }
    const mbtiResult = calculateMBTI(answers);

    const newTestResult = {
      id: crypto.randomUUID(),
      nickname: nickname,
      result: mbtiResult,
      date: Date.now(),
      userId: userId,
    };

    //예외처리
    const testResults = await getTestResults();
    if (testResults.some((result) => result.userId === userId)) {
      alert("결과가 이미 존재합니다. 결과 페이지로 이동합니다.");
      return navigate(`/result`);
    }

    try {
      const data = await createTestResult(newTestResult);
      if (data) {
        setResult(data.result);
        alert("테스트가 완료되었습니다! 결과를 확인하세요!");
      }
    } catch (error) {
      console.error("테스트 전송 실패 : ", error);
      alert("테스트 결과 전송에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full border border-blue-200 shadow-md overflow-y-auto scrollbar-hidden">
        <div className="bg-white z-10 w-full mb-4">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">MBTI 테스트</h1>
          <TestForm onSubmit={handleTestSubmit} />
          <div className="mt-4 flex flex-col items-center gap-3">
            <label className="mr-2">
              당신의 MBTI는... {result ? result : "테스트를 진행해주세요"}
            </label>
            <button
              onClick={() => navigate("/result")}
              className="bg-blue-200 text-blue-800 py-2 px-6 rounded-lg border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
            >
              자세히 보기
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)] scrollbar-hidden">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
