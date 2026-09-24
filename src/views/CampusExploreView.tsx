import React, { useState } from 'react';
import { EXPLORE_TILES } from '../data/mockData';
import { ExploreTile } from '../types';

interface CampusExploreViewProps {
  onSelectMedia: (item: any) => void;
  onSendToast: (msg: string) => void;
  onOpenStoryModal?: () => void;
}

export const CampusExploreView: React.FC<CampusExploreViewProps> = ({
  onSelectMedia,
  onSendToast,
  onOpenStoryModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('🔥 Trending');

  const categories = [
    '🔥 Trending',
    '🎭 Campus Fest',
    '💻 Hackathons',
    '⚽ Sports',
    '🎨 Design & Arts',
    '🏛️ Academic'
  ];

  const filteredTiles = EXPLORE_TILES.filter((tile) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        tile.title.toLowerCase().includes(q) ||
        (tile.badge && tile.badge.toLowerCase().includes(q))
      );
    }

    if (activeCategory === '🎭 Campus Fest') {
      return tile.title.toLowerCase().includes('fest') || tile.title.toLowerCase().includes('gala') || tile.title.toLowerCase().includes('dance');
    }
    if (activeCategory === '💻 Hackathons') {
      return tile.title.toLowerCase().includes('hackathon') || tile.title.toLowerCase().includes('lab');
    }
    if (activeCategory === '⚽ Sports') {
      return tile.title.toLowerCase().includes('cricket') || tile.title.toLowerCase().includes('sports');
    }
    if (activeCategory === '🎨 Design & Arts') {
      return tile.title.toLowerCase().includes('architecture') || tile.title.toLowerCase().includes('pavilion');
    }
    if (activeCategory === '🏛️ Academic') {
      return tile.title.toLowerCase().includes('library') || tile.title.toLowerCase().includes('study');
    }

    return true;
  });

  return (
    <div className="flex flex-col w-full pb-14">
      {/* Search Header Bar */}
      <div className="sticky top-0 z-30 bg-[#f8f9ff]/95 backdrop-blur-md px-3 pt-3 pb-2 border-b border-[#e5eeff]/80">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-11 px-3.5 rounded-full bg-[#eff4ff] border border-[#dce9ff] flex items-center gap-2 text-[#0b1c30] focus-within:border-[#b80938] transition-colors">
            <span className="material-symbols-outlined text-[20px] text-[#76777d]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student clubs, fests, hackathons, #SOET..."
              className="bg-transparent flex-1 text-[13px] text-[#0b1c30] placeholder:text-[#76777d] outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="w-5 h-5 rounded-full bg-[#c6c6cd] text-white flex items-center justify-center text-[12px]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={() => onSendToast('Filters: Year, Department, Format')}
            className="w-11 h-11 rounded-full bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] flex items-center justify-center hover:bg-[#dce9ff] active:scale-95 transition"
            title="Filter Results"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2.5 pb-1 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap active:scale-95 transition-all shadow-sm ${
                  isSelected
                    ? 'bg-black text-white'
                    : 'bg-white text-[#0b1c30] hover:bg-[#eff4ff] border border-[#e5eeff]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-3 pt-3 flex flex-col gap-3">
        {/* Featured Campus Spotlight Banner (Live Hero) */}
        <div 
          onClick={() => {
            if (onOpenStoryModal) onOpenStoryModal();
            else onSendToast('Opening Live Stream: Annual Spring Gala 2025');
          }}
          className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] bg-[#131b2e] cursor-pointer shadow-md group border border-[#e5eeff]"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5uPpK-7gHdus0gFO1TzLYHduXQWEK65hQj7Tr4fZ17ECN2j2hYfH48euF93uQcQhy1rCr9tKAfFa8JUJLzkjp5K1Lau-0--P_kXARlkfbJ4cj5q-hmoVkVoRbIwPKmgphDRGRatqXwttDo3UITGJ3tvsdB9MOs4Er2KaESkU7VSa6JKPDzU_1WPM8bpFBbqr8-AFxYclWVw0lj8B55N3Muf4aX0XnKGB7K9kwHBawARg5mIG0kkNV"
            alt="Spring Gala"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-[#b80938] text-white text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              CAMPUS SPOTLIGHT
            </span>

            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-red-500">sensors</span>
              1.4k Watching
            </span>
          </div>

          {/* Bottom Card Copy & CTA */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 text-white">
            <h2 className="font-bold text-[16px] leading-snug drop-shadow-md">
              Annual Spring Gala 2025: Live from the Central Amphitheatre
            </h2>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-2 text-[12px] text-white/80">
                <span>📍 Central Amphitheatre</span>
                <span>• 840 Likes</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSendToast('Joined live broadcast room! 🎬');
                }}
                className="px-3.5 py-1 rounded-full bg-white text-[#0b1c30] text-[11px] font-bold shadow-md hover:bg-slate-100 active:scale-95 transition"
              >
                Watch Stream
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Staggered Explore Grid */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-bold text-[14px] text-[#0b1c30]">Campus Discovery</span>
            <span className="text-[11px] text-[#76777d]">{filteredTiles.length} items</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {filteredTiles.map((tile) => (
              <div
                key={tile.id}
                onClick={() => onSelectMedia(tile)}
                className={`relative rounded-xl overflow-hidden bg-[#eff4ff] cursor-pointer group shadow-sm border border-[#e5eeff] ${
                  tile.isTall ? 'aspect-[3/4] row-span-2' : 'aspect-square'
                }`}
              >
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Badges / Duration */}
                {tile.badge && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                    {tile.badge}
                  </div>
                )}

                {tile.isMultiPhoto && (
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white">
                    <span className="material-symbols-outlined text-[13px]">collections</span>
                  </div>
                )}

                {tile.isVideo && tile.duration && (
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                    {tile.duration}
                  </div>
                )}

                {/* Bottom Overlay Title & Stats */}
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="text-[12px] font-bold leading-tight line-clamp-2 drop-shadow-sm">
                    {tile.title}
                  </p>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-white/80">
                    {tile.likes && (
                      <span className="flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          favorite
                        </span>
                        {tile.likes}
                      </span>
                    )}
                    {tile.views && (
                      <span className="flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[11px]">visibility</span>
                        {tile.views}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
