import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate;

  return (
    <header className="flex justify-between items-center">
      <h1>MBTI 테스트</h1>
      <div>
        <button onClick={() => navigate("/login")}>Log in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
