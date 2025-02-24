import { useState, useEffect } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getTestResults } from "../api/testResults";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const fetchedResults = await getTestResults();
        setResults(fetchedResults);
      } catch (error) {
        console.error("Error fetching test results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">테스트 결과</h1>

      <ul>
        {results.map(
          (result) =>
            result.visibility && (
              <li key={result.id} className="mb-6">
                <h2 className="text-2xl">{result.mbtiResult}</h2>
                <p>{mbtiDescriptions[result.mbtiResult]}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TestResultPage;
