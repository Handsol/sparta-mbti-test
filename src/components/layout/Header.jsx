import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center h-[80px] w-full max-w-[800px] min-w-[300px] mx-auto bg-gray-500">
      <h1 onClick={() => navigate("/")}>MBTI 테스트</h1>
      <div>
        <button onClick={() => navigate("/login")}>Log in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
