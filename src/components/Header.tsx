import React from 'react';
import { KRMT_ASSETS } from '../data/mockData';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenMessages: () => void;
  onOpenCamera: () => void;
  unreadMessagesCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenMessages,
  onOpenCamera,
  unreadMessagesCount = 3
}) => {
  if (currentScreen === 'create-post') {
    return (
      <header className="sticky top-0 w-full z-40 pt-safe bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]">
        <div className="h-14 px-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <button
              aria-label="Go back"
              onClick={() => onNavigate('campus-feed')}
              className="w-10 h-10 flex items-center justify-center rounded-full text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <img
              alt="KRMT Logo"
              className="h-8 w-auto object-contain flex-shrink-0"
              src={KRMT_ASSETS.logo}
            />
            <h1 className="font-semibold text-[15px] text-[#0b1c30] truncate">Create Post</h1>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => onNavigate('student-profile')}
              className="active:scale-95 transition-transform"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#d3e4fe]"
                src={KRMT_ASSETS.currentStudentAvatar}
              />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 w-full z-40 pt-safe bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]/80">
      <div className="h-16 px-3 flex items-center justify-between gap-2">
        <div 
          onClick={() => onNavigate('campus-feed')} 
          className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer select-none"
        >
          <img
            alt="KRMT Logo"
            className="h-8 w-auto object-contain flex-shrink-0"
            src={KRMT_ASSETS.logo}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-[18px] tracking-tight text-[#0b1c30] truncate leading-none">
              KRMT
            </span>
            <div className="flex items-center gap-0.5 mt-0.5">
              <span className="material-symbols-outlined text-[13px] text-[#b80938]">location_on</span>
              <span className="text-[11px] font-medium text-[#45464d] truncate max-w-[150px]">
                K.R. Mangalam Main Campus
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            aria-label="Campus Camera / Story"
            onClick={onOpenCamera}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95 transition-transform"
            title="Campus Camera"
          >
            <span className="material-symbols-outlined text-[22px]">photo_camera</span>
          </button>
          
          <button
            aria-label="Direct Messages"
            onClick={onOpenMessages}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95 transition-transform"
            title="Direct Messages"
          >
            <span className="material-symbols-outlined text-[22px]">send</span>
            {unreadMessagesCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-[#b80938] text-white text-[10px] flex items-center justify-center font-bold shadow-sm">
                {unreadMessagesCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => onNavigate('student-profile')}
            className="ml-1 focus:outline-none active:scale-95 transition-transform"
            title="Student Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#d3e4fe] shadow-sm"
              src={KRMT_ASSETS.currentStudentAvatar}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
