import { useState, useRef } from "react";
import { LogOut, Volume2, VolumeOff } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useNavigate } from "react-router-dom";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const navigate = useNavigate();
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSoundToggle = () => {
    mouseClickSound.currentTime = 0;
    mouseClickSound.play().catch(() => {});
    toggleSound();
  };

  return (
    <div className="px-6 py-4 border-b border-white/10 bg-[#1A2639] backdrop-blur-md flex items-center justify-between">
      {/* Avatar + Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="w-12 h-12 rounded-full overflow-hidden relative group border-2 border-white/10 shadow-sm"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-xs font-medium">Change</span>
            </div>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-gray-900 bg-green-400" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white truncate max-w-[150px]">
            {authUser.fullName}
          </span>
          <span className="text-xs text-slate-400">Online</span>
        </div>
      </div>

      {/* Actions: Logout + Sound */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleLogout}
          className="p-2 text-slate-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>

        <button
          onClick={handleSoundToggle}
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          title={isSoundEnabled ? "Mute Sounds" : "Enable Sounds"}
        >
          {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeOff className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
