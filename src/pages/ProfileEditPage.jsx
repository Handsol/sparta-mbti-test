import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/bearsStore";

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const { avatar, nickname } = useAuthStore((state) => state);

  const [newNickname, setNewNickname] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);

  const updateProfileHandler = async () => {
    // 수정할 프로필 내용을 FormData로 포장해서 auth.js로 전송
    const formData = new FormData();
    formData.append("nickname", newNickname);
    formData.append("avatar", newAvatar);
    const response = await updateProfile(formData);

    if (response.success) {
      useAuthStore.setState({
        avatar: response.avatar,
        nickname: response.nickname,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <h1>My Profile</h1>
      <img
        src={avatar ? avatar : "/images/default-profile.png"}
        alt="Profile"
        width="150"
        height="150"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewAvatar(e.target.files[0])}
      />
      <p>Now Using Nickname: {nickname}</p>
      <input
        type="text"
        placeholder="Change your nickname"
        value={newNickname}
        minLength="1"
        maxLength="10"
        onChange={(e) => setNewNickname(e.target.value)}
      />
      <button onClick={updateProfileHandler}>Save Changes</button>
    </div>
  );
};

export default ProfileEditPage;
