import { useState } from "react";
import { register } from "../api/auth";

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = { id, password, nickname };
      await register(userData);
      alert("회원가입 성공");
    } catch (error) {
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={signUpHandler}>
        <input
          type="text"
          name="id"
          placeholder="Insert your ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          name="nickname"
          placeholder="Insert your Name"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Insert your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
