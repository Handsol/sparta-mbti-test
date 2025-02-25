import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = { id, password };
      const loginResponse = await login(userData);

      if (loginResponse && loginResponse.accessToken) {
        alert("로그인 성공");
        navigate("/");
      }
    } catch (error) {
      alert("아이디와 비밀번호가 올바른지 확인하세요.");
    }
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={logInHandler}>
        <input
          type="text"
          name="id"
          placeholder="Insert Your ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Insert Your PW"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
