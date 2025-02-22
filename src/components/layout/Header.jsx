import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col justify-between items-center h-[100px] w-full max-w-[800px] min-w-[250px] mx-auto bg-gray-500 rounded-lg">
      <h1 className="text-4xl font-bold pt-4" onClick={() => navigate("/")}>
        MBTI 테스트
      </h1>
      <div className="flex text-lg font-medium pb-2 gap-4">
        <button onClick={() => navigate("/login")}>Log in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
