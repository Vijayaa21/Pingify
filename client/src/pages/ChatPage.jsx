import ProfileHeader from '../components/ProfileHeader'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import ChatsList from '../components/ChatsList';
import ContactList from '../components/ContactList';
import ChatContainer from '../components/ChatContainer';
import NoConversationPlaceholder from '../components/NoConversationPlaceholder';
import { useChatStore } from '../store/useChatStore';
import AppSidebar from '../components/AppSidebar';


function ChatPage() {

  const { activeTab, selectedUser } = useChatStore();

  return (
    <div
      className="
        w-full max-w-6xl h-[90vh] mx-auto rounded-xl shadow-xl 
        border border-[#0C334A] 
        bg-[#0C334A]/20 backdrop-blur-xl overflow-hidden flex

        animate-fadeIn
      "
    >

      {/* LEFT SIDEBAR */}
      <div
        className="
          w-80 bg-[#0C334A]/70 backdrop-blur-lg flex flex-col 
          border-r border-[#0C334A]/50

          animate-slideInLeft
        "
      >
       <AppSidebar />
      </div>


      {/* RIGHT CHAT AREA */}
      <div
        className="
          flex-1 bg-[#0C334A]/50 backdrop-blur-lg flex flex-col

          animate-slideInRight
        "
      >
        {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
      </div>
    </div>
  );
}

export default ChatPage;
