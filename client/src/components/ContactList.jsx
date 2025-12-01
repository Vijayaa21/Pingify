import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading, selectedUser } = useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="flex flex-col px-2 py-2 space-y-2">
      {allContacts.map((contact) => {
        const isSelected = selectedUser?._id === contact._id;

        return (
          <button
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
            className={`
              flex items-center gap-3 w-full p-3 rounded-2xl transition-all duration-200
              ${isSelected 
                ? 'bg-[#152032] border border-teal-500/20 shadow-lg shadow-teal-900/20' 
                : 'hover:bg-white/5 border border-transparent'
              }
            `}
          >
            {/* Avatar */}
            <div className="relative">
              <img 
                src={contact.profilePic || "/avatar.png"} 
                alt={contact.fullName}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/10 shadow-sm"
              />
              {/* Online status */}
              {contact.status === "online" && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-gray-900 bg-green-400" />
              )}
            </div>

            {/* Name and role */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className={`font-medium truncate ${isSelected ? 'text-teal-100' : 'text-slate-200'}`}>
                  {contact.fullName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-xs truncate max-w-[140px] ${isSelected ? 'text-teal-200/70' : 'text-slate-400'}`}>
                  {contact.role || "Member"}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ContactList;
