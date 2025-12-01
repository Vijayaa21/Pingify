import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

export default function AddContactToggleButton() {
  const { activeTab, setActiveTab } = useChatStore();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleToggle = () => {
    if (!isContactOpen) {
      // First click: show contacts
      setActiveTab("contacts");
    } else {
      // Second click: back to chats
      setActiveTab("chats");
    }
    setIsContactOpen(!isContactOpen);
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-all border border-transparent
        ${isContactOpen 
          ? 'bg-teal-500/20 text-teal-400 border-teal-500/30'
          : 'bg-white/5 hover:bg-teal-500/20 hover:text-teal-400'
        }`}
      title="Add Contact"
    >
      <UserPlus className="w-4 h-4" />
    </button>
  );
}
