import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/bearsStore";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { avatar, nickname } = useAuthStore((state) => state);

  return (
    <div className="h-[650px] w-full max-w-[700px] min-w-[244px] flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white rounded-lg p-6 shadow-md w-[90%] max-w-[500px] text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">My Profile</h1>
        <img
          src={avatar ? avatar : "/images/default-profile.png"}
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full border border-blue-300 shadow-sm mb-4 block mx-auto"
        />

        <p className="text-lg text-gray-700 mb-6">
          Nickname: {nickname || "닉네임을 정하지 않았습니다."}
        </p>
        <button
          onClick={() => navigate("/editprofile")}
          className="bg-blue-200 text-blue-800 py-2 px-6 rounded-lg border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
