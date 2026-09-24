/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, Post, Story } from './types';
import { INITIAL_POSTS, INITIAL_STORIES, PEER_SUGGESTIONS, CAMPUS_ALERTS } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { IdCardModal } from './components/IdCardModal';
import { StoryViewerModal } from './components/StoryViewerModal';
import { DirectMessagesModal } from './components/DirectMessagesModal';
import { CameraModal } from './components/CameraModal';
import { MediaDetailModal } from './components/MediaDetailModal';

import { CampusFeedView } from './views/CampusFeedView';
import { StudentProfileView } from './views/StudentProfileView';
import { CampusAlertsView } from './views/CampusAlertsView';
import { CreatePostView } from './views/CreatePostView';
import { CampusExploreView } from './views/CampusExploreView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('campus-feed');
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  
  // Modals state
  const [isIdCardOpen, setIsIdCardOpen] = useState(false);
  const [isStoryViewerOpen, setIsStoryViewerOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [selectedMediaDetail, setSelectedMediaDetail] = useState<any | null>(null);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const handleOpenStory = (index: number) => {
    setActiveStoryIndex(index);
    setIsStoryViewerOpen(true);
  };

  const handlePublishPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    setCurrentScreen('campus-feed');
    showToast('Post live on KRMT Campus Feed! 🎉');
  };

  const handleCaptureStory = (mediaUrl: string) => {
    const userStoryIndex = stories.findIndex((s) => s.isUserStory);
    if (userStoryIndex >= 0) {
      const updatedStories = [...stories];
      updatedStories[userStoryIndex] = {
        ...updatedStories[userStoryIndex],
        mediaUrl
      };
      setStories(updatedStories);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0b1c30] flex justify-center selection:bg-[#ffdadb] selection:text-[#b80938]">
      {/* Mobile-centric Frame Container */}
      <div className="relative w-full max-w-md min-h-screen bg-[#f8f9ff] flex flex-col shadow-2xl overflow-x-hidden border-x border-[#e5eeff]">
        
        {/* Top Header */}
        <Header
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
          onOpenMessages={() => setIsMessagesOpen(true)}
          onOpenCamera={() => setIsCameraOpen(true)}
          unreadMessagesCount={3}
        />

        {/* Screen Switcher Bar (Quick Test & Navigation) */}
        <div className="bg-[#eff4ff] border-b border-[#e5eeff] px-2 py-1 flex items-center justify-between text-[11px] overflow-x-auto no-scrollbar">
          <span className="font-bold text-[#45464d] uppercase px-1 text-[10px] tracking-wider flex-shrink-0">
            Screens:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentScreen('campus-feed')}
              className={`px-2 py-0.5 rounded-full font-semibold transition ${
                currentScreen === 'campus-feed'
                  ? 'bg-[#b80938] text-white shadow-sm'
                  : 'text-[#45464d] hover:bg-[#dce9ff]'
              }`}
            >
              1. Feed
            </button>
            <button
              onClick={() => setCurrentScreen('student-profile')}
              className={`px-2 py-0.5 rounded-full font-semibold transition ${
                currentScreen === 'student-profile'
                  ? 'bg-[#b80938] text-white shadow-sm'
                  : 'text-[#45464d] hover:bg-[#dce9ff]'
              }`}
            >
              2. Profile
            </button>
            <button
              onClick={() => setCurrentScreen('campus-alerts')}
              className={`px-2 py-0.5 rounded-full font-semibold transition ${
                currentScreen === 'campus-alerts'
                  ? 'bg-[#b80938] text-white shadow-sm'
                  : 'text-[#45464d] hover:bg-[#dce9ff]'
              }`}
            >
              3. Alerts
            </button>
            <button
              onClick={() => setCurrentScreen('create-post')}
              className={`px-2 py-0.5 rounded-full font-semibold transition ${
                currentScreen === 'create-post'
                  ? 'bg-[#b80938] text-white shadow-sm'
                  : 'text-[#45464d] hover:bg-[#dce9ff]'
              }`}
            >
              4. Create
            </button>
            <button
              onClick={() => setCurrentScreen('campus-explore')}
              className={`px-2 py-0.5 rounded-full font-semibold transition ${
                currentScreen === 'campus-explore'
                  ? 'bg-[#b80938] text-white shadow-sm'
                  : 'text-[#45464d] hover:bg-[#dce9ff]'
              }`}
            >
              5. Explore
            </button>
          </div>
        </div>

        {/* Main Body Content according to Screen */}
        <main className="flex-1 w-full flex flex-col pb-16">
          {currentScreen === 'campus-feed' && (
            <CampusFeedView
              posts={posts}
              stories={stories}
              peers={PEER_SUGGESTIONS}
              onOpenStory={handleOpenStory}
              onSendToast={showToast}
              onApplyHackathon={() => {
                showToast('Registration for KRMU National Hackathon 2025 opened!');
              }}
            />
          )}

          {currentScreen === 'student-profile' && (
            <StudentProfileView
              onOpenIdCard={() => setIsIdCardOpen(true)}
              onOpenHighlight={(hlId) => {
                showToast('Viewing University Highlight reel 🏆');
                handleOpenStory(0);
              }}
              onSelectMedia={(item) => setSelectedMediaDetail(item)}
              onSendToast={showToast}
              onNavigateToFeed={() => setCurrentScreen('campus-feed')}
            />
          )}

          {currentScreen === 'campus-alerts' && (
            <CampusAlertsView
              alerts={CAMPUS_ALERTS}
              onOpenStoryModal={() => handleOpenStory(1)}
              onSendToast={showToast}
            />
          )}

          {currentScreen === 'create-post' && (
            <CreatePostView
              onPublishPost={handlePublishPost}
              onCancel={() => setCurrentScreen('campus-feed')}
              onSendToast={showToast}
            />
          )}

          {currentScreen === 'campus-explore' && (
            <CampusExploreView
              onSelectMedia={(item) => setSelectedMediaDetail(item)}
              onSendToast={showToast}
              onOpenStoryModal={() => handleOpenStory(0)}
            />
          )}
        </main>

        {/* Bottom Persistent Tab Navigation */}
        <BottomNav
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
          hasUnreadAlerts={true}
        />

        {/* Floating Campus Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#131b2e] text-white text-[12px] font-medium shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/10 max-w-[90vw]">
            <span className="w-2 h-2 rounded-full bg-[#ffb95f] flex-shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </div>
        )}

        {/* Interactive Modals */}
        <IdCardModal
          isOpen={isIdCardOpen}
          onClose={() => setIsIdCardOpen(false)}
        />

        <StoryViewerModal
          stories={stories}
          initialIndex={activeStoryIndex}
          isOpen={isStoryViewerOpen}
          onClose={() => setIsStoryViewerOpen(false)}
          onSendToast={showToast}
        />

        <DirectMessagesModal
          isOpen={isMessagesOpen}
          onClose={() => setIsMessagesOpen(false)}
          onSendToast={showToast}
        />

        <CameraModal
          isOpen={isCameraOpen}
          onClose={() => setIsCameraOpen(false)}
          onCaptureStory={handleCaptureStory}
          onSendToast={showToast}
        />

        <MediaDetailModal
          item={selectedMediaDetail}
          onClose={() => setSelectedMediaDetail(null)}
          onSendToast={showToast}
        />
      </div>
    </div>
  );
}
