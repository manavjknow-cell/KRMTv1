export type ScreenId = 'campus-feed' | 'campus-explore' | 'create-post' | 'campus-alerts' | 'student-profile';

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  text: string;
  timestamp: string;
  likes?: number;
}

export interface Post {
  id: string;
  author: string;
  authorName: string;
  authorCohort: string;
  avatar: string;
  location: string;
  timestamp: string;
  departmentTag?: string;
  isOfficial?: boolean;
  verified?: boolean;
  mediaType: 'photo' | 'announcement' | 'reel';
  imageUrl: string;
  likes: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  caption: string;
  tags: string[];
  commentsCount: number;
  comments: Comment[];
  announcementData?: {
    flagshipLabel: string;
    prizePool: string;
    subTitle: string;
    mainTitle: string;
    description: string;
    status: string;
    actionText: string;
  };
}

export interface Story {
  id: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  mediaUrl: string;
  isLive?: boolean;
  isVerified?: boolean;
  isUserStory?: boolean;
  unread?: boolean;
  caption?: string;
}

export interface PeerSuggestion {
  id: string;
  name: string;
  department: string;
  mutualCount: number;
  avatar: string;
  isConnected?: boolean;
}

export interface CampusAlert {
  id: string;
  category: 'mentions' | 'official';
  group: 'today' | 'campus' | 'week';
  actorName: string;
  actorRole?: string;
  actorAvatar?: string;
  icon?: string;
  actionText: string;
  highlightText?: string;
  location?: string;
  timestamp: string;
  previewImage?: string;
  isUnread: boolean;
  badgeType: 'favorite' | 'person_add' | 'chat_bubble' | 'announcement' | 'loyalty' | 'share' | 'event';
  commentQuote?: string;
  actions?: {
    primaryText?: string;
    secondaryText?: string;
    primaryIcon?: string;
  };
}

export interface ExploreTile {
  id: string;
  type: 'square' | 'tall-reel';
  title: string;
  imageUrl: string;
  views?: string;
  likes: string;
  comments?: string;
  badge?: string;
  badgeColor?: string;
  category: string;
  hasCollectionBadge?: boolean;
  hasAudioBadge?: boolean;
  location?: string;
  isTall?: boolean;
  isMultiPhoto?: boolean;
  isVideo?: boolean;
  duration?: string;
}

export interface CreatorSuggestion {
  id: string;
  name: string;
  department: string;
  role: string;
  avatar: string;
  isVerified?: boolean;
  isSports?: boolean;
  isFollowing?: boolean;
  actionLabel?: string;
}
