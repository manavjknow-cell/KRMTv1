import React, { useState, useEffect, useRef } from 'react';
import { Story } from '../types';

interface StoryViewerModalProps {
  stories: Story[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSendToast: (msg: string) => void;
}

export const StoryViewerModal: React.FC<StoryViewerModalProps> = ({
  stories,
  initialIndex,
  isOpen,
  onClose,
  onSendToast
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const progressTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setProgress(0);
    setIsLiked(false);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    if (isPaused) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const interval = 50; // ms
    const step = (interval / 5000) * 100; // 5 seconds per story

    progressTimerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            setCurrentIndex((idx) => idx + 1);
            setIsLiked(false);
            return 0;
          } else {
            onClose();
            return 100;
          }
        }
        return prev + step;
      });
    }, interval);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isOpen, isPaused, currentIndex, stories.length, onClose]);

  if (!isOpen || !stories[currentIndex]) return null;

  const currentStory = stories[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
      setProgress(0);
      setIsLiked(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((idx) => idx + 1);
      setProgress(0);
      setIsLiked(false);
    } else {
      onClose();
    }
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onSendToast(`Reply sent to ${currentStory.authorName}: "${replyText}"`);
    setReplyText('');
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      onSendToast(`Liked ${currentStory.authorName}'s story! ❤️`);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-0 md:p-4 select-none animate-in fade-in duration-200"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full md:max-w-md md:h-[88vh] md:rounded-2xl overflow-hidden bg-black flex flex-col justify-between shadow-2xl">
        {/* Background Media */}
        <img
          src={currentStory.mediaUrl}
          alt={currentStory.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-1 pointer-events-none" />

        {/* Tap zones for left/right navigation */}
        <div 
          onClick={handlePrev} 
          className="absolute left-0 top-16 bottom-20 w-1/3 z-10 cursor-pointer"
        />
        <div 
          onClick={handleNext} 
          className="absolute right-0 top-16 bottom-20 w-1/3 z-10 cursor-pointer"
        />

        {/* Top Controls Container */}
        <div className="relative z-20 p-3 pt-safe flex flex-col gap-2.5">
          {/* Progress Bars */}
          <div className="flex items-center gap-1.5 w-full">
            {stories.map((s, idx) => (
              <div
                key={s.id}
                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-white transition-all duration-75"
                  style={{
                    width:
                      idx < currentIndex
                        ? '100%'
                        : idx === currentIndex
                        ? `${progress}%`
                        : '0%'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Author Header Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-[#ffb95f] to-[#b80938] flex-shrink-0">
                <img
                  src={currentStory.authorAvatar}
                  alt={currentStory.authorName}
                  className="w-full h-full rounded-full object-cover border border-white"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[14px] text-white truncate drop-shadow-sm">
                    {currentStory.authorName}
                  </span>
                  {currentStory.isVerified && (
                    <span className="material-symbols-outlined text-[14px] text-sky-400">verified</span>
                  )}
                  {currentStory.isLive && (
                    <span className="px-1.5 py-0.2 rounded-full bg-[#b80938] text-white text-[9px] font-black uppercase tracking-wider">
                      LIVE
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-white/80">KRMU Campus • 2h</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>
        </div>

        {/* Caption Overlay */}
        {currentStory.caption && (
          <div className="relative z-20 px-4 py-3 mx-3 mb-2 rounded-xl bg-black/40 backdrop-blur-md text-white text-[13px] leading-relaxed shadow-lg border border-white/10">
            {currentStory.caption}
          </div>
        )}

        {/* Bottom Reply Bar */}
        <div className="relative z-20 p-3 pb-safe flex items-center gap-2">
          <form onSubmit={handleSendReply} className="flex-1 flex items-center">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder={`Send reply to ${currentStory.authorName}...`}
              className="w-full h-11 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/70 text-[13px] outline-none focus:bg-white/30 transition"
            />
          </form>

          <button
            onClick={handleToggleLike}
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center active:scale-125 transition-transform"
          >
            <span 
              className={`material-symbols-outlined text-[22px] ${isLiked ? 'text-[#b80938]' : 'text-white'}`}
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          <button
            onClick={() => onSendToast(`Shared ${currentStory.authorName}'s story with campus friends!`)}
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center active:scale-95 transition"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
