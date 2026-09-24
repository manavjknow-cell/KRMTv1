import React, { useState } from 'react';
import { Post } from '../types';

interface CreatePostViewProps {
  onPublishPost: (newPost: Post) => void;
  onCancel: () => void;
  onSendToast: (msg: string) => void;
}

export const CreatePostView: React.FC<CreatePostViewProps> = ({
  onPublishPost,
  onCancel,
  onSendToast
}) => {
  const [mediaMode, setMediaMode] = useState<'photo' | 'reel' | 'notice'>('photo');
  const [caption, setCaption] = useState('');
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'soet' | 'friends'>('all');
  const [selectedLocation, setSelectedLocation] = useState('🌿 Main Lawn');
  const [selectedTags, setSelectedTags] = useState<string[]>(['#CampusLife', '#ClubEvent']);
  const [taggedPeople, setTaggedPeople] = useState<string[]>([
    "Riya Sen (CSE '26)",
    "Prof. Anand (Faculty)"
  ]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqLflMQM6dH6KAVkMcvpKRI_DIEFa6u0TkB0txtW7OQwLxO76GGSvhKNEDSCcMxe-D0FsFPaAw4GurVW5BwLAJiEqPlbQ7WyvquQTz_T10K4AKj1-BeWRw0yNqSvgDv8f_5RI0H7-cyZsUlWnexkwPX422CasF72UpHoD44FQ0FBnjqOQ1BAajXTsIjtGtWCIwQlPGq33oEIUofe93iC2jcIo7KasM1pkXTeHIaeoJjBQB5-WNbavg'
  );

  const filters = [
    'none',
    'contrast(1.15) saturate(1.2)',
    'sepia(0.2) saturate(1.3) hue-rotate(-10deg)',
    'grayscale(0.85) contrast(1.1)',
    'brightness(1.08) contrast(1.05)'
  ];

  const handleCycleFilters = () => {
    const next = (filterIndex + 1) % filters.length;
    setFilterIndex(next);
    onSendToast(`Applied photo filter #${next + 1}`);
  };

  const handleInsertSnippet = (snippet: string) => {
    setCaption((prev) => (prev + snippet).slice(0, 300));
  };

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length >= 3) {
        onSendToast('You can select up to 3 category tags');
        return;
      }
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddPeerPrompt = () => {
    const name = window.prompt('Enter Student or Faculty name to tag:', 'Aditi Sharma (CSE)');
    if (name && name.trim()) {
      setTaggedPeople([...taggedPeople, name.trim()]);
      onSendToast(`Tagged ${name.trim()} in post`);
    }
  };

  const handlePublish = () => {
    setIsPublishing(true);
    onSendToast('Broadcasting live to KRMU Campus Feed! 🚀');

    setTimeout(() => {
      const newPost: Post = {
        id: String(Date.now()),
        author: 'aarav_cse',
        authorName: 'Aarav Sharma',
        authorCohort: "SOET '26",
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiWYW1rVui_tJsz7xxHvH78-mXBlY545PwZaNh6wTbBiNiPpJuVNmMFvLzaDq0W0_q5A2chYE8hQB8gIqQrRk9dvxpoK0LW9IA6JqYzmtBSLohVwTEKKJ4u8PnbCMTp-epk2dQRWXrkZOgfJHbVI3pR9pxQB7v_IBlikCEWd4frQi2Z9pqwUGXOw9W8GSbopUVtqGbFxFYmAEeq2tBrgQVte9UnGsOgYg04aZKu_E_eoVbnoW2LUKh',
        location: `${selectedLocation.replace(/^[^\w]+/, '')}, KRMU Campus`,
        timestamp: 'Just now',
        departmentTag: 'School of Engineering',
        mediaType: mediaMode === 'notice' ? 'announcement' : 'photo',
        imageUrl: previewImage,
        likes: 1,
        isLiked: true,
        isBookmarked: false,
        caption: caption || 'Excited to showcase our project at the annual university pavilion! #LifeAtKRMU',
        tags: selectedTags,
        commentsCount: 0,
        comments: []
      };

      onPublishPost(newPost);
      setIsPublishing(false);
    }, 1200);
  };

  const sampleReplaceImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqLflMQM6dH6KAVkMcvpKRI_DIEFa6u0TkB0txtW7OQwLxO76GGSvhKNEDSCcMxe-D0FsFPaAw4GurVW5BwLAJiEqPlbQ7WyvquQTz_T10K4AKj1-BeWRw0yNqSvgDv8f_5RI0H7-cyZsUlWnexkwPX422CasF72UpHoD44FQ0FBnjqOQ1BAajXTsIjtGtWCIwQlPGq33oEIUofe93iC2jcIo7KasM1pkXTeHIaeoJjBQB5-WNbavg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uPpK-7gHdus0gFO1TzLYHduXQWEK65hQj7Tr4fZ17ECN2j2hYfH48euF93uQcQhy1rCr9tKAfFa8JUJLzkjp5K1Lau-0--P_kXARlkfbJ4cj5q-hmoVkVoRbIwPKmgphDRGRatqXwttDo3UITGJ3tvsdB9MOs4Er2KaESkU7VSa6JKPDzU_1WPM8bpFBbqr8-AFxYclWVw0lj8B55N3Muf4aX0XnKGB7K9kwHBawARg5mIG0kkNV',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDM106VZ3jmm8_CJOBK37MfKdqKBfyet92uYSMiH_E7U6mVVFO9IYCJvyqgDiUxKrrm8Wjgqd5GPg43hm90nOrOefKzfRm6jT1_1i5PVtwqjgcJ-UmCfYm39HZI6adxzQ0SDR0-MMPtsKj3VVjJuYVHOdH9Uz4gktEAzKGQkvR4Wov_p5to-z2wEm4zptSYYnWElUacpoChOv2kuBpy3WZQHWyIMP6vQV5_23YvQIlbk_SSmXpaEO-m'
  ];

  const handleReplaceImage = () => {
    const currentIndex = sampleReplaceImages.indexOf(previewImage);
    const nextImage = sampleReplaceImages[(currentIndex + 1) % sampleReplaceImages.length];
    setPreviewImage(nextImage);
    onSendToast('Swapped to campus photography asset 🖼️');
  };

  const locations = [
    '🏫 Central Library',
    '🌿 Main Lawn',
    '🔬 Engineering Block B',
    '☕ Campus Cafeteria',
    '🏟️ KRMU Sports Complex'
  ];

  const categoryTagsList = [
    '#CampusLife',
    '#ClubEvent',
    '#ProjectShowcase',
    '#ExamPrep',
    '#SportsMeet'
  ];

  return (
    <div className="flex flex-col w-full pb-14">
      {/* Top App Navigation / Action Bar */}
      <div className="sticky top-0 z-40 bg-[#f8f9ff]/95 backdrop-blur-md px-3 py-2 flex items-center justify-between shadow-sm border-b border-[#e5eeff]">
        <button
          type="button"
          onClick={onCancel}
          className="px-2.5 py-1 rounded-lg text-[#45464d] hover:bg-[#eff4ff] transition-colors text-[13px] font-semibold"
        >
          Cancel
        </button>

        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[15px] text-[#0b1c30]">New Campus Post</span>
          <span className="material-symbols-outlined text-[#b80938] text-[18px]">verified</span>
        </div>

        <button
          id="btn-share-post"
          onClick={handlePublish}
          disabled={isPublishing}
          className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#b80938] to-[#ffb95f] text-white shadow-md active:scale-95 transition-all text-[13px] font-bold flex items-center gap-1 hover:opacity-95 disabled:opacity-50"
        >
          <span>{isPublishing ? 'Sharing...' : 'Share'}</span>
          <span className="material-symbols-outlined text-[15px]">send</span>
        </button>
      </div>

      <div className="px-3 pt-3 flex flex-col gap-3 max-w-xl mx-auto w-full">
        {/* Format Segmented Bar */}
        <div className="bg-[#eff4ff] p-1 rounded-xl flex items-center shadow-inner border border-[#dce9ff]">
          <button
            type="button"
            onClick={() => {
              setMediaMode('photo');
              onSendToast('Switched to Standard Photo feed');
            }}
            className={`flex-1 py-1.5 rounded-lg text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all ${
              mediaMode === 'photo'
                ? 'bg-white text-[#b80938] shadow-sm'
                : 'text-[#45464d] hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: mediaMode === 'photo' ? "'FILL' 1" : "'FILL' 0" }}>
              photo_library
            </span>
            <span>Photo</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMediaMode('reel');
              onSendToast('Switched to Campus Reels format (9:16)');
            }}
            className={`flex-1 py-1.5 rounded-lg text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all ${
              mediaMode === 'reel'
                ? 'bg-white text-[#b80938] shadow-sm'
                : 'text-[#45464d] hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">movie</span>
            <span>Reel</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMediaMode('notice');
              onSendToast('Switched to Official Noticeboard bulletin format');
            }}
            className={`flex-1 py-1.5 rounded-lg text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all ${
              mediaMode === 'notice'
                ? 'bg-white text-[#b80938] shadow-sm'
                : 'text-[#45464d] hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">campaign</span>
            <span>Announcement</span>
          </button>
        </div>

        {/* Media Canvas & Interactive Editing Area */}
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#131b2e] shadow-md group transition-all ${
          mediaMode === 'reel' ? 'aspect-[9/16]' : 'aspect-[4/3]'
        }`}>
          <img
            id="post-preview-img"
            src={previewImage}
            alt="Upload Preview"
            style={{ filter: filters[filterIndex] }}
            className="w-full h-full object-cover transition-transform duration-300"
          />

          {/* Top corner floating badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0b1c30] text-[11px] font-bold shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-[#b80938]">flare</span>
              Spring Fest '25
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#b80938] text-white text-[11px] font-bold shadow-sm">
              Original
            </span>
          </div>

          {/* Media Control Actions */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onSendToast('Crop ratio locked to campus standard')}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#0b1c30] flex items-center justify-center active:scale-95 shadow-sm hover:bg-white transition"
                title="Crop & Ratio"
              >
                <span className="material-symbols-outlined text-[18px]">crop</span>
              </button>

              <button
                type="button"
                onClick={handleCycleFilters}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#0b1c30] flex items-center justify-center active:scale-95 shadow-sm hover:bg-white transition"
                title="Filters"
              >
                <span className="material-symbols-outlined text-[18px]">filter_vintage</span>
              </button>

              <button
                type="button"
                onClick={() => onSendToast('Stickers & Department seals ready')}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#0b1c30] flex items-center justify-center active:scale-95 shadow-sm hover:bg-white transition"
                title="Stickers & Badges"
              >
                <span className="material-symbols-outlined text-[18px]">loyalty</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleReplaceImage}
              className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0b1c30] text-[11px] font-bold flex items-center gap-1 active:scale-95 shadow-sm hover:bg-white transition"
            >
              <span className="material-symbols-outlined text-[16px] text-[#b80938]">add_photo_alternate</span>
              <span>Replace</span>
            </button>
          </div>
        </div>

        {/* Author & Caption Block */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-2 border border-[#eff4ff]">
          <div className="flex items-center gap-2.5">
            <img
              alt="Student Profile"
              className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-[#dce9ff]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiWYW1rVui_tJsz7xxHvH78-mXBlY545PwZaNh6wTbBiNiPpJuVNmMFvLzaDq0W0_q5A2chYE8hQB8gIqQrRk9dvxpoK0LW9IA6JqYzmtBSLohVwTEKKJ4u8PnbCMTp-epk2dQRWXrkZOgfJHbVI3pR9pxQB7v_IBlikCEWd4frQi2Z9pqwUGXOw9W8GSbopUVtqGbFxFYmAEeq2tBrgQVte9UnGsOgYg04aZKu_E_eoVbnoW2LUKh"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[14px] text-[#0b1c30] truncate">Aarav Sharma</span>
                <span className="px-1.5 py-0.5 rounded bg-[#eff4ff] text-[#45464d] text-[10px] font-bold">
                  B.Tech SOET '26
                </span>
              </div>
              <span className="text-[11px] text-[#76777d]">Posting to University Sphere</span>
            </div>
          </div>

          {/* Caption Textarea */}
          <div className="relative mt-1">
            <textarea
              rows={3}
              maxLength={300}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write an inspiring caption... Mention classmates (@) or add #KRMU tags"
              className="w-full bg-[#eff4ff] rounded-xl p-3 text-[#0b1c30] text-[13px] placeholder:text-[#76777d] focus:outline-none focus:bg-[#dce9ff]/60 transition-colors resize-none border border-transparent focus:border-[#dce9ff]"
            />

            <div className="flex items-center justify-between mt-1 px-1">
              <div className="flex items-center gap-1.5 text-[#b80938] text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => handleInsertSnippet('@')}
                  className="px-2 py-0.5 rounded-full bg-[#b80938]/10 hover:bg-[#b80938]/20"
                >
                  @mention
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertSnippet('#KRMU ')}
                  className="px-2 py-0.5 rounded-full bg-[#b80938]/10 hover:bg-[#b80938]/20"
                >
                  #KRMU
                </button>
              </div>

              <span className={`text-[11px] ${caption.length > 270 ? 'text-[#ba1a1a] font-bold' : 'text-[#76777d]'}`}>
                {caption.length}/300
              </span>
            </div>
          </div>
        </div>

        {/* Audience / Visibility Segment */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-2 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#b80938]">public</span>
              <span className="font-bold text-[14px] text-[#0b1c30]">Campus Audience</span>
            </div>
            <span className="text-[11px] text-[#76777d]">Visible in Feed</span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedAudience('all')}
              className={`p-2.5 rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-all text-center border ${
                selectedAudience === 'all'
                  ? 'bg-[#dce9ff] text-[#0b1c30] border-[#bec6e0]'
                  : 'bg-[#eff4ff] text-[#45464d] border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${selectedAudience === 'all' ? 'text-[#b80938]' : ''}`}>
                groups
              </span>
              <span className="text-[11px] font-bold">All KRMU</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedAudience('soet')}
              className={`p-2.5 rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-all text-center border ${
                selectedAudience === 'soet'
                  ? 'bg-[#dce9ff] text-[#0b1c30] border-[#bec6e0]'
                  : 'bg-[#eff4ff] text-[#45464d] border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${selectedAudience === 'soet' ? 'text-[#b80938]' : ''}`}>
                school
              </span>
              <span className="text-[11px] font-bold">SOET Only</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedAudience('friends')}
              className={`p-2.5 rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-all text-center border ${
                selectedAudience === 'friends'
                  ? 'bg-[#dce9ff] text-[#0b1c30] border-[#bec6e0]'
                  : 'bg-[#eff4ff] text-[#45464d] border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${selectedAudience === 'friends' ? 'text-[#b80938]' : ''}`}>
                lock
              </span>
              <span className="text-[11px] font-bold">Close Circle</span>
            </button>
          </div>
        </div>

        {/* Location Selector */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-2 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#b80938]">pin_drop</span>
              <span className="font-bold text-[14px] text-[#0b1c30]">Campus Location</span>
            </div>
            <span className="text-[11px] text-[#b80938] font-bold">{selectedLocation}</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {locations.map((loc) => {
              const isSelected = selectedLocation === loc;
              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] active:scale-95 transition-all flex items-center gap-1 font-semibold ${
                    isSelected
                      ? 'bg-[#ffdadb] text-[#40000d] shadow-sm'
                      : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                  }`}
                >
                  <span>{loc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tag Campus Peers & Faculty */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-2 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#b80938]">person_add</span>
              <span className="font-bold text-[14px] text-[#0b1c30]">Tag Campus Peers & Faculty</span>
            </div>
            <span 
              onClick={handleAddPeerPrompt}
              className="text-[11px] text-[#b80938] font-bold cursor-pointer hover:underline"
            >
              + Add
            </span>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {taggedPeople.map((person, idx) => (
              <div
                key={idx}
                className="px-3 py-1 rounded-full bg-[#dce9ff] text-[#0b1c30] text-[11px] font-semibold flex items-center gap-1.5"
              >
                <span className="w-4 h-4 rounded-full bg-[#b80938] text-white flex items-center justify-center text-[10px]">
                  {person[0]}
                </span>
                <span>{person}</span>
                <button
                  type="button"
                  onClick={() => setTaggedPeople(taggedPeople.filter((_, i) => i !== idx))}
                  className="material-symbols-outlined text-[14px] text-[#76777d] hover:text-[#ba1a1a] ml-0.5"
                >
                  close
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddPeerPrompt}
              className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#76777d] hover:text-[#0b1c30] text-[11px] flex items-center gap-1 transition"
            >
              <span className="material-symbols-outlined text-[14px]">search</span>
              <span>Search university ID...</span>
            </button>
          </div>
        </div>

        {/* Category / Topic Tags */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-2 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#b80938]">label</span>
              <span className="font-bold text-[14px] text-[#0b1c30]">Category Tags</span>
            </div>
            <span className="text-[11px] text-[#76777d]">Select up to 3</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {categoryTagsList.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleToggleTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition active:scale-95 flex items-center gap-1 ${
                    isSelected
                      ? 'bg-[#ffdadb] text-[#40000d] shadow-sm'
                      : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#dce9ff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {isSelected ? 'check' : 'add'}
                  </span>
                  <span>{tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Campus Guidelines Callout Banner */}
        <div className="bg-[#eff4ff] rounded-2xl p-3.5 flex items-start gap-2.5 shadow-inner border border-[#dce9ff]">
          <span className="material-symbols-outlined text-[#b80938] text-[22px] flex-shrink-0 mt-0.5">policy</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[12px] text-[#0b1c30]">KRMU Community Standard</span>
            <span className="text-[11px] text-[#45464d] leading-relaxed">
              Posts are moderated by student body delegates and adhere to the campus honor code. Be respectful to fellow scholars.
            </span>
          </div>
        </div>

        {/* Bottom Action Primary CTA */}
        <div className="pt-2 pb-4 flex flex-col gap-2">
          <button
            id="main-submit-btn"
            type="button"
            onClick={handlePublish}
            disabled={isPublishing}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#b80938] to-[#ffb95f] text-white font-bold text-[14px] shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2 hover:opacity-95 disabled:opacity-50"
          >
            {isPublishing ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                <span>Publishing to KRMU Feed...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                <span>Publish to KRMU Feed</span>
              </>
            )}
          </button>
          <p className="text-center text-[10px] text-[#76777d]">
            Posting automatically synchronizes with your School of Engineering &amp; Technology profile.
          </p>
        </div>
      </div>
    </div>
  );
};
