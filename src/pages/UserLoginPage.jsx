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
    <div className="h-[650px] w-full max-w-[700px] min-w-[244px] flex flex-col items-center justify-center bg-white">
      <div className="bg-blue-50 rounded-lg p-6 shadow-md w-[90%] max-w-[500px] text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Log in</h1>

        <form onSubmit={logInHandler} className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="Insert Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Insert Your PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-1 bg-blue-200 text-blue-800 font-semibold rounded-md border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
          >
            Log in
          </button>
          <p> 가입된 계정이 없다면? </p>
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-1 bg-blue-200 text-blue-800 font-semibold rounded-md border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
          >
            Sign up here
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
