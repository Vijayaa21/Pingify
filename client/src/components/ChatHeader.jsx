import { Menu, Phone, Video, Users, MoreVertical } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, toggleSidebar, closeSidebar } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline =
    selectedUser?._id && Array.isArray(onlineUsers)
      ? onlineUsers.includes(selectedUser._id)
      : false;

  if (!selectedUser) return null;

  return (
    <div className="w-full h-16 px-4 flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <button
          className="text-white/80 hover:text-white"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>

        <img
          src={selectedUser.profilePic || "/default-avatar.png"}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <h2 className="text-white font-semibold text-lg">
            {selectedUser.fullName}
          </h2>

          <div className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            <p className="text-sm text-white/70">
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5 text-white/80">
        <button className="hover:text-white" aria-label="Voice call">
          <Phone size={22} />
        </button>
        <button className="hover:text-white" aria-label="Video call">
          <Video size={22} />
        </button>
        <div className="h-6 w-px bg-white/20"></div>

        <button
          className="w-9 h-9 rounded-full bg-emerald-600/30 flex items-center justify-center hover:bg-emerald-600/40"
          onClick={closeSidebar}
        >
          <Users size={20} className="text-emerald-300" />
        </button>

        <button className="hover:text-white" aria-label="More options">
          <MoreVertical size={22} />
        </button>      </div>
    </div>
  );
}

export default ChatHeader;
