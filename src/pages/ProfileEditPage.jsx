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

    // 변경할 프로필 사진을 올렸을때만 FormData로 전송
    if (newAvatar) {
      formData.append("avatar", newAvatar);
    }
    const response = await updateProfile(formData);

    // 프로필 수정 시 바로 적용되도록 로직 추가
    if (response.success) {
      useAuthStore.setState({
        avatar: response.avatar,
        nickname: response.nickname,
      });
      alert("프로필이 성공적으로 변경되었습니다.");
      navigate("/profile");
    }
  };

  return (
    <div className="h-[650px] w-full max-w-[700px] min-w-[244px] flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white rounded-lg p-6 shadow-md w-[90%] max-w-[500px] text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Edit Profile</h1>

        {/* 프로필 이미지 */}
        <img
          src={avatar ? avatar : "/images/default-profile.png"}
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full border border-blue-300 shadow-sm mb-4 block mx-auto"
        />

        {/* 파일 업로드 */}
        <label className="block text-gray-600 text-sm font-medium cursor-pointer mb-4">
          Change Profile Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewAvatar(e.target.files[0])}
            className="hidden"
          />
        </label>

        {/* 현재 닉네임 */}
        <p className="text-lg text-gray-700 mb-2">
          Now Using Nickname: {nickname}
        </p>

        {/* 닉네임 변경 입력 */}
        <input
          type="text"
          placeholder="Change your nickname"
          value={newNickname}
          minLength="1"
          maxLength="10"
          onChange={(e) => setNewNickname(e.target.value)}
          className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        {/* 저장 버튼 */}
        <button
          onClick={updateProfileHandler}
          className="bg-blue-200 text-blue-800 py-2 px-6 rounded-lg border border-blue-300 hover:bg-blue-300 transition duration-300 shadow-sm hover:shadow-md mb-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileEditPage;
