import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/bearsStore";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { avatar, nickname } = useAuthStore((state) => state);

  return (
    <div className="flex flex-col">
      <h1>My Profile</h1>
      <img
        src={avatar ? avatar : "/images/default-profile.png"}
        alt="Profile"
        width="150"
        height="150"
      />
      <p>Nickname : {nickname || "닉네임을 정하지 않았습니다."}</p>
      <button onClick={() => navigate("/editprofile")}>Edit Profile</button>
    </div>
  );
};
export default ProfilePage;
