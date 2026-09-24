import React, { useState } from 'react';
import { Post, Story, PeerSuggestion } from '../types';

interface CampusFeedViewProps {
  posts: Post[];
  stories: Story[];
  peers: PeerSuggestion[];
  onOpenStory: (storyIndex: number) => void;
  onOpenPeerProfile?: (peer: PeerSuggestion) => void;
  onSendToast: (msg: string) => void;
  onNavigateToPostDetail?: (post: Post) => void;
  onApplyHackathon?: () => void;
}

export const CampusFeedView: React.FC<CampusFeedViewProps> = ({
  posts,
  stories,
  peers,
  onOpenStory,
  onSendToast,
  onApplyHackathon
}) => {
  const [activeFilter, setActiveFilter] = useState('Campus Buzz');
  const [localPosts, setLocalPosts] = useState<Post[]>(posts);
  const [localPeers, setLocalPeers] = useState<PeerSuggestion[]>(peers);
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  const [popHeartPostId, setPopHeartPostId] = useState<string | null>(null);
  const [followingOfficial, setFollowingOfficial] = useState(false);
  const [lastTapTime, setLastTapTime] = useState<Record<string, number>>({});

  // Sync with prop updates
  React.useEffect(() => {
    setLocalPosts(posts);
  }, [posts]);

  // Handle Double-tap on media to like
  const handleMediaDoubleTap = (postId: string) => {
    const now = Date.now();
    const last = lastTapTime[postId] || 0;
    if (now - last < 320) {
      // Trigger pop heart
      setPopHeartPostId(postId);
      setTimeout(() => setPopHeartPostId(null), 800);

      // Force like state
      setLocalPosts((prev) =>
        prev.map((p) => {
          if (p.id === postId) {
            const wasLiked = p.isLiked;
            return {
              ...p,
              isLiked: true,
              likes: wasLiked ? p.likes : p.likes + 1
            };
          }
          return p;
        })
      );
      onSendToast('Liked post ❤️');
    }
    setLastTapTime((prev) => ({ ...prev, [postId]: now }));
  };

  // Toggle regular like button
  const handleToggleLike = (postId: string) => {
    setLocalPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likes: isLiked ? p.likes + 1 : p.likes - 1
          };
        }
        return p;
      })
    );
  };

  // Toggle bookmark
  const handleToggleBookmark = (postId: string) => {
    setLocalPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isBookmarked = !p.isBookmarked;
          onSendToast(isBookmarked ? 'Saved to campus bookmarks 🔖' : 'Removed from bookmarks');
          return { ...p, isBookmarked };
        }
        return p;
      })
    );
  };

  // Add a comment
  const handlePostComment = (postId: string) => {
    const text = newComments[postId]?.trim();
    if (!text) return;

    setLocalPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [
              ...p.comments,
              {
                id: String(Date.now()),
                author: 'ananya.codes',
                text,
                timestamp: 'Just now',
                likes: 0
              }
            ]
          };
        }
        return p;
      })
    );

    setNewComments((prev) => ({ ...prev, [postId]: '' }));
    onSendToast('Comment published to campus!');
  };

  // Connect peer toggle
  const handleToggleConnect = (peerId: string) => {
    setLocalPeers((prev) =>
      prev.map((peer) => {
        if (peer.id === peerId) {
          const isConnected = !peer.isConnected;
          onSendToast(isConnected ? `Connection request sent to ${peer.name}!` : `Removed ${peer.name}`);
          return { ...peer, isConnected };
        }
        return peer;
      })
    );
  };

  // Dismiss peer
  const handleDismissPeer = (peerId: string) => {
    setLocalPeers((prev) => prev.filter((p) => p.id !== peerId));
  };

  const filterTabs = ['Campus Buzz', 'SOET Engg', 'Clubs & Fests', 'Official Alerts', 'Athletics'];

  // Filter posts based on active filter
  const displayedPosts = localPosts.filter((post) => {
    if (activeFilter === 'Campus Buzz') return true;
    if (activeFilter === 'SOET Engg') return post.authorCohort.includes('SOET') || post.departmentTag?.includes('Engineering');
    if (activeFilter === 'Clubs & Fests') return post.tags.some(t => t.includes('Fest') || t.includes('Club') || t.includes('Vibes'));
    if (activeFilter === 'Official Alerts') return post.isOfficial;
    if (activeFilter === 'Athletics') return post.tags.some(t => t.includes('Sports') || t.includes('Athletics'));
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Campus Filter Bar (Floating Tabs) */}
      <div className="w-full px-3 py-2 overflow-x-auto flex items-center gap-2 no-scrollbar bg-[#f8f9ff]/80 backdrop-blur-md sticky top-0 z-20 border-b border-[#e5eeff]/50">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full font-semibold text-[12px] whitespace-nowrap active:scale-95 transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#dce9ff] text-[#0b1c30] hover:bg-[#d3e4fe]'
              }`}
            >
              {tab === 'Campus Buzz' && (
                <span className="material-symbols-outlined text-[16px] text-[#ffb95f]">local_fire_department</span>
              )}
              {tab}
            </button>
          );
        })}
      </div>

      {/* 1. Stories Carousel */}
      <section className="w-full py-2 overflow-x-auto no-scrollbar border-b border-[#e5eeff]/60">
        <div className="flex items-center gap-3 px-3 w-max">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => onOpenStory(index)}
              className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform select-none"
            >
              <div className="relative w-[68px] h-[68px] flex items-center justify-center">
                {story.isUserStory ? (
                  <>
                    <div className="w-[64px] h-[64px] rounded-full p-0.5 bg-[#dce9ff] flex items-center justify-center">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={story.authorAvatar}
                        alt={story.title}
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#b80938] text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full rounded-full p-[2.5px] bg-gradient-to-tr from-[#ffb95f] via-[#b80938] to-[#db2e4e] shadow-sm flex items-center justify-center">
                      <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={story.authorAvatar}
                          alt={story.title}
                        />
                      </div>
                    </div>

                    {story.isVerified && (
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[10px]">verified</span>
                      </span>
                    )}

                    {story.isLive && (
                      <span className="absolute -top-1 px-1.5 py-0.2 rounded-full bg-[#b80938] text-white text-[9px] tracking-wider uppercase font-bold shadow-sm animate-pulse">
                        LIVE
                      </span>
                    )}
                  </>
                )}
              </div>
              <span className="text-[11px] text-[#0b1c30] font-medium truncate max-w-[70px] text-center">
                {story.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Main Campus Feed Posts Stack */}
      <div className="flex flex-col gap-4 mt-2 px-0 md:px-2">
        {displayedPosts.map((post, postIndex) => (
          <React.Fragment key={post.id}>
            <article 
              className="flex flex-col w-full bg-white shadow-sm rounded-xl overflow-hidden border border-[#eff4ff]"
              id={`post-${post.id}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`p-0.5 rounded-full ${post.isOfficial ? 'bg-black' : 'bg-gradient-to-tr from-[#ffb95f] to-[#b80938]'} flex-shrink-0`}>
                    <img
                      className="w-9 h-9 rounded-full object-cover"
                      src={post.avatar}
                      alt={post.author}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[14px] text-[#0b1c30] truncate">
                        {post.author}
                      </span>
                      {post.verified && (
                        <span className="material-symbols-outlined text-[15px] text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
                          verified
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 rounded-full bg-[#dce9ff] text-[#45464d] text-[10px] uppercase font-semibold">
                        {post.authorCohort}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#45464d] text-[11px]">
                      <span className="material-symbols-outlined text-[12px] text-[#b80938]">location_on</span>
                      <span className="truncate">{post.location}</span>
                      <span className="opacity-60">• {post.timestamp}</span>
                    </div>
                  </div>
                </div>

                {post.isOfficial ? (
                  <button
                    onClick={() => {
                      setFollowingOfficial(!followingOfficial);
                      onSendToast(followingOfficial ? 'Unfollowed KRMU Official' : 'Following KRMU Official!');
                    }}
                    className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all ${
                      followingOfficial
                        ? 'bg-[#dce9ff] text-[#0b1c30]'
                        : 'bg-black text-white hover:bg-slate-800'
                    }`}
                  >
                    {followingOfficial ? 'Following' : 'Follow'}
                  </button>
                ) : (
                  <button 
                    onClick={() => onSendToast('Post options: link copied to clipboard!')}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#45464d] hover:bg-[#eff4ff] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                  </button>
                )}
              </div>

              {/* Media Canvas with Double Tap */}
              {post.mediaType === 'photo' ? (
                <div
                  onClick={() => handleMediaDoubleTap(post.id)}
                  className="relative w-full aspect-[4/5] bg-[#eff4ff] overflow-hidden group select-none cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover pointer-events-none"
                    src={post.imageUrl}
                    alt={post.caption}
                  />

                  {/* Department Tag Overlay Floating Pill */}
                  {post.departmentTag && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#b80938]" />
                      <span className="text-[11px] text-[#0b1c30] font-bold">
                        {post.departmentTag}
                      </span>
                    </div>
                  )}

                  {/* Floating Pop Heart on Double Tap */}
                  {popHeartPostId === post.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-heart-pop">
                      <span 
                        className="material-symbols-outlined text-[96px] text-white drop-shadow-[0_4px_16px_rgba(184,9,56,0.6)]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        favorite
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                /* Official Announcement Graphic Canvas */
                <div
                  onClick={() => handleMediaDoubleTap(post.id)}
                  className="relative w-full aspect-square bg-[#131b2e] overflow-hidden flex flex-col justify-between p-6 select-none cursor-pointer text-white"
                >
                  {/* Ambient graphic backdrop overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#131b2e] via-[#d3e4fe]/10 to-[#db2e4e]/30" />
                  <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#b80938]/25 blur-3xl pointer-events-none" />
                  <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#ffddb8]/20 blur-3xl pointer-events-none" />

                  {/* Graphic Header Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                      {post.announcementData?.flagshipLabel || 'Flagship Event'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] text-[12px] font-bold shadow-sm">
                      {post.announcementData?.prizePool || '₹5,00,000 POOL'}
                    </span>
                  </div>

                  {/* Graphic Main Content */}
                  <div className="relative z-10 flex flex-col gap-2 my-auto">
                    <span className="text-[11px] uppercase tracking-widest text-[#7c839b] font-bold">
                      {post.announcementData?.subTitle || 'K.R. Mangalam University Presents'}
                    </span>
                    <h2 className="text-[26px] text-white font-black leading-tight tracking-tight whitespace-pre-line">
                      {post.announcementData?.mainTitle || 'NATIONAL\nHACKATHON\n2025'}
                    </h2>
                    <p className="text-[12px] text-[#bec6e0] max-w-[280px] mt-1 leading-relaxed">
                      {post.announcementData?.description || '36-Hour Prototype Sprint. AI, Web3, MedTech & Smart Campus tracks.'}
                    </p>
                  </div>

                  {/* Graphic CTA Footer */}
                  <div className="relative z-10 flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b80938] animate-pulse" />
                      <span className="text-[11px] text-white font-medium">
                        {post.announcementData?.status || 'Registrations Closing Soon'}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onApplyHackathon) onApplyHackathon();
                        else onSendToast('Opened Hackathon Registration Portal 🚀');
                      }}
                      className="w-10 h-10 rounded-full bg-white text-[#0b1c30] flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                    >
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </div>

                  {/* Pop Heart on Double Tap */}
                  {popHeartPostId === post.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-heart-pop">
                      <span 
                        className="material-symbols-outlined text-[96px] text-white drop-shadow-[0_4px_16px_rgba(184,9,56,0.6)]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        favorite
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Tray Bar */}
              <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
                <div className="flex items-center gap-4">
                  {/* Heart Button */}
                  <button
                    onClick={() => handleToggleLike(post.id)}
                    className="flex items-center gap-1 active:scale-125 transition-transform"
                  >
                    <span
                      className={`material-symbols-outlined text-[26px] ${
                        post.isLiked ? 'text-[#b80938]' : 'text-[#0b1c30]'
                      }`}
                      style={{ fontVariationSettings: post.isLiked ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>

                  {/* Comment Bubble */}
                  <button
                    onClick={() => {
                      const input = document.getElementById(`comment-input-${post.id}`);
                      if (input) input.focus();
                    }}
                    className="flex items-center gap-1 text-[#0b1c30] active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[26px]">chat_bubble_outline</span>
                  </button>

                  {/* Share Airplane */}
                  <button 
                    onClick={() => onSendToast('Link copied to share with campus group!')}
                    className="flex items-center gap-1 text-[#0b1c30] active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[26px]">send</span>
                  </button>
                </div>

                {/* Bookmark Icon */}
                <button
                  onClick={() => handleToggleBookmark(post.id)}
                  className="active:scale-90 transition-transform"
                >
                  <span
                    className={`material-symbols-outlined text-[26px] ${
                      post.isBookmarked ? 'text-[#b80938]' : 'text-[#0b1c30]'
                    }`}
                    style={{ fontVariationSettings: post.isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {post.isBookmarked ? 'bookmark' : 'bookmark_border'}
                  </span>
                </button>
              </div>

              {/* Likes Summary */}
              <div className="px-3 flex items-center gap-1.5 mt-0.5">
                <div className="flex -space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#ffdadb] border border-white" />
                  <div className="w-4 h-4 rounded-full bg-[#ffddb8] border border-white" />
                </div>
                <span className="text-[12px] text-[#0b1c30] font-bold">
                  {post.likes.toLocaleString()} likes
                </span>
              </div>

              {/* Caption & Hashtags */}
              <div className="px-3 py-1">
                <p className="text-[13px] text-[#0b1c30] leading-relaxed">
                  <span className="font-bold mr-1.5">{post.author}</span>
                  {post.caption}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => onSendToast(`Filtering by tag ${tag}`)}
                        className="text-[11px] text-[#b80938] font-semibold cursor-pointer hover:underline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Comments Section Preview */}
              <div className="px-3 pb-2 flex flex-col gap-1.5">
                {post.commentsCount > 0 && (
                  <button 
                    onClick={() => onSendToast(`Viewing all ${post.commentsCount} student comments`)}
                    className="text-left text-[12px] text-[#45464d] hover:text-[#0b1c30]"
                  >
                    View all {post.commentsCount} comments
                  </button>
                )}

                {post.comments.slice(-2).map((comment) => (
                  <div key={comment.id} className="flex items-center gap-1.5 text-[12px]">
                    <span className="font-bold text-[#0b1c30]">{comment.author}</span>
                    <span className="text-[#334155] truncate flex-1">{comment.text}</span>
                    <span className="material-symbols-outlined text-[14px] text-[#76777d] ml-auto">
                      favorite_border
                    </span>
                  </div>
                ))}
              </div>

              {/* Apply Button for Official Notice */}
              {post.isOfficial && post.announcementData && (
                <div className="px-3 pb-3 pt-1">
                  <button
                    onClick={() => {
                      if (onApplyHackathon) onApplyHackathon();
                      else onSendToast('Opening KRMU Student Portal for Hackathon application!');
                    }}
                    className="w-full py-2.5 rounded-lg bg-black text-white text-[13px] font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-sm hover:bg-slate-900"
                  >
                    <span>{post.announcementData.actionText}</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </button>
                </div>
              )}

              {/* Quick Comment Mini Input */}
              <div className="px-3 py-2 bg-[#eff4ff] flex items-center gap-2 border-t border-[#e5eeff]/80">
                <div className="w-6 h-6 rounded-full bg-[#dce9ff] flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-[#45464d]">account_circle</span>
                </div>
                <input
                  id={`comment-input-${post.id}`}
                  type="text"
                  value={newComments[post.id] || ''}
                  onChange={(e) => setNewComments({ ...newComments, [post.id]: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handlePostComment(post.id);
                  }}
                  placeholder="Add a campus comment..."
                  className="bg-transparent flex-1 text-[12px] text-[#0b1c30] placeholder:text-[#45464d] outline-none"
                />
                <button
                  onClick={() => handlePostComment(post.id)}
                  disabled={!newComments[post.id]?.trim()}
                  className="text-[12px] font-bold text-[#b80938] px-1 disabled:opacity-40 active:scale-95 transition"
                >
                  Post
                </button>
              </div>
            </article>

            {/* 3. Insert Suggested Campus Peers Horizontal Rail after Post 1 */}
            {postIndex === 0 && localPeers.length > 0 && (
              <section className="w-full bg-[#eff4ff] py-3 px-3 rounded-xl shadow-sm flex flex-col gap-2 my-1 border border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#b80938]">group_add</span>
                    <span className="font-bold text-[15px] text-[#0b1c30]">Classmates You May Know</span>
                  </div>
                  <button 
                    onClick={() => onSendToast('Showing all university cohort suggestions')}
                    className="text-[12px] text-[#b80938] font-bold hover:underline"
                  >
                    See All
                  </button>
                </div>

                <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                  {localPeers.map((peer) => (
                    <div
                      key={peer.id}
                      className="w-[145px] flex-shrink-0 bg-white p-3 rounded-xl flex flex-col items-center text-center shadow-sm relative border border-[#e5eeff]"
                    >
                      <button
                        onClick={() => handleDismissPeer(peer.id)}
                        className="absolute top-1.5 right-1.5 text-[#45464d] opacity-60 hover:opacity-100"
                        title="Dismiss"
                      >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>

                      <div className="w-14 h-14 rounded-full p-0.5 bg-[#dce9ff] mb-2">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={peer.avatar}
                          alt={peer.name}
                        />
                      </div>

                      <span className="font-bold text-[13px] text-[#0b1c30] truncate w-full">
                        {peer.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[#eff4ff] text-[10px] text-[#45464d] my-1 truncate w-full">
                        {peer.department}
                      </span>
                      <span className="text-[10px] text-[#76777d] mb-2.5 truncate w-full">
                        {peer.mutualCount} Mutuals
                      </span>

                      <button
                        onClick={() => handleToggleConnect(peer.id)}
                        className={`w-full py-1.5 rounded-full text-[12px] font-semibold active:scale-95 transition-all shadow-sm ${
                          peer.isConnected
                            ? 'bg-[#dce9ff] text-[#0b1c30]'
                            : 'bg-[#b80938] text-white hover:bg-[#920029]'
                        }`}
                      >
                        {peer.isConnected ? 'Connected' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* End of Feed Warm Decorative Footer State */}
      <div className="flex flex-col items-center justify-center text-center p-8 mt-4 gap-2">
        <div className="w-12 h-12 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#b80938] shadow-sm">
          <span className="material-symbols-outlined text-[28px]">done_all</span>
        </div>
        <span className="font-bold text-[16px] text-[#0b1c30]">You're All Caught Up!</span>
        <p className="text-[12px] text-[#45464d] max-w-[240px] leading-relaxed">
          You've seen all fresh posts from your classmates and campus clubs today.
        </p>
      </div>
    </div>
  );
};
