import React, { useState } from 'react';
import { DIRECT_MESSAGES } from '../data/mockData';

interface DirectMessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendToast: (msg: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

export const DirectMessagesModal: React.FC<DirectMessagesModalProps> = ({
  isOpen,
  onClose,
  onSendToast
}) => {
  const [selectedChat, setSelectedChat] = useState<typeof DIRECT_MESSAGES[0] | null>(null);
  const [chatHistory, setChatHistory] = useState<Record<string, ChatMessage[]>>({
    'dm-1': [
      { id: 'm1', sender: 'them', text: 'Hey Ananya! Are we practicing in Audi 2 at 5 PM today for Spring Fest?', time: '12m ago' }
    ],
    'dm-2': [
      { id: 'm2', sender: 'them', text: 'Please bring the neural net project draft to my office tomorrow after lunch.', time: '2h ago' }
    ],
    'dm-3': [
      { id: 'm3', sender: 'them', text: 'Your abstract has been forwarded to the jury panel for HackKRMT.', time: '5h ago' }
    ]
  });
  const [inputMsg, setInputMsg] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim() || !selectedChat) return;

    const newMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'me',
      text: inputMsg.trim(),
      time: 'Just now'
    };

    setChatHistory((prev) => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMsg]
    }));

    const sentText = inputMsg;
    setInputMsg('');

    // Simulate instant response from campus classmate/professor
    setTimeout(() => {
      let reply = "Got it! See you on campus 🎓";
      if (selectedChat.id === 'dm-2') {
        reply = "Noted. I'll review your presentation slides beforehand.";
      } else if (selectedChat.id === 'dm-1') {
        reply = "Awesome! I'll reserve the front row spots in Audi 2. 👍";
      }

      setChatHistory((prev) => ({
        ...prev,
        [selectedChat.id]: [
          ...(prev[selectedChat.id] || []),
          {
            id: String(Date.now() + 1),
            sender: 'them',
            text: reply,
            time: 'Just now'
          }
        ]
      }));
      onSendToast(`New message from ${selectedChat.user}`);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#213145]/70 backdrop-blur-sm p-2 md:p-4 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-14 px-4 bg-[#f8f9ff] border-b border-[#e5eeff] flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            {selectedChat && (
              <button
                onClick={() => setSelectedChat(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </button>
            )}
            <div className="flex flex-col min-w-0">
              <h2 className="font-bold text-[15px] text-[#0b1c30] truncate">
                {selectedChat ? selectedChat.user : 'Campus Direct Messages'}
              </h2>
              <span className="text-[11px] text-[#45464d]">
                {selectedChat ? 'Online • KRMU Network' : 'Student & Faculty Inquiries'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#45464d] hover:bg-[#eff4ff] active:scale-95 transition"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        {!selectedChat ? (
          <div className="flex-1 overflow-y-auto divide-y divide-[#eff4ff]">
            <div className="p-3 bg-[#eff4ff]/50 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#b80938]">lock</span>
              <span className="text-[11px] text-[#45464d]">
                Encrypted within K.R. Mangalam University intranet
              </span>
            </div>

            {DIRECT_MESSAGES.map((dm) => (
              <div
                key={dm.id}
                onClick={() => setSelectedChat(dm)}
                className="p-3.5 flex items-center gap-3 hover:bg-[#f8f9ff] active:bg-[#eff4ff] cursor-pointer transition-colors"
              >
                <div className="relative">
                  <img
                    src={dm.avatar}
                    alt={dm.user}
                    className="w-12 h-12 rounded-full object-cover ring-1 ring-[#e5eeff]"
                  />
                  {dm.unread && (
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#b80938] border-2 border-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[14px] text-[#0b1c30] truncate">{dm.user}</span>
                    <span className="text-[11px] text-[#76777d]">{dm.time}</span>
                  </div>
                  <p className="text-[12px] text-[#45464d] truncate mt-0.5">
                    {chatHistory[dm.id]?.slice(-1)[0]?.text || dm.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between overflow-hidden bg-[#f8f9ff]">
            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {(chatHistory[selectedChat.id] || []).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'me' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === 'me'
                        ? 'bg-[#000000] text-white rounded-br-none'
                        : 'bg-white text-[#0b1c30] border border-[#e5eeff] rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-[#76777d] mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-[#e5eeff] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Write a message..."
                className="flex-1 h-10 px-3.5 rounded-full bg-[#eff4ff] text-[13px] text-[#0b1c30] placeholder:text-[#76777d] focus:outline-none focus:bg-[#dce9ff]/60"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim()}
                className="w-10 h-10 rounded-full bg-[#b80938] text-white flex items-center justify-center disabled:opacity-40 active:scale-95 transition"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
