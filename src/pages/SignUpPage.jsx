import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  // 회원가입 시 받아올 정보
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = { id, password, nickname };

      // 회원가입 예외처리

      if (nickname.length > 10) {
        alert("닉네임은 10글자를 넘을 수 없습니다.");
        return;
      }
      if (password.length < 8 || password.length > 16) {
        alert("비밀번호는 최소 8자리, 최대 16자리입니다.");
        return;
      }
      if (userData.password !== checkPw) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      // 모든 예외처리 통과 시 회원가입
      const response = await register(userData);

      if (response) {
        alert("회원가입 성공, 로그인 해보세요.");
        navigate("/login");
      }
    } catch (error) {
      console.error("회원가입 실패: ", error);
      alert("회원가입을 실패했습니다. 이유는 : " + error.message);
    }
  };

  return (
    <div className="h-[650px] w-full max-w-[700px] min-w-[244px] flex flex-col items-center justify-center bg-white">
      <div className="bg-blue-50 rounded-lg p-6 shadow-md w-[90%] max-w-[500px] text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Sign up</h1>

        <form onSubmit={signUpHandler} className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="Insert your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="nickname"
            placeholder="Insert your Name"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Insert your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="checkPassword"
            placeholder="Check your password"
            value={checkPw}
            onChange={(e) => setCheckPw(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-1 bg-blue-200 text-blue-800 font-semibold rounded-md border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
