import React, { useState } from 'react';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCaptureStory: (photoUrl: string) => void;
  onSendToast: (msg: string) => void;
}

export const CameraModal: React.FC<CameraModalProps> = ({
  isOpen,
  onClose,
  onCaptureStory,
  onSendToast
}) => {
  const [flashOn, setFlashOn] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'normal' | 'warm' | 'cool' | 'mono'>('normal');

  if (!isOpen) return null;

  const sampleSnapshots = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uPpK-7gHdus0gFO1TzLYHduXQWEK65hQj7Tr4fZ17ECN2j2hYfH48euF93uQcQhy1rCr9tKAfFa8JUJLzkjp5K1Lau-0--P_kXARlkfbJ4cj5q-hmoVkVoRbIwPKmgphDRGRatqXwttDo3UITGJ3tvsdB9MOs4Er2KaESkU7VSa6JKPDzU_1WPM8bpFBbqr8-AFxYclWVw0lj8B55N3Muf4aX0XnKGB7K9kwHBawARg5mIG0kkNV',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqLflMQM6dH6KAVkMcvpKRI_DIEFa6u0TkB0txtW7OQwLxO76GGSvhKNEDSCcMxe-D0FsFPaAw4GurVW5BwLAJiEqPlbQ7WyvquQTz_T10K4AKj1-BeWRw0yNqSvgDv8f_5RI0H7-cyZsUlWnexkwPX422CasF72UpHoD44FQ0FBnjqOQ1BAajXTsIjtGtWCIwQlPGq33oEIUofe93iC2jcIo7KasM1pkXTeHIaeoJjBQB5-WNbavg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYayvfhWvFsTknyFYtUES111HJFnGWHfYhvNif1Ur8N5BwT55LnOeKGHzcjM-8ZmMw4KQeIBP20rj5FR8lsJex8Q8oSlVSRxhEbqGXhe0q8JW2SIuLmn33p_sgJS5YmEs7jGlvn3J3sdtxH0GTTxT0sUrbSAjJ2nUNGNuYOLhBabvRtFJjNF92uqtcQTnNR7cvyWleFS8TCHrGU_92f8_StqdsAXYa4HD2-zmWTYa6bNzWsT0BU0Km'
  ];

  const handleSnap = () => {
    const randomImg = sampleSnapshots[Math.floor(Math.random() * sampleSnapshots.length)];
    onCaptureStory(randomImg);
    onSendToast('Story snapped and published to KRMU! 📸✨');
    onClose();
  };

  const getFilterStyle = () => {
    switch (selectedFilter) {
      case 'warm': return 'sepia(0.25) saturate(1.3)';
      case 'cool': return 'hue-rotate(20deg) saturate(1.1)';
      case 'mono': return 'grayscale(1) contrast(1.1)';
      default: return 'none';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center p-0 md:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full md:max-w-md md:h-[88vh] md:rounded-2xl overflow-hidden bg-[#131b2e] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Camera Viewfinder Stream */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url('${sampleSnapshots[1]}')`,
            filter: getFilterStyle()
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />

        {/* Top Camera Controls */}
        <div className="relative z-10 p-4 pt-safe flex items-center justify-between text-white">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center active:scale-95"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFlashOn(!flashOn)}
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center ${flashOn ? 'bg-amber-400 text-black' : 'bg-black/40 text-white'}`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {flashOn ? 'flash_on' : 'flash_off'}
              </span>
            </button>

            <button
              onClick={() => {
                const modes: ('normal' | 'warm' | 'cool' | 'mono')[] = ['normal', 'warm', 'cool', 'mono'];
                const next = modes[(modes.indexOf(selectedFilter) + 1) % modes.length];
                setSelectedFilter(next);
                onSendToast(`Filter: ${next.toUpperCase()}`);
              }}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>

        {/* Viewfinder Target Reticle */}
        <div className="relative z-10 mx-auto w-48 h-48 border border-white/25 rounded-2xl flex items-center justify-center pointer-events-none">
          <div className="w-3 h-3 border-t-2 border-l-2 border-white absolute top-2 left-2" />
          <div className="w-3 h-3 border-t-2 border-r-2 border-white absolute top-2 right-2" />
          <div className="w-3 h-3 border-b-2 border-l-2 border-white absolute bottom-2 left-2" />
          <div className="w-3 h-3 border-b-2 border-r-2 border-white absolute bottom-2 right-2" />
          <span className="text-white/60 text-[11px] font-medium tracking-wide">KRMT CAMPUS CAM</span>
        </div>

        {/* Bottom Shutter & Triggers */}
        <div className="relative z-10 p-6 pb-safe flex items-center justify-around text-white">
          <button
            onClick={() => onSendToast('Flipped to selfie camera')}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center active:scale-90"
            title="Flip Camera"
          >
            <span className="material-symbols-outlined text-[24px]">flip_camera_ios</span>
          </button>

          {/* Shutter Button */}
          <button
            onClick={handleSnap}
            aria-label="Take picture"
            className="w-20 h-20 rounded-full border-4 border-white p-1.5 flex items-center justify-center active:scale-90 transition-transform"
          >
            <div className="w-full h-full rounded-full bg-[#b80938] active:bg-white transition-colors" />
          </button>

          <button
            onClick={() => {
              onSendToast('Selected photo from gallery');
              handleSnap();
            }}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center active:scale-90"
            title="Gallery"
          >
            <span className="material-symbols-outlined text-[24px]">photo_library</span>
          </button>
        </div>
      </div>
    </div>
  );
};
