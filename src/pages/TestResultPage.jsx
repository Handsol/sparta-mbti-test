import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTestResults } from "../api/testResults";
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
        <button onClick={() => navigate("/")}>다시 테스트하기</button>
      </div>
    </div>
  );
};

export default TestResultPage;
