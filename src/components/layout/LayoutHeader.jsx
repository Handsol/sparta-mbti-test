import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const logOutHandler = () => {
    logout();
  };

  return (
    <header className="flex flex-col justify-between items-center h-[100px] w-full max-w-[800px] min-w-[250px] mx-auto bg-gray-500 rounded-lg">
      <h1 className="text-4xl font-bold pt-4" onClick={() => navigate("/")}>
        MBTI 테스트
      </h1>
      <div className="flex text-lg font-medium pb-2 gap-4">
        {accessToken ? (
          // 로그인 상태일 때는 로그아웃 버튼
          <button onClick={logOutHandler}>Log out</button>
        ) : (
          // 로그인 상태가 아닐 때는 로그인 버튼
          <button onClick={() => navigate("/login")}>Log in</button>
        )}
      </div>
    </header>
  );
};

export default Header;
