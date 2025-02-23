import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import MainPage from "../pages/MainPage";
import LogInPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import TestResultPage from "../pages/TestResultPage";
import ProfileEditPage from "../pages/ProfileEditPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/editprofile" element={<ProfileEditPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/result" element={<TestResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
