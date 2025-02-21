import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import LogInPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
