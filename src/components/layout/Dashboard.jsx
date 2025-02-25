import { useLocation, useNavigate } from "react-router-dom";
import MainPage from "../../pages/MainPage";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const test = useLocation().pathname === "/";

  return (
    <div className="flex flex-col items-center h-[750px] w-full max-w-[800px] min-w-[344px] mx-auto bg-blue-100 rounded-lg">
      <div className="flex justify-between items-center h-[50px] w-full max-w-[500px] min-w-[150px] text-lg font-medium pb-2 pt-2 gap-10">
        <button
          onClick={() => navigate("/test")}
          className="bg-blue-200 text-blue-800 py-2 px-4 rounded-lg border border-blue-300 hover:bg-blue-300"
        >
          MBTI Test
        </button>
        <button
          onClick={() => navigate("/result")}
          className="bg-blue-200 text-blue-800 py-2 px-4 rounded-lg border border-blue-300 hover:bg-blue-300"
        >
          My Result
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-200 text-blue-800 py-2 px-4 rounded-lg border border-blue-300 hover:bg-blue-300"
        >
          My Profile
        </button>
      </div>
      <div className="flex justify-between h-[650px] w-full max-w-[700px] min-w-[244px] mx-auto bg-white rounded-lg overflow-auto shadow-md">
        {test ? <MainPage /> : children}
      </div>
    </div>
  );
};

export default Dashboard;
