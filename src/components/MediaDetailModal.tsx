import React, { useState } from 'react';

interface MediaDetailModalProps {
  item: {
    title: string;
    imageUrl: string;
    likes?: string;
    badge?: string;
    duration?: string;
    views?: string;
  } | null;
  onClose: () => void;
  onSendToast: (msg: string) => void;
}

export const MediaDetailModal: React.FC<MediaDetailModalProps> = ({
  item,
  onClose,
  onSendToast
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<string[]>([
    'Incredible campus capture! 📸✨',
    'Proud to represent K.R. Mangalam!'
  ]);

  if (!item) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([...comments, commentInput.trim()]);
    setCommentInput('');
    onSendToast('Comment posted!');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#213145]/80 backdrop-blur-sm p-2 md:p-6 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="h-12 px-4 border-b border-[#e5eeff] flex items-center justify-between bg-[#f8f9ff]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[14px] text-[#0b1c30]">KRMU Campus Discovery</span>
            {item.badge && (
              <span className="px-2 py-0.5 rounded-full bg-[#b80938] text-white text-[10px] font-bold">
                {item.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#45464d] hover:bg-[#eff4ff]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-square bg-[#131b2e] overflow-hidden group">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {item.duration && (
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">play_arrow</span>
              {item.duration}
            </div>
          )}
          {item.views && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[11px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">visibility</span>
              {item.views} views
            </div>
          )}
        </div>

        {/* Actions Bar */}
        <div className="p-3 border-b border-[#e5eeff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setLiked(!liked);
                onSendToast(liked ? 'Unliked' : 'Liked post ❤️');
              }}
              className="active:scale-125 transition-transform"
            >
              <span 
                className={`material-symbols-outlined text-[24px] ${liked ? 'text-[#b80938]' : 'text-[#0b1c30]'}`}
                style={{ fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
            <button 
              onClick={() => onSendToast('Shared with campus friends!')}
              className="text-[#0b1c30] active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[24px]">send</span>
            </button>
          </div>
          <button
            onClick={() => {
              setSaved(!saved);
              onSendToast(saved ? 'Removed from bookmarks' : 'Saved to campus bookmarks 🔖');
            }}
            className="text-[#0b1c30] active:scale-90 transition-transform"
          >
            <span 
              className={`material-symbols-outlined text-[24px] ${saved ? 'text-[#b80938]' : 'text-[#0b1c30]'}`}
              style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
            >
              bookmark
            </span>
          </button>
        </div>

        {/* Caption and Comments */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          <p className="text-[13px] text-[#0b1c30] leading-snug">
            <span className="font-bold mr-1">KRMT Campus Spotlight:</span>
            {item.title}
          </p>

          <div className="space-y-2 pt-2 border-t border-[#e5eeff]/80">
            <span className="text-[11px] font-bold text-[#76777d] uppercase tracking-wider">
              Comments ({comments.length})
            </span>
            {comments.map((c, i) => (
              <div key={i} className="text-[12px] text-[#334155] bg-[#eff4ff]/60 p-2 rounded-lg">
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Comment Input */}
        <form onSubmit={handleAddComment} className="p-2.5 border-t border-[#e5eeff] bg-[#f8f9ff] flex items-center gap-2">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 h-9 px-3 rounded-full bg-white border border-[#dce9ff] text-[12px] text-[#0b1c30] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!commentInput.trim()}
            className="px-3 py-1.5 rounded-full bg-[#b80938] text-white text-[12px] font-bold disabled:opacity-40 active:scale-95"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
