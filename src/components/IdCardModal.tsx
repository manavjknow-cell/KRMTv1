import React from 'react';
import { KRMT_ASSETS } from '../data/mockData';

interface IdCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IdCardModal: React.FC<IdCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#213145]/70 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-[#eff4ff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ID Header Crimson Strip */}
        <div className="bg-[#b80938] p-4 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[28px]">school</span>
            <div>
              <h3 className="font-bold text-[16px] leading-tight tracking-tight">K.R. MANGALAM</h3>
              <p className="text-[10px] text-[#ffdadb] font-medium tracking-wider uppercase opacity-90">
                UNIVERSITY • GURUGRAM
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close ID card"
            className="w-7 h-7 rounded-full bg-[#db2e4e] hover:bg-[#920029] text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* ID Card Body */}
        <div className="p-5 flex flex-col items-center text-center bg-gradient-to-b from-white to-[#eff4ff]/60">
          <div className="relative w-22 h-22 rounded-full overflow-hidden shadow-lg p-0.5 bg-gradient-to-tr from-[#ffb95f] to-[#b80938] my-1">
            <img
              alt="Ananya Sharma"
              className="w-full h-full object-cover rounded-full bg-white"
              src={KRMT_ASSETS.currentStudentAvatar}
            />
          </div>

          <h4 className="font-bold text-[18px] text-[#0b1c30] mt-2">Ananya Sharma</h4>
          <span className="text-[13px] text-[#b80938] font-semibold tracking-wide">
            Student ID: KRMU/2022/CS-409
          </span>

          <div className="mt-2 text-[12px] text-[#45464d] leading-relaxed">
            <p className="font-medium text-[#0b1c30]">School of Engineering & Technology</p>
            <p>B.Tech CSE (AI & Machine Learning)</p>
            <p className="text-[11px] text-[#76777d] mt-0.5">Valid Thru: June 2026</p>
          </div>

          {/* Security Hologram & Gate Clearance Pill */}
          <div className="w-full mt-3 flex items-center justify-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] text-[10px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-[#b80938]">verified</span>
              RFID Active
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Main Gate Clear
            </span>
          </div>

          {/* Barcode Simulation */}
          <div className="w-full mt-4 p-3 bg-[#f8f9ff] border border-[#dce9ff] rounded-xl flex flex-col items-center">
            <div className="h-10 w-48 flex items-center justify-between gap-[2px] opacity-85 px-2">
              <div className="w-1 h-full bg-[#0b1c30]" />
              <div className="w-2 h-full bg-[#0b1c30]" />
              <div className="w-0.5 h-full bg-[#0b1c30]" />
              <div className="w-1.5 h-full bg-[#0b1c30]" />
              <div className="w-0.5 h-full bg-[#0b1c30]" />
              <div className="w-2 h-full bg-[#0b1c30]" />
              <div className="w-1 h-full bg-[#0b1c30]" />
              <div className="w-2 h-full bg-[#0b1c30]" />
              <div className="w-0.5 h-full bg-[#0b1c30]" />
              <div className="w-1 h-full bg-[#0b1c30]" />
              <div className="w-1.5 h-full bg-[#0b1c30]" />
              <div className="w-1 h-full bg-[#0b1c30]" />
            </div>
            <span className="text-[11px] text-[#45464d] font-mono tracking-widest mt-1.5 font-bold">
              8901244589201
            </span>
          </div>

          <p className="text-[10px] text-[#76777d] mt-3">
            Present this card for Library Access, Lab Entry & Campus Transportation.
          </p>
        </div>
      </div>
    </div>
  );
};
