import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-light-blue-100">
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-black mb-6">
          테스트를 진행해보세요!
        </h1>
        <button
          onClick={() => navigate("/test")}
          className="bg-primary-color text-black py-2 px-6 rounded-full text-lg border-2 border-primary-color hover:bg-primary-color-dark hover:border-primary-color-dark transition duration-300"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
