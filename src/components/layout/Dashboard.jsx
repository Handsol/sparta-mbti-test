import { useLocation, useNavigate } from "react-router-dom";
import MainPage from "../../pages/MainPage";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const test = useLocation().pathname === "/";

  return (
    <div className="flex flex-col items-center h-[750px] w-full max-w-[800px] min-w-[344px] mx-auto bg-gray-300 rounded-lg">
      <div className="flex justify-between items-center h-[50px] w-full max-w-[500px] min-w-[150px] text-lg font-medium pb-2 gap-10">
        <button onClick={() => navigate("/test")}>MBTI Test</button>
        <button onClick={() => navigate("/result")}>My Result</button>
        <button onClick={() => navigate("/profile")}>My Profile</button>
      </div>
      <div className="flex justify-between items-center h-[650px] w-full max-w-[700px] min-w-[244px] mx-auto bg-gray-100 rounded-lg overflow-auto">
        {test ? <MainPage /> : children}
      </div>
    </div>
  );
};

export default Dashboard;
