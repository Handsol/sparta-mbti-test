import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../zustand/bearsStore";

const ProtectedRoute = () => {
  const { accessToken } = useAuthStore((state) => state);
  const { pathname } = useLocation();

  // 로컬 스토리지에서 accessToken을 가져와서 상태를 설정
  const token = accessToken || localStorage.getItem("accessToken");

  // 토큰이 있다면 페이지 접근 가능
  if (token) {
    return <Outlet />;
  }

  //토큰이 없다면 로그인 화면으로 이동
  return <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />;
};

export default ProtectedRoute;
