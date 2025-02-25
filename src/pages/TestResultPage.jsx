import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTestResult, getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useAuthStore from "../zustand/bearsStore";

const TestResultPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { userId } = useAuthStore((state) => state);
  const [description, setDescription] = useState("");

  console.log(userId);

  useEffect(() => {
    const fetchTestResult = async () => {
      const results = await getTestResults();
      const userResult = results.find((result) => result.userId === userId);

      if (userResult) {
        setResult(userResult);
        const description = mbtiDescriptions[userResult.result];
        setDescription(description);
      } else {
        alert("결과를 찾을 수 없습니다.");
      }
    };

    fetchTestResult();
  }, [userId, navigate]);

  const handleRetryTest = async () => {
    try {
      await deleteTestResult(result.id);
      alert("기존 결과가 삭제되었습니다. 다시 테스트를 진행해주세요.");
      navigate("/");
    } catch (error) {
      console.error("결과를 삭제하지 못함 : ", error);
      alert("결과를 삭제하지 못했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-auto">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          MBTI 결과
        </h1>
        {result ? (
          <div className="mb-4">
            <h2 className="text-xl font-bold">결과: {result.result}</h2>
            <p className="mt-2">{description}</p>
          </div>
        ) : (
          <p>테스트를 진행해주세요!</p>
        )}
        <button onClick={handleRetryTest}>다시 테스트하기</button>
      </div>
    </div>
  );
};

export default TestResultPage;
