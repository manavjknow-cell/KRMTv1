import React, { useState } from 'react';
import { CampusAlert } from '../types';

interface CampusAlertsViewProps {
  alerts: CampusAlert[];
  onOpenStoryModal?: () => void;
  onSendToast: (msg: string) => void;
}

export const CampusAlertsView: React.FC<CampusAlertsViewProps> = ({
  alerts,
  onOpenStoryModal,
  onSendToast
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'mentions' | 'official'>('all');
  const [localAlerts, setLocalAlerts] = useState<CampusAlert[]>(alerts);
  const [followedBack, setFollowedBack] = useState<Record<string, boolean>>({});
  const [markedAllRead, setMarkedAllRead] = useState(false);
  const [replyAlertId, setReplyAlertId] = useState<string | null>(null);
  const [replyInput, setReplyInput] = useState('');
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [claimedSlot, setClaimedSlot] = useState<string | null>(null);

  const handleMarkAllRead = () => {
    setMarkedAllRead(true);
    setLocalAlerts((prev) => prev.map((a) => ({ ...a, isUnread: false })));
    onSendToast('All campus alerts marked as read! ✔️');
  };

  const handleToggleFollow = (alertId: string, name: string) => {
    const isNowFollowing = !followedBack[alertId];
    setFollowedBack((prev) => ({ ...prev, [alertId]: isNowFollowing }));
    onSendToast(isNowFollowing ? `Following ${name}!` : `Unfollowed ${name}`);
  };

  const handleSendReply = (alert: CampusAlert) => {
    if (!replyInput.trim()) return;
    onSendToast(`Reply sent to ${alert.actorName}: "${replyInput}"`);
    setReplyInput('');
    setReplyAlertId(null);
  };

  const handleClaimSlot = (slot: string) => {
    setClaimedSlot(slot);
    setShowSlotModal(false);
    onSendToast(`Rehearsal slot confirmed for ${slot}! Confirmation sent to student email.`);
  };

  const filteredAlerts = localAlerts.filter((a) => {
    if (activeTab === 'all') return true;
    return a.category === activeTab;
  });

  const unreadCount = localAlerts.filter((a) => a.isUnread).length;

  const groupedAlerts = {
    today: filteredAlerts.filter((a) => a.group === 'today'),
    campus: filteredAlerts.filter((a) => a.group === 'campus'),
    week: filteredAlerts.filter((a) => a.group === 'week')
  };

  return (
    <div className="flex flex-col w-full pb-14">
      {/* Page Context Sub-Bar & Quick Toggles */}
      <div className="px-3 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#db2e4e] animate-pulse" />
          <h1 className="font-bold text-[18px] text-[#0b1c30] tracking-tight">
            Activity & Campus Alerts
          </h1>
        </div>
        <button
          onClick={handleMarkAllRead}
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#eff4ff] hover:bg-[#dce9ff] transition-all active:scale-95 text-[#45464d] text-[11px] font-semibold"
        >
          <span className="material-symbols-outlined text-[15px]">
            {markedAllRead ? 'check' : 'done_all'}
          </span>
          <span>{markedAllRead ? 'Cleared' : 'Mark read'}</span>
        </button>
      </div>

      {/* Filter Pills (Scrollable) */}
      <div className="px-3 pb-3 overflow-x-auto flex gap-2 no-scrollbar">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap shadow-sm transition-all flex items-center gap-1.5 ${
            activeTab === 'all'
              ? 'bg-[#131b2e] text-white'
              : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#dce9ff]'
          }`}
        >
          <span>All Alerts</span>
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-[#b80938] text-white text-[10px] font-bold">
              {unreadCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('mentions')}
          className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all ${
            activeTab === 'mentions'
              ? 'bg-[#131b2e] text-white'
              : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#dce9ff]'
          }`}
        >
          Mentions & Replies
        </button>

        <button
          onClick={() => setActiveTab('official')}
          className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
            activeTab === 'official'
              ? 'bg-[#131b2e] text-white'
              : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#dce9ff]'
          }`}
        >
          <span>Official KRMU</span>
          <span>🏛️</span>
        </button>
      </div>

      {/* Priority Banner: High Impact Notice */}
      <div className="mx-3 mb-3 p-3.5 rounded-xl bg-gradient-to-r from-[#eff4ff] via-[#e5eeff] to-[#dce9ff] relative overflow-hidden shadow-sm border border-[#dce9ff]">
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-[#db2e4e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">campaign</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] text-[#b80938] font-bold uppercase tracking-wider">
                Campus Priority
              </span>
              <span className="text-[10px] text-[#45464d]">• Active Now</span>
            </div>
            <p className="font-bold text-[14px] text-[#0b1c30] leading-tight">
              Spring Fest '26 Stage Registrations Open
            </p>
            <p className="text-[11px] text-[#45464d] mt-0.5">
              Book rehearsal slots in Audi 1 & Audi 2 before midnight.
            </p>
          </div>
          <button
            onClick={() => setShowSlotModal(true)}
            className="px-3 py-1.5 rounded-lg bg-white text-[#b80938] font-bold text-[11px] hover:bg-[#f8f9ff] transition-all shadow-sm flex-shrink-0 self-center active:scale-95 border border-[#ffdadb]"
          >
            {claimedSlot ? 'Slot Booked' : 'Claim Slot'}
          </button>
        </div>
      </div>

      {/* Content Section: Grouped Time Bands */}
      <div className="flex flex-col gap-4 px-3 pb-6">
        {/* Group 1: New / Today */}
        {groupedAlerts.today.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#0b1c30] font-bold tracking-wide uppercase">
                  New / Today
                </span>
                {!markedAllRead && unreadCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-[#ffb95f]" title="Campus Gold Activity Dot" />
                )}
              </div>
              <span className="text-[11px] text-[#45464d]">
                {markedAllRead ? '0 unread' : `${unreadCount} unread`}
              </span>
            </div>

            {/* Like Alert (Rohan Verma) */}
            {groupedAlerts.today.map((alert) => (
              <div
                key={alert.id}
                className="relative flex items-start gap-3 p-3.5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-[#eff4ff]"
              >
                {/* Avatar / Icon */}
                <div className="relative flex-shrink-0">
                  {alert.actorAvatar ? (
                    <img
                      src={alert.actorAvatar}
                      alt={alert.actorName}
                      className="w-11 h-11 rounded-full object-cover ring-1 ring-[#e5eeff]"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#131b2e] text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">work</span>
                    </div>
                  )}

                  {/* Micro badge icon */}
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-sm text-white ${
                    alert.badgeType === 'favorite' ? 'bg-[#b80938]' : 'bg-[#131b2e]'
                  }`}>
                    <span 
                      className="material-symbols-outlined text-[13px]"
                      style={{ fontVariationSettings: alert.badgeType === 'favorite' ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {alert.badgeType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-[13px] text-[#0b1c30]">{alert.actorName}</span>
                    {alert.actorRole && (
                      <span className="px-1.5 py-0.2 rounded bg-[#dce9ff] text-[#0b1c30] text-[10px] font-bold">
                        {alert.actorRole}
                      </span>
                    )}
                    <span className="text-[13px] text-[#45464d]">{alert.actionText}</span>
                    {alert.location && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0b1c30] font-medium flex items-center gap-0.5 border border-[#dce9ff]">
                        <span className="material-symbols-outlined text-[11px] text-[#b80938]">location_on</span>
                        {alert.location}
                      </span>
                    )}
                  </div>

                  {alert.commentQuote && (
                    <div className="mt-1.5 p-2 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-[12px] italic border-l-2 border-[#b80938]">
                      {alert.commentQuote}
                    </div>
                  )}

                  {/* Actions / Timestamp */}
                  <div className="flex items-center gap-2 mt-2">
                    {alert.actions?.primaryText && alert.badgeType === 'person_add' && (
                      <button
                        onClick={() => handleToggleFollow(alert.id, alert.actorName)}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all active:scale-95 shadow-sm flex items-center gap-1 ${
                          followedBack[alert.id]
                            ? 'bg-[#dce9ff] text-[#0b1c30]'
                            : 'bg-[#b80938] text-white hover:bg-[#920029]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {followedBack[alert.id] ? 'check' : 'person_add'}
                        </span>
                        <span>{followedBack[alert.id] ? 'Following' : 'Follow Back'}</span>
                      </button>
                    )}

                    {alert.actions?.secondaryText && alert.badgeType === 'person_add' && (
                      <button
                        onClick={() => onSendToast(`Viewing ${alert.actorName} profile`)}
                        className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-[11px] font-semibold hover:bg-[#dce9ff]"
                      >
                        Profile
                      </button>
                    )}

                    {alert.badgeType === 'chat_bubble' && (
                      <>
                        <button
                          onClick={() => setReplyAlertId(alert.id)}
                          className="flex items-center gap-1 text-[#b80938] text-[11px] font-bold hover:underline"
                        >
                          <span className="material-symbols-outlined text-[15px]">reply</span> Reply
                        </button>
                        <button
                          onClick={() => onSendToast('Opening student project discussion post')}
                          className="flex items-center gap-1 text-[#45464d] text-[11px] font-semibold hover:text-[#0b1c30]"
                        >
                          <span className="material-symbols-outlined text-[15px]">visibility</span> View Post
                        </button>
                      </>
                    )}

                    <span className="text-[11px] text-[#76777d] ml-auto">{alert.timestamp}</span>
                  </div>

                  {/* Inline reply form */}
                  {replyAlertId === alert.id && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendReply(alert);
                      }}
                      className="mt-2 flex items-center gap-2"
                    >
                      <input
                        type="text"
                        value={replyInput}
                        onChange={(e) => setReplyInput(e.target.value)}
                        placeholder={`Reply to ${alert.actorName}...`}
                        className="flex-1 h-8 px-3 rounded-lg bg-[#eff4ff] text-[12px] text-[#0b1c30] focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-2.5 py-1 bg-[#b80938] text-white text-[11px] font-bold rounded-lg"
                      >
                        Send
                      </button>
                    </form>
                  )}
                </div>

                {/* Thumbnail Preview */}
                {alert.previewImage && (
                  <div className="flex-shrink-0 relative">
                    <img
                      src={alert.previewImage}
                      alt="Preview"
                      className="w-12 h-12 rounded-lg object-cover ring-1 ring-[#dce9ff]"
                    />
                    {alert.isUnread && !markedAllRead && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ffb95f]" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Group 2: Campus & Club Alerts */}
        {groupedAlerts.campus.length > 0 && (
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#0b1c30] font-bold tracking-wide uppercase">
                  Campus & Club Alerts
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#b80938]">verified</span>
              </div>
              <span className="text-[11px] text-[#45464d]">Official Hub</span>
            </div>

            {groupedAlerts.campus.map((alert) => (
              <div
                key={alert.id}
                className="relative flex items-start gap-3 p-3.5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-[#eff4ff]"
              >
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  {alert.badgeType === 'announcement' ? (
                    <div className="w-11 h-11 rounded-xl bg-[#b80938] text-white flex items-center justify-center font-bold shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">account_balance</span>
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#ffb95f] to-[#b80938]">
                      <img
                        src={alert.actorAvatar}
                        alt={alert.actorName}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                  )}

                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#131b2e] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">
                      {alert.badgeType === 'announcement' ? 'campaign' : 'loyalty'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {alert.badgeType === 'announcement' && (
                      <span className="px-2 py-0.5 rounded-full bg-[#ffdadb] text-[#40000d] text-[10px] font-bold flex items-center gap-1">
                        📢 Official Broadcast
                      </span>
                    )}
                    <span className="font-bold text-[13px] text-[#0b1c30]">{alert.actorName}</span>
                    <span className="text-[11px] text-[#45464d]">{alert.actorRole}</span>
                  </div>

                  <p className="font-bold text-[13px] text-[#0b1c30] mt-1 leading-snug">
                    {alert.actionText}
                  </p>

                  {alert.highlightText && (
                    <p className="text-[11px] text-[#45464d] mt-0.5 leading-relaxed">
                      {alert.highlightText}
                    </p>
                  )}

                  {alert.commentQuote && (
                    <p className="text-[13px] text-[#b80938] font-semibold mt-0.5">
                      {alert.commentQuote}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-2.5">
                    {alert.badgeType === 'announcement' ? (
                      <>
                        <button
                          onClick={() => onSendToast('Downloading KRMU Mid-Term Schedule PDF... 📄')}
                          className="px-3 py-1 rounded-lg bg-[#131b2e] text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-black transition-all active:scale-95 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[15px]">download</span>
                          Download PDF
                        </button>
                        <button
                          onClick={() => onSendToast('Showing exam rules & session schedule')}
                          className="px-3 py-1 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-[11px] font-semibold hover:bg-[#dce9ff]"
                        >
                          Exam Details
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            if (onOpenStoryModal) onOpenStoryModal();
                            else onSendToast('Viewing E-Cell Founder Story');
                          }}
                          className="px-3 py-1 rounded-full bg-[#dce9ff] text-[#0b1c30] text-[11px] font-bold flex items-center gap-1 hover:bg-[#d3e4fe]"
                        >
                          <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                          View Story
                        </button>
                        <button
                          onClick={() => onSendToast('RSVP confirmed for Startup Founders Panel! 🎉')}
                          className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#45464d] text-[11px] font-semibold hover:text-[#0b1c30]"
                        >
                          RSVP
                        </button>
                      </>
                    )}

                    <span className="text-[11px] text-[#76777d] ml-auto">{alert.timestamp}</span>
                  </div>
                </div>

                {alert.previewImage && (
                  <div className="flex-shrink-0">
                    <img
                      src={alert.previewImage}
                      alt="Story"
                      className="w-10 h-14 rounded-md object-cover ring-1 ring-[#dce9ff]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Group 3: This Week */}
        {groupedAlerts.week.length > 0 && (
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] text-[#0b1c30] font-bold tracking-wide uppercase">
                This Week
              </span>
              <span className="text-[11px] text-[#45464d]">Archive</span>
            </div>

            {groupedAlerts.week.map((alert) => (
              <div
                key={alert.id}
                className="relative flex items-start gap-3 p-3.5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-[#eff4ff]"
              >
                {/* Icon or Avatar */}
                <div className="relative flex-shrink-0">
                  {alert.actorAvatar ? (
                    <img
                      src={alert.actorAvatar}
                      alt={alert.actorName}
                      className="w-11 h-11 rounded-full object-cover ring-1 ring-[#e5eeff]"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#ffddb8] text-[#2a1700] flex flex-col items-center justify-center shadow-sm font-bold">
                      <span className="text-[10px] uppercase leading-none">AUDI</span>
                      <span className="text-[15px] leading-none mt-0.5">02</span>
                    </div>
                  )}

                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#b80938] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">
                      {alert.badgeType === 'event' ? 'event' : 'share'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-[13px] text-[#0b1c30]">{alert.actorName}</span>
                    {alert.actorRole && (
                      <span className="px-1.5 py-0.5 rounded bg-[#dce9ff] text-[#0b1c30] text-[10px] font-bold">
                        {alert.actorRole}
                      </span>
                    )}
                    <span className="text-[12px] text-[#45464d]">{alert.actionText}</span>
                  </div>

                  {alert.highlightText && (
                    <p className="text-[11px] text-[#45464d] mt-0.5 leading-relaxed">
                      {alert.highlightText}
                    </p>
                  )}

                  <div className="flex items-center gap-2 mt-2">
                    {alert.badgeType === 'event' ? (
                      <>
                        <button
                          onClick={() => onSendToast('Audition added to student Google Calendar 📅')}
                          className="px-3 py-1 rounded-full bg-[#131b2e] text-white text-[11px] font-bold hover:bg-black"
                        >
                          Add to Calendar
                        </button>
                        <button
                          onClick={() => onSendToast('Directions: Audi 2 is in Block B, Ground Floor.')}
                          className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-[11px] font-semibold hover:bg-[#dce9ff]"
                        >
                          Directions
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onSendToast(`Sent thank you note to ${alert.actorName}!`)}
                        className="flex items-center gap-1 text-[#45464d] text-[11px] font-semibold hover:text-[#0b1c30]"
                      >
                        <span className="material-symbols-outlined text-[15px]">send</span> Say Thanks
                      </button>
                    )}

                    <span className="text-[11px] text-[#76777d] ml-auto">{alert.timestamp}</span>
                  </div>
                </div>

                {alert.previewImage && (
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#131b2e]">
                      <img
                        src={alert.previewImage}
                        alt="Reel"
                        className="w-full h-full object-cover opacity-85"
                      />
                      <span className="material-symbols-outlined text-[14px] text-white absolute inset-0 m-auto flex items-center justify-center">
                        play_arrow
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Campus Heartbeat Tip */}
      <div className="mx-3 p-3.5 rounded-xl bg-[#e5eeff] text-center border border-[#dce9ff]">
        <div className="flex items-center justify-center gap-1 text-[#0b1c30] text-[12px] font-bold">
          <span className="material-symbols-outlined text-[16px] text-[#b80938]">cell_tower</span>
          <span>K.R. Mangalam Campus Activity Feed • Live Sync</span>
        </div>
        <p className="text-[10px] text-[#45464d] mt-0.5">
          Adjust notification preferences under Student Profile &gt; Privacy
        </p>
      </div>

      {/* Claim Slot Rehearsal Modal */}
      {showSlotModal && (
        <div className="fixed inset-0 z-50 bg-[#213145]/70 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl flex flex-col border border-[#eff4ff]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#b80938]">theater_comedy</span>
                <h3 className="font-bold text-[16px] text-[#0b1c30]">Spring Fest Rehearsal Slot</h3>
              </div>
              <button
                onClick={() => setShowSlotModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#45464d] hover:bg-[#eff4ff]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="text-[12px] text-[#45464d] mt-2">
              Select an official campus auditorium rehearsal slot for your student society:
            </p>

            <div className="space-y-2 mt-3">
              <button
                onClick={() => handleClaimSlot('Audi 1 • 5:00 PM - 6:30 PM')}
                className="w-full p-3 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-left flex items-center justify-between border border-[#dce9ff] active:scale-98 transition"
              >
                <div>
                  <span className="font-bold text-[13px] text-[#0b1c30] block">Auditorium 1 (Main Stage)</span>
                  <span className="text-[11px] text-[#45464d]">Today, 5:00 PM - 6:30 PM (Acoustics & Mic check)</span>
                </div>
                <span className="text-[11px] text-[#b80938] font-bold">2 slots left</span>
              </button>

              <button
                onClick={() => handleClaimSlot('Audi 2 • 7:00 PM - 8:30 PM')}
                className="w-full p-3 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-left flex items-center justify-between border border-[#dce9ff] active:scale-98 transition"
              >
                <div>
                  <span className="font-bold text-[13px] text-[#0b1c30] block">Auditorium 2 (Dance Floor)</span>
                  <span className="text-[11px] text-[#45464d]">Today, 7:00 PM - 8:30 PM (Lighting & Choreography)</span>
                </div>
                <span className="text-[11px] text-[#b80938] font-bold">Available</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
