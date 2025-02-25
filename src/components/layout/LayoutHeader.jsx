import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const logOutHandler = () => {
    logout();
  };

  return (
    <header className="flex flex-col justify-between items-center h-[130px] w-full max-w-[800px] min-w-[250px] mx-auto bg-blue-300 rounded-lg">
      <h1
        className="text-4xl font-bold text-white pt-4 cursor-pointer mb-4"
        onClick={() => navigate("/")}
      >
        MBTI 테스트
      </h1>
      <div className="flex text-lg font-medium pb-4 gap-4">
        {accessToken ? (
          // 로그인 상태일 때는 로그아웃 버튼
          <button
            onClick={logOutHandler}
            className="bg-blue-200 text-blue-800 py-1 px-3 rounded-lg hover:bg-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Log out
          </button>
        ) : (
          // 로그인 상태가 아닐 때는 로그인 버튼
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-200 text-blue-800 py-1 px-3 rounded-lg hover:bg-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Log in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
