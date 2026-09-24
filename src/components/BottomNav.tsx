import React from 'react';
import { ScreenId } from '../types';
import { KRMT_ASSETS } from '../data/mockData';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  hasUnreadAlerts?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  hasUnreadAlerts = true
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 pb-safe bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_-2px_14px_rgba(0,0,0,0.06)] border-t border-[#e5eeff]">
      <div className="h-16 px-3 flex items-center justify-around">
        {/* Feed Tab */}
        <button
          onClick={() => onNavigate('campus-feed')}
          className={`flex flex-col items-center justify-center min-w-[50px] h-12 transition-all active:scale-95 ${
            currentScreen === 'campus-feed'
              ? 'text-[#b80938] font-bold'
              : 'text-[#45464d] hover:text-[#0b1c30]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-[26px]"
            style={{ fontVariationSettings: currentScreen === 'campus-feed' ? "'FILL' 1" : "'FILL' 0" }}
          >
            home
          </span>
          <span className="text-[11px] font-semibold mt-0.5">Feed</span>
        </button>

        {/* Explore Tab */}
        <button
          onClick={() => onNavigate('campus-explore')}
          className={`flex flex-col items-center justify-center min-w-[50px] h-12 transition-all active:scale-95 ${
            currentScreen === 'campus-explore'
              ? 'text-[#b80938] font-bold'
              : 'text-[#45464d] hover:text-[#0b1c30]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-[26px]"
            style={{ fontVariationSettings: currentScreen === 'campus-explore' ? "'FILL' 1" : "'FILL' 0" }}
          >
            explore
          </span>
          <span className="text-[11px] font-semibold mt-0.5">Explore</span>
        </button>

        {/* Create Post Center Button */}
        <div className="flex items-center justify-center min-w-[50px] h-12">
          <button
            onClick={() => onNavigate('create-post')}
            aria-label="Create campus post"
            className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#b80938] to-[#ffb95f] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(184,9,56,0.35)] active:scale-90 hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">add</span>
          </button>
        </div>

        {/* Alerts Tab */}
        <button
          onClick={() => onNavigate('campus-alerts')}
          className={`relative flex flex-col items-center justify-center min-w-[50px] h-12 transition-all active:scale-95 ${
            currentScreen === 'campus-alerts'
              ? 'text-[#b80938] font-bold'
              : 'text-[#45464d] hover:text-[#0b1c30]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-[26px]"
            style={{ fontVariationSettings: currentScreen === 'campus-alerts' ? "'FILL' 1" : "'FILL' 0" }}
          >
            notifications
          </span>
          {hasUnreadAlerts && (
            <span className="absolute top-2 right-3.5 w-2 h-2 rounded-full bg-[#b80938] ring-2 ring-white" />
          )}
          <span className="text-[11px] font-semibold mt-0.5">Alerts</span>
        </button>

        {/* Profile Tab */}
        <button
          onClick={() => onNavigate('student-profile')}
          className={`flex flex-col items-center justify-center min-w-[50px] h-12 transition-all active:scale-95 ${
            currentScreen === 'student-profile'
              ? 'text-[#b80938] font-bold'
              : 'text-[#45464d] hover:text-[#0b1c30]'
          }`}
        >
          <div className={`p-[1.5px] rounded-full ${
            currentScreen === 'student-profile'
              ? 'bg-gradient-to-tr from-[#ffb95f] to-[#b80938] ring-1 ring-[#b80938]'
              : 'bg-transparent'
          }`}>
            <img
              alt="Profile"
              className="w-5 h-5 rounded-full object-cover border border-white"
              src={KRMT_ASSETS.currentStudentAvatar}
            />
          </div>
          <span className="text-[11px] font-semibold mt-0.5">Profile</span>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-1">
        <div className="w-32 h-1 bg-[#c6c6cd]/60 rounded-full" />
      </div>
    </nav>
  );
};
