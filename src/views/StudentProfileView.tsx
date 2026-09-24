import React, { useState } from 'react';
import { KRMT_ASSETS, PROFILE_POSTS, PROFILE_REELS, PROFILE_HIGHLIGHTS } from '../data/mockData';

interface StudentProfileViewProps {
  onOpenIdCard: () => void;
  onOpenHighlight: (highlightId: string) => void;
  onSelectMedia: (item: any) => void;
  onSendToast: (msg: string) => void;
  onNavigateToFeed: () => void;
}

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({
  onOpenIdCard,
  onOpenHighlight,
  onSelectMedia,
  onSendToast,
  onNavigateToFeed
}) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'tagged'>('posts');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [followerCount, setFollowerCount] = useState(1280);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  // Student Profile editable state
  const [profile, setProfile] = useState({
    name: 'Ananya Sharma',
    handle: '@ananya.codes',
    pronouns: 'She/Her',
    cohort: "SOET '26",
    rollNumber: '2201089',
    program: 'B.Tech Computer Science & Engineering (AI & ML) \'26',
    institution: 'K.R. Mangalam University, Gurugram',
    title: 'President @ KRMU Coding Society | Hackathon Winner 🥇',
    github: 'github.com/ananya-krmu'
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    onSendToast('Student profile updated successfully! ✨');
  };

  const handleShareProfile = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    onSendToast('Student profile link copied to clipboard! 📋');
  };

  return (
    <div className="flex flex-col w-full pb-14">
      {/* Campus Banner / Cover Area */}
      <div className="relative w-full h-36 overflow-hidden bg-[#dce9ff]">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${KRMT_ASSETS.campusCoverBanner}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#f8f9ff]/90" />

        {/* Quick Action Overlays */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={() => setShowQrModal(true)}
            aria-label="Campus QR Code Pass"
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#0b1c30] shadow-sm flex items-center justify-center active:scale-95 transition"
            title="Campus Gate QR Pass"
          >
            <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
          </button>
          <button
            onClick={() => onSendToast('Privacy & Notification settings')}
            aria-label="Profile Settings"
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#0b1c30] shadow-sm flex items-center justify-center active:scale-95 transition"
            title="Options"
          >
            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Header Info / Stats Panel */}
      <div className="px-3 relative -mt-11 flex flex-col z-10">
        {/* Avatar + Stats Row */}
        <div className="flex items-end justify-between gap-3">
          {/* High-Res Student Avatar */}
          <div className="relative flex-shrink-0">
            <div className="p-1 rounded-full bg-[#f8f9ff] shadow-md">
              <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#ffb95f] via-[#b80938] to-[#db2e4e]">
                <img
                  alt={profile.name}
                  className="w-20 h-20 rounded-full object-cover bg-white"
                  src={KRMT_ASSETS.currentStudentAvatar}
                />
              </div>
            </div>
            {/* Digital Verified Campus Badge */}
            <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#131b2e] text-[#ffddb8] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
          </div>

          {/* Live Follower Stats Counters */}
          <div className="flex-1 flex items-center justify-around bg-white rounded-xl py-2 px-1 shadow-sm mb-1 border border-[#e5eeff]">
            <div className="flex flex-col items-center">
              <span className="font-bold text-[16px] text-[#0b1c30]">42</span>
              <span className="text-[11px] text-[#45464d]">Posts</span>
            </div>
            <div className="w-[1px] h-6 bg-[#dce9ff]" />
            <div className="flex flex-col items-center">
              <span className="font-bold text-[16px] text-[#0b1c30]">{followerCount}</span>
              <span className="text-[11px] text-[#45464d]">Followers</span>
            </div>
            <div className="w-[1px] h-6 bg-[#dce9ff]" />
            <div className="flex flex-col items-center">
              <span className="font-bold text-[16px] text-[#0b1c30]">415</span>
              <span className="text-[11px] text-[#45464d]">Following</span>
            </div>
          </div>
        </div>

        {/* Student Name & Academic Credential Metadata */}
        <div className="mt-2.5 flex flex-col">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h1 className="font-bold text-[18px] text-[#0b1c30]">{profile.name}</h1>
            <span className="px-2 py-0.5 rounded-full bg-[#b80938]/10 text-[#b80938] text-[11px] font-bold">
              {profile.cohort}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#dce9ff] text-[#45464d] text-[11px]">
              Roll #{profile.rollNumber}
            </span>
          </div>
          <span className="text-[12px] text-[#45464d] mt-0.5">
            {profile.handle} • {profile.pronouns}
          </span>
        </div>

        {/* Detailed Rich Bio */}
        <div className="mt-2.5 bg-[#eff4ff] rounded-xl p-3 space-y-1.5 shadow-sm border border-[#dce9ff]">
          <div className="flex items-center gap-2 text-[#0b1c30]">
            <span className="text-[14px]">🎓</span>
            <span className="text-[12px] font-semibold">{profile.program}</span>
          </div>
          <div className="flex items-center gap-2 text-[#45464d]">
            <span className="text-[14px]">🏛️</span>
            <span className="text-[12px]">{profile.institution}</span>
          </div>
          <div className="flex items-center gap-2 text-[#0b1c30]">
            <span className="text-[14px]">🚀</span>
            <span className="text-[12px]">{profile.title}</span>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="material-symbols-outlined text-[15px] text-[#b80938]">link</span>
            <a
              className="text-[12px] text-[#b80938] font-bold hover:underline truncate"
              href={`https://${profile.github}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {profile.github}
            </a>
          </div>
        </div>

        {/* Primary Action Bar (Edit, Share, View ID Card) */}
        <div className="grid grid-cols-12 gap-2 mt-3">
          <button
            onClick={() => setIsEditingProfile(true)}
            className="col-span-5 h-9 rounded-lg bg-black text-white text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all hover:bg-slate-900"
          >
            <span className="material-symbols-outlined text-[16px]">edit</span>
            <span>Edit Profile</span>
          </button>

          <button
            onClick={handleShareProfile}
            className="col-span-5 h-9 rounded-lg bg-[#dce9ff] text-[#0b1c30] text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all hover:bg-[#d3e4fe]"
          >
            <span className="material-symbols-outlined text-[16px]">share</span>
            <span>Share Profile</span>
          </button>

          <button
            aria-label="Digital University ID"
            onClick={onOpenIdCard}
            id="idCardTrigger"
            title="View Digital ID"
            className="col-span-2 h-9 rounded-lg bg-[#db2e4e] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all hover:bg-[#b80938]"
          >
            <span className="material-symbols-outlined text-[20px]">badge</span>
          </button>
        </div>
      </div>

      {/* Story Highlights Circular Carousel */}
      <div className="mt-4 px-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] text-[#0b1c30] font-bold uppercase tracking-wider">
            Campus Highlights
          </span>
          <span 
            onClick={() => onSendToast('All 5 highlights active')}
            className="text-[11px] text-[#b80938] font-semibold cursor-pointer hover:underline"
          >
            View All (5)
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {PROFILE_HIGHLIGHTS.map((hl) => (
            <div
              key={hl.id}
              onClick={() => onOpenHighlight(hl.id)}
              className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#ffb95f] to-[#b80938] shadow-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5">
                  <div
                    className="w-full h-full rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${hl.imageUrl}')` }}
                  />
                </div>
              </div>
              <span className="text-[11px] font-medium text-[#0b1c30] max-w-[62px] truncate text-center">
                {hl.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Navigation Tabs Sticky Header */}
      <div className="mt-3 sticky top-0 z-30 bg-[#f8f9ff]/95 backdrop-blur-md border-y border-[#e5eeff]">
        <div className="grid grid-cols-3 text-center">
          <button
            onClick={() => setActiveTab('posts')}
            className={`py-2.5 flex items-center justify-center gap-1.5 text-[13px] font-bold transition-all border-b-2 ${
              activeTab === 'posts'
                ? 'text-[#b80938] border-[#b80938]'
                : 'text-[#45464d] border-transparent hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'posts' ? "'FILL' 1" : "'FILL' 0" }}>
              grid_on
            </span>
            <span>Posts</span>
          </button>

          <button
            onClick={() => setActiveTab('reels')}
            className={`py-2.5 flex items-center justify-center gap-1.5 text-[13px] font-bold transition-all border-b-2 ${
              activeTab === 'reels'
                ? 'text-[#b80938] border-[#b80938]'
                : 'text-[#45464d] border-transparent hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'reels' ? "'FILL' 1" : "'FILL' 0" }}>
              movie
            </span>
            <span>Reels</span>
          </button>

          <button
            onClick={() => setActiveTab('tagged')}
            className={`py-2.5 flex items-center justify-center gap-1.5 text-[13px] font-bold transition-all border-b-2 ${
              activeTab === 'tagged'
                ? 'text-[#b80938] border-[#b80938]'
                : 'text-[#45464d] border-transparent hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'tagged' ? "'FILL' 1" : "'FILL' 0" }}>
              assignment_ind
            </span>
            <span>Tagged</span>
          </button>
        </div>
      </div>

      {/* Tab Content: Posts Grid (3 Columns) */}
      {activeTab === 'posts' && (
        <div className="w-full pt-0.5">
          <div className="grid grid-cols-3 gap-0.5">
            {PROFILE_POSTS.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectMedia(p)}
                className="relative aspect-square bg-[#eff4ff] overflow-hidden group cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${p.imageUrl}')` }}
                />

                {p.isMultiPhoto && (
                  <div className="absolute top-1.5 right-1.5 bg-black/70 text-white rounded p-0.5 flex items-center shadow-sm">
                    <span className="material-symbols-outlined text-[13px]">collections</span>
                  </div>
                )}

                {p.isVideo && (
                  <div className="absolute bottom-1.5 left-1.5 bg-black/80 backdrop-blur-sm text-white rounded px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                    <span className="text-[10px] font-bold">{p.duration}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Reels Grid (9:16 vertical reels) */}
      {activeTab === 'reels' && (
        <div className="w-full pt-1">
          <div className="grid grid-cols-3 gap-1">
            {PROFILE_REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => onSelectMedia(reel)}
                className="relative aspect-[9/16] bg-[#131b2e] rounded-lg overflow-hidden cursor-pointer group"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${reel.imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-[11px] font-bold drop-shadow">
                  <span className="material-symbols-outlined text-[13px]">play_arrow</span> {reel.views}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Tagged Grid */}
      {activeTab === 'tagged' && (
        <div className="w-full pt-4 px-3">
          <div className="bg-[#eff4ff] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-[#dce9ff]">
            <div className="w-14 h-14 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#b80938] mb-3">
              <span className="material-symbols-outlined text-[28px]">account_box</span>
            </div>
            <h3 className="font-bold text-[16px] text-[#0b1c30]">Photos and videos of you</h3>
            <p className="text-[12px] text-[#45464d] max-w-xs mt-1 leading-relaxed">
              When campus classmates or clubs tag Ananya in university posts, they'll appear right here.
            </p>
            <button
              onClick={onNavigateToFeed}
              className="mt-4 px-4 py-2 rounded-lg bg-black text-white text-[12px] font-semibold active:scale-95 transition-all shadow-sm hover:bg-slate-900"
            >
              Explore Campus Feed
            </button>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 bg-[#213145]/70 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-[#eff4ff] overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
              <h3 className="font-bold text-[16px] text-[#0b1c30]">Edit Student Profile</h3>
              <button
                onClick={() => setIsEditingProfile(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#45464d] hover:bg-[#eff4ff]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-3 pt-3">
              <div>
                <label className="text-[11px] font-bold text-[#45464d] uppercase">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full h-10 px-3 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#45464d] uppercase">Cohort</label>
                  <input
                    type="text"
                    value={profile.cohort}
                    onChange={(e) => setProfile({ ...profile, cohort: e.target.value })}
                    className="w-full h-10 px-3 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#45464d] uppercase">Roll Number</label>
                  <input
                    type="text"
                    value={profile.rollNumber}
                    onChange={(e) => setProfile({ ...profile, rollNumber: e.target.value })}
                    className="w-full h-10 px-3 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#45464d] uppercase">Degree & Specialization</label>
                <input
                  type="text"
                  value={profile.program}
                  onChange={(e) => setProfile({ ...profile, program: e.target.value })}
                  className="w-full h-10 px-3 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#45464d] uppercase">Campus Bio / Roles</label>
                <textarea
                  rows={2}
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="w-full p-2.5 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#45464d] uppercase">GitHub / Portfolio URL</label>
                <input
                  type="text"
                  value={profile.github}
                  onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                  className="w-full h-10 px-3 mt-1 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] text-[13px] text-[#0b1c30] outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-4 py-2 rounded-lg text-[#45464d] hover:bg-[#eff4ff] text-[12px] font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#b80938] text-white text-[12px] font-bold shadow-md hover:bg-[#920029]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Campus Gate QR Pass Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-[#213145]/70 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-xs bg-white rounded-2xl p-5 shadow-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#131b2e] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
            </div>
            <h3 className="font-bold text-[16px] text-[#0b1c30]">KRMU Gate Pass</h3>
            <p className="text-[11px] text-[#45464d] mt-0.5">Valid for Main Campus Boom Barrier & Turnstiles</p>

            <div className="w-48 h-48 my-4 p-2 bg-[#f8f9ff] border-2 border-[#131b2e] rounded-xl flex items-center justify-center shadow-inner">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=KRMU-PASS-2201089-ANANYA"
                alt="QR Pass"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-[11px] text-[#b80938] font-bold tracking-wider">
              AUTO-ROTATING • 01:45 REMAINING
            </span>

            <button
              onClick={() => setShowQrModal(false)}
              className="mt-4 w-full py-2 rounded-xl bg-black text-white text-[12px] font-bold"
            >
              Close Pass
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
