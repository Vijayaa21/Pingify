import { Search, Pin } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import ChatsList from "./ChatsList";
import ContactList from "./ContactList";
import ActiveTabSwitch from "./ActiveTabSwitch";
import ProfileHeader from "./ProfileHeader";

export default function AppSidebar() {
  const activeTab = useChatStore((state) => state.activeTab);
  
 
  return (
    <div className="w-80 h-full bg-[#151E32] backdrop-blur-xl border-r border-white/5 text-white flex flex-col relative z-20">

      {/* -------------------- APP HEADER -------------------- */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {/* App Logo */}
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg ">
            <img src="/favicon.svg" alt="Pingify logo" />
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold tracking-tight text-white">Pingify</h1>
        </div>

        {/* Add Contact Button */}
        <ActiveTabSwitch />
      </div>

      {/* -------------------- SEARCH BAR -------------------- */}
      <div className="px-6 mb-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full bg-slate-700/50 text-sm py-2.5 pl-10 pr-4 rounded-xl border border-white/5 focus:outline-none focus:bg-slate-700/80 focus:ring-1 focus:ring-teal-500/50 placeholder-slate-500 transition-all"
          />
        </div>
      </div>

      {/* -------------------- PINNED LABEL -------------------- */}
      {activeTab === "chats" && (
        <div className="px-6 mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <Pin className="w-3 h-3 text-teal-400" />
          <span className="text-teal-100/80">Pinned</span>
        </div>
      )}

      {/* -------------------- MAIN LIST -------------------- */}
      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        {activeTab === "chats" ? <ChatsList /> : <ContactList />}
      </div>

      {/* -------------------- FOOTER PROFILE -------------------- */}
      < ProfileHeader  />
    </div>
  );
}
