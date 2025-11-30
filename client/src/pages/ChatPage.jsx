import ProfileHeader from '../components/ProfileHeader'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import ChatsList from '../components/ChatsList';
import ContactList from '../components/ContactList';
import ChatContainer from '../components/ChatContainer';
import NoConversationPlaceholder from '../components/NoConversationPlaceholder';
import { useChatStore } from '../store/useChatStore';

function ChatPage() {

  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="w-full max-w-6xl h-[90vh] mx-auto bg-white/10 backdrop-blur-xl border border-gray-700 rounded-xl shadow-xl overflow-hidden flex">

      {/* LEFT SIDE */}
      <div className="w-80 bg-slate-800/60 backdrop-blur-md flex flex-col border-r border-gray-700">

        {/* Profile */}
        <ProfileHeader />

        {/* Tabs */}
        <ActiveTabSwitch />

        {/* Chats / Contacts */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {activeTab === "chats" ? <ChatsList /> : <ContactList />}
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-slate-900/60 backdrop-blur-md flex flex-col">
        {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
      </div>
    </div>
  );
}

export default ChatPage;
