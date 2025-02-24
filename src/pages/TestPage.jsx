import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { updateTestResultVisibility } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/question";

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const handleTestSubmit = async (answers) => {
    try {
      // 선택된 답을 바탕으로 MBTI 결과 계산
      const mbtiResult = calculateMBTI(answers);

      // 서버에 테스트 결과 저장 (createTestResult)
      const resultData = await createTestResult({
        user: { id: user.id, nickname: user.nickname },
        result: mbtiResult,
      });

      // 결과를 상태로 업데이트
      setResult(mbtiResult);

      // 테스트 결과 공개 여부를 true로 업데이트 (결과가 보이게 설정)
      await updateTestResultVisibility(resultData.id, true);
      setVisibility(true);
    } catch (error) {
      console.error("테스트 결과 생성 중 오류 발생: ", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">MBTI 테스트</h1>
      <TestForm questions={questions} onSubmit={handleTestSubmit} />
      {visibility && result && (
        <div>
          <h2 className="text-2xl mt-6">결과: {result}</h2>
          <button
            onClick={() => navigate("/result")}
            className="mt-6 w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
          >
            결과 자세히 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
