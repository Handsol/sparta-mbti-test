import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-lg w-full text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          테스트를 진행해보세요!
        </h1>
        <button
          onClick={() => navigate("/test")}
          className="bg-blue-200 text-blue-800 py-2 px-6 rounded-full text-lg border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
