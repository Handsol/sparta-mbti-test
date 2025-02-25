import { useState } from "react";
import { questions } from "../data/question";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //예외처리: 아무 답변도 하지 않거나 빼먹었고 확인버튼 누를 떄
    const isBlank = answers.some((answer) => !answer.answer);
    if (isBlank) {
      alert("테스트를 모두 완료해주세요!");
      return;
    }

    onSubmit(answers);
  };

  console.log(questions);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white rounded-lg border border-blue-200 shadow-md"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg text-blue-800 mb-3">
            {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? "bg-blue-200" : "bg-white"
                } hover:bg-blue-200`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 accent-blue-600"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-1 bg-blue-200 text-blue-800 font-semibold rounded-md border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
