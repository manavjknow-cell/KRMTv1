import { Post, Story, PeerSuggestion, CampusAlert, ExploreTile, CreatorSuggestion } from '../types';

export const KRMT_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcJPsNzqXW1Wtg3bnYYN4y8tHyWhZcbeWmBQIZW1kVcr5-UoJkoJ2Sm4ESqSCcJFNgRGWbRovF_sDIsBRI1uICocJI8byG3GDkpwCggjzCHM8RcPP9UVzDjQZ0gGMg5SseqsWAuTusXxTqA6tPbSQQe0uAvK3bWZ8Rq-n60At_IDybescJZFe97Va-ipXqHImmMz_4zFBwITTQBn-QLH2gUsv3vI5UHzf7oZ4TLHCOVnoG7SyC9tJU',
  currentStudentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiWYW1rVui_tJsz7xxHvH78-mXBlY545PwZaNh6wTbBiNiPpJuVNmMFvLzaDq0W0_q5A2chYE8hQB8gIqQrRk9dvxpoK0LW9IA6JqYzmtBSLohVwTEKKJ4u8PnbCMTp-epk2dQRWXrkZOgfJHbVI3pR9pxQB7v_IBlikCEWd4frQi2Z9pqwUGXOw9W8GSbopUVtqGbFxFYmAEeq2tBrgQVte9UnGsOgYg04aZKu_E_eoVbnoW2LUKh',
  campusCoverBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gZAUkpf8f62E6uyIUMC319WpdkiP8mLScTkWgmrMetZObcTJIQUwYB2cgWT3Mlyhag2cq64sB40L6dE_-AvrmM1-yxV7O2X4TdEGucsr1S5uuqP3pe5ZaZ_cSB5D4xOB8SCOkYoExCeJwxwLN33urmMdo4c7QL2Ehn_-WApfe7CLHHeiSdic1aRsQEIBwfyCFaBcb3aUn2vTXnHOVQsA-d7IhD2maOFVYzpYB-Fbyjo2GVCLnZec',
  officialCrest: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8aN3dQdrNcMor6eKeWoAXpjY8pVMp_apHQt0hihEK6bQT8IZ5k51L_yh7KPBxghjHOBSsiYLNXpVVhWiTcoYPioD8Ej0es2rsdukEYd3k9yaN9lxSzXJCkW1-HR8LCwlEXMIA4LNawghxNnamYW91YWS5maLPCgsf3BHSzNne_OblJXPYYYC_lIkp3wt67MQqX6bnQss1_vPYHj7lB-ypzwecu_Z7WnXMrFSmfuvHcXdcoLa4txr6'
};

export const INITIAL_STORIES: Story[] = [
  {
    id: 'story-user',
    title: 'Your Story',
    authorName: 'Ananya Sharma',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEwNwlJRfoKQVwCvlhhjg1qySi7wEQPyzC1Gll6mTskjJ6ht1Z9TIa2N3AAMjRqRThDk_nAZJM0ZRKtN4VAVzg2iS9prnOmdqk8bWKe7PTB-WzWtUIrWkFhXlxq4odHQvWcN33NiVyUefDLry_T3BQKMVQkDhlGoh0aBJFjylCOQY2miJDrzN5raKoH0giqLM2lObKJ5HhHHtqLHrwzWV8DyuNgDv1fj6oRnMGPe590iQHggkP7RF',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEwNwlJRfoKQVwCvlhhjg1qySi7wEQPyzC1Gll6mTskjJ6ht1Z9TIa2N3AAMjRqRThDk_nAZJM0ZRKtN4VAVzg2iS9prnOmdqk8bWKe7PTB-WzWtUIrWkFhXlxq4odHQvWcN33NiVyUefDLry_T3BQKMVQkDhlGoh0aBJFjylCOQY2miJDrzN5raKoH0giqLM2lObKJ5HhHHtqLHrwzWV8DyuNgDv1fj6oRnMGPe590iQHggkP7RF',
    isUserStory: true,
    caption: 'Sunny afternoons at the central courtyard between lectures ☀️📚'
  },
  {
    id: 'story-council',
    title: 'Council',
    authorName: 'KRMU Student Council',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgfwsaxAUhiuuDwovd7SFO2bsWf0HWYjU7-A0_suUrIlE3pinNQFrHcOnQsePurxZN-2ycUPrYbcTtH0IO8bP9FLKl89LHS1fyXUbCdwnxtKMRoTo-9c_nMpiUc5zzmztr96nhl3YmazSsTKFGLBowYKtmccTVNXw_FFCqShWoziABhGppwTvx_HMHAyodyCH36MQXI_2SRVJWWbIz14LTo1263oaZQObeEH4lJtLcvAgQgokla52_',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgfwsaxAUhiuuDwovd7SFO2bsWf0HWYjU7-A0_suUrIlE3pinNQFrHcOnQsePurxZN-2ycUPrYbcTtH0IO8bP9FLKl89LHS1fyXUbCdwnxtKMRoTo-9c_nMpiUc5zzmztr96nhl3YmazSsTKFGLBowYKtmccTVNXw_FFCqShWoziABhGppwTvx_HMHAyodyCH36MQXI_2SRVJWWbIz14LTo1263oaZQObeEH4lJtLcvAgQgokla52_',
    isVerified: true,
    caption: 'General Assembly meeting minutes will be broadcast on student portal today at 6 PM!'
  },
  {
    id: 'story-tech',
    title: 'Tech Club',
    authorName: 'KRMU Innovation Lab',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwkwvdZRg2z6qK__guXQpxKC2L1xl5BURG2iAcPB_0NZzDvbt8QNPEqSZUvpvlaE4hAtxf_6wLGbrlci6eyv2MPuGSfvUAvxavp7bvMZjooUK7pDSFycB0BiaxXmiWSixVAw7S3M1SGHbceJEeX4MxOBSFQPdRsGRs0ilabCBCo2jG1TV8zaxfKA17Lq8daPeiaoa9JQgqukV0KSwuEwXgxE44WwZEVKIhR6CVI9EplfxbakIz3SDp',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwkwvdZRg2z6qK__guXQpxKC2L1xl5BURG2iAcPB_0NZzDvbt8QNPEqSZUvpvlaE4hAtxf_6wLGbrlci6eyv2MPuGSfvUAvxavp7bvMZjooUK7pDSFycB0BiaxXmiWSixVAw7S3M1SGHbceJEeX4MxOBSFQPdRsGRs0ilabCBCo2jG1TV8zaxfKA17Lq8daPeiaoa9JQgqukV0KSwuEwXgxE44WwZEVKIhR6CVI9EplfxbakIz3SDp',
    caption: 'Hackathon round 2 mentor check-ins kick off in Lab 304! ⚡'
  },
  {
    id: 'story-fest',
    title: 'Cultural Fest',
    authorName: 'KRMU Cultural Society',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoGbyuRXZOA-Ef6hxerPaNYdaOqvb8_uZRXC82hZ0ehOSUk1gKfbUumVYABDL8phCRPQc6omrIS2Di8VSaq741JUcYKPCVAeKxyIEkJZaFF60GxzeFy_F9tixG55qJEycizFceY-BiiF66Pzr8j4SPy-YBomzGhiH7jG-XGJ97-NcN3qOrHwhlyymQlUaVlpA8oxf6dhS3-somEfiGP3IoedfW1PwVYdAfSAJoNosq_IFcNVQ2v4AA',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoGbyuRXZOA-Ef6hxerPaNYdaOqvb8_uZRXC82hZ0ehOSUk1gKfbUumVYABDL8phCRPQc6omrIS2Di8VSaq741JUcYKPCVAeKxyIEkJZaFF60GxzeFy_F9tixG55qJEycizFceY-BiiF66Pzr8j4SPy-YBomzGhiH7jG-XGJ97-NcN3qOrHwhlyymQlUaVlpA8oxf6dhS3-somEfiGP3IoedfW1PwVYdAfSAJoNosq_IFcNVQ2v4AA',
    isLive: true,
    caption: 'Sound check live from Central Amphitheatre stage! The atmosphere is electric! 🎸'
  },
  {
    id: 'story-robotics',
    title: 'Robotics',
    authorName: 'Robotics Lab',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC82kZKZq2dmQuSZwZQf5tr_HdgGufv1qbPn2K7AzpBanck2WWYJWSzE5fJcdLGpttXO6eyjkJERa-CqhMSNrN0QEvV_QSzzmh9yNTIxPDambfy4DC9PLiPx-cODuigoNqljkPl85Hda9CAThwuraYWfw5RqgbbT98WVLay7_bjvRGppEXEs9RgPHv9fj7TMtQjjCUsQX6nQ5kp33zlwv8rAuM8ORj7kB3VXXb_l1-wWaL40zzFvkUX',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC82kZKZq2dmQuSZwZQf5tr_HdgGufv1qbPn2K7AzpBanck2WWYJWSzE5fJcdLGpttXO6eyjkJERa-CqhMSNrN0QEvV_QSzzmh9yNTIxPDambfy4DC9PLiPx-cODuigoNqljkPl85Hda9CAThwuraYWfw5RqgbbT98WVLay7_bjvRGppEXEs9RgPHv9fj7TMtQjjCUsQX6nQ5kp33zlwv8rAuM8ORj7kB3VXXb_l1-wWaL40zzFvkUX',
    caption: 'Indoor autonomous obstacle navigation sprint calibrated successfully! 🤖'
  },
  {
    id: 'story-sports',
    title: 'Sports Club',
    authorName: 'KRMU Athletics',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCAixQrEqY1CcUrl-rgge-7DHAtJDEA3mCoQ5CQVVsX3ukQNFsG4GeIda0aYiMrWadY6iQmvpvR-QX79kgK2Ju7LZbBTHu1basRynWJ7WrJ4K08x2RRm5YcLjPftCTzGLVJ5s486qAt7Hfpn6XrKK4Z8ONS9ACAnR0XG2KKYb_da3E5Pxc5FdT8dWWZIF-mvMba7kdPKPnFaONhZ2RMamtEVTyPQXvN2bbqTXxZDhoWiIPArmNJdyl',
    mediaUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCAixQrEqY1CcUrl-rgge-7DHAtJDEA3mCoQ5CQVVsX3ukQNFsG4GeIda0aYiMrWadY6iQmvpvR-QX79kgK2Ju7LZbBTHu1basRynWJ7WrJ4K08x2RRm5YcLjPftCTzGLVJ5s486qAt7Hfpn6XrKK4Z8ONS9ACAnR0XG2KKYb_da3E5Pxc5FdT8dWWZIF-mvMba7kdPKPnFaONhZ2RMamtEVTyPQXvN2bbqTXxZDhoWiIPArmNJdyl',
    caption: 'Cricket inter-department championship match starts at 4:30 PM today! 🏏'
  }
];

export const INITIAL_PEERS: PeerSuggestion[] = [
  {
    id: 'peer-1',
    name: 'Rhea Kapoor',
    department: 'B.Tech AI & ML',
    mutualCount: 14,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAinQQW6oUdjG6DzMLaWAcsOS0SPAucoqeoKudOYxpqKn1zVy5bl0e1RFAaViiK9HFsLxuXm6GtaaCKtfrzGiF5X8Y7YF2eT3cedtZjUsWiUipiwdb92EfUQMpZswL6t3GTSJURUuQlINYEnR2e5--IM-mavcs_4XlOAB2efJgrAcJMwtdA2tJdsTA6iz4kb1bZv0PBBahNZ8BsrkpAcJcAx5cQgfH2J-zwJH6rtsTMiu3IhV5bMAW',
    isConnected: false
  },
  {
    id: 'peer-2',
    name: 'Kabir Singhania',
    department: 'BBA Fintech',
    mutualCount: 28,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjLRZv996sZHVZZn4OVwGwKkM3a-A6HqZxLJl4twSrdb2lzVDPBo3EFkDgTtmzz1JPnf9AXJDNO2wllfy9ra2Lqo8H2x3kEz-oj5QwRXTRzu8v4c7DdOHvCrL5VoBvthM65nfF7dOyc-8fGD4zIHzRF4aieW39G0A7_li03dRQbAhFWTEVeNET22fmwFqG1JOf-G7-l2Dmr2dMXwZ_HNwcNiKrhDVtcL3W0uoI8PHlqdtF5nirtGRZ',
    isConnected: false
  },
  {
    id: 'peer-3',
    name: 'Ananya Roy',
    department: 'B.Des Fashion',
    mutualCount: 9,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq6rQz0neyutCLx1px-kwxizZ-sYI4Quw6cZLSnycSCL2NdYXA9BflE6sp7mT7fvKdPHCq_Vr_8f2EkkWYxPn5okV6ABWjrH5H7vKPxlnPmxLU9gDgQW0L2fa2Wrc4bW-cSoT8bXXaurotdjqT7IzZDZbeOPysd6MONrpZWp_Dv0SYLDospAd7EoDM_qAwLapAp9yEZ93Dmh-OKYnJGl8GmE9HGVpY4SZ9YFLVi0fHY5MIvYAWEDdX',
    isConnected: false
  }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    author: 'aarav_cse',
    authorName: 'Aarav Mehta',
    authorCohort: "SOET '26",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClSa-QBQ9bGa405Yb11LEIDxg4S5u5lzA3qGfOO5v7mzCxkd83yg1pWMKmYCkRsGK1vWG227JkBG7yU-dihs7PuImEgfxchTn1inJjoxE4b3EPvwWeFeBh7UHj4PBe-s-Hszlqyq_h5hZt1ZqSMtUdyT_HaY0M48B2wCblP_CNUpfkaHinKIZzsfy8jGt1PsU2beYc8bQ6y6fY6qZlil7gsJ_LnPVHiWkMcRmDMF9bGP0ziWWyXlmp',
    location: 'Central Amphitheatre, KRMU Campus',
    timestamp: '2h',
    departmentTag: 'School of Engineering',
    mediaType: 'photo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uPpK-7gHdus0gFO1TzLYHduXQWEK65hQj7Tr4fZ17ECN2j2hYfH48euF93uQcQhy1rCr9tKAfFa8JUJLzkjp5K1Lau-0--P_kXARlkfbJ4cj5q-hmoVkVoRbIwPKmgphDRGRatqXwttDo3UITGJ3tvsdB9MOs4Er2KaESkU7VSa6JKPDzU_1WPM8bpFBbqr8-AFxYclWVw0lj8B55N3Muf4aX0XnKGB7K9kwHBawARg5mIG0kkNV',
    likes: 482,
    isLiked: true,
    isBookmarked: false,
    caption: 'The annual cultural kickoff was surreal! Huge shoutout to the student organizing committee 🎓✨',
    tags: ['#LifeAtKRMU', '#CampusVibes', '#SOETPride'],
    commentsCount: 34,
    comments: [
      {
        id: 'c1',
        author: 'priya_sharma',
        text: 'Loved the drone lighting show! Incredible coordination 🔥',
        timestamp: '1h',
        likes: 12
      },
      {
        id: 'c2',
        author: 'rohan_verma',
        text: 'Best concert night in 4 years of SOET!',
        timestamp: '45m',
        likes: 5
      }
    ]
  },
  {
    id: '2',
    author: 'krmu_official',
    authorName: 'K.R. Mangalam University',
    authorCohort: 'Office of Dean Student Affairs',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8aN3dQdrNcMor6eKeWoAXpjY8pVMp_apHQt0hihEK6bQT8IZ5k51L_yh7KPBxghjHOBSsiYLNXpVVhWiTcoYPioD8Ej0es2rsdukEYd3k9yaN9lxSzXJCkW1-HR8LCwlEXMIA4LNawghxNnamYW91YWS5maLPCgsf3BHSzNne_OblJXPYYYC_lIkp3wt67MQqX6bnQss1_vPYHj7lB-ypzwecu_Z7WnXMrFSmfuvHcXdcoLa4txr6',
    location: 'Office of Dean Student Affairs',
    timestamp: '5h',
    isOfficial: true,
    verified: true,
    mediaType: 'announcement',
    imageUrl: '',
    likes: 1209,
    isLiked: false,
    isBookmarked: true,
    caption: 'Registrations are now officially live for the KRMU National Hackathon 2025! ₹5,00,000 prize pool 🚀 Link in bio to submit abstract. Mentors from top tech giants join us on campus.',
    tags: ['#KRMUHackathon', '#Innovation', '#TechSprint'],
    commentsCount: 88,
    comments: [
      {
        id: 'c2-1',
        author: 'ananya.codes',
        text: 'Our coding society team is submitting tomorrow! Super excited 🚀',
        timestamp: '3h',
        likes: 24
      }
    ],
    announcementData: {
      flagshipLabel: 'Flagship Event',
      prizePool: '₹5,00,000 POOL',
      subTitle: 'K.R. Mangalam University Presents',
      mainTitle: 'NATIONAL\nHACKATHON\n2025',
      description: '36-Hour Prototype Sprint. AI, Web3, MedTech & Smart Campus tracks.',
      status: 'Registrations Closing Soon',
      actionText: 'Apply via Student Portal'
    }
  }
];

export const PROFILE_POSTS = [
  {
    id: 'p-1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm7xkm-dmltR9YjAKIIPA_L-j8W5EWw5Jg15lZTSz6ATvrvSfcpPts7-Znc9f00mSQQA_IZBcaNXOz4zdQ_L3soQ9KrR72M2VRqO7_n6CPhi-LiRw0XIvhK4fMBPx9r3kPkmp94hqq8BquFBm0b-ViAKBNgEQVFawM9VYn91v1ZpSoqMRkeBW8B7KvJ6sY2kYt1otEk9k3UlPA2E0fA9F29cHZwbYTzkepwuDlrZFc3bTkPCijAWSO',
    isMultiPhoto: true,
    title: 'Keynote presentation slide deck on Artificial Intelligence at KRMU annual tech symposium',
    likes: '512'
  },
  {
    id: 'p-2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_9dJeXH6oKSjD1iUSwVriD88o9ka7LpL_6cJWjOAtGnEXyDr_3aNQzZplh060I4z0Ax1ruxNwGfsoj9ji4UmMV6cCcjSe2L1xagblqNgNbTVmrZlR3PTeasQwA6YGT20LT6oj-zLOURldMagWbX0JHy_2qDIPCrPYCOGTcLmcShg510zM-yy7mH0grW4p_ORAc6N8oPQLo5KYAdPkWavl9zXXr_64Q1U4IeMuosQssl9Rp4DUCi3G',
    isVideo: true,
    duration: '0:45',
    title: 'Vibrant campus cafeteria table with Indian university friends sharing masala chai and samosas',
    likes: '840'
  },
  {
    id: 'p-3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC-Ra-UquaAsTkxZW09SRYd6HU3Pc0fTmEs5tC80LAojZT_jZFYI9pvyczctwIaANhDzLg-9C0-JBMnxSlHm8_p84zIZ6HH74MOsChImHUfH3NdP98Rg-tv4vMTY3shopx2SLQOgRuzxHLvbsmzOQfFeb0wa1BRaevWiNOSvN6SH2OV0WXyVxYdx69VCObfvpbakpoyWS80Oi87gQAi9fAsbmk15abtqDeYn7zL_JOzrQ76AQYieDq',
    title: 'Pitching an AI computer vision software project with poster board in faculty seminar hall',
    likes: '690'
  },
  {
    id: 'p-4',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtsA9Uwy5ISNCdcYMeAmtO21FsWRRObXZm1xCQo_GXAX9Em0CdQ9kOzMg213S-UPHpgUNMomANcMUCfwcVfgN3FC_f-d_45Sr0vpKlwIEBuJck8mrhc3l5aVMC7lpM3CAidss72qJDRy51gHSZ6CXbwpROaWKneNlQT3U5YD2y0qNdUwvqJQMVmPQGv46pDezPCE8MK4nKyRs6NrKsL_x-tYhTf6K9OZBFjbMdvB6iq1LLjDh4FuFD',
    isVideo: true,
    duration: '1:20',
    title: 'Inter-college cricket match tournament on lush green sports ground',
    likes: '1.2K'
  },
  {
    id: 'p-5',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfD02qU15C44k2WH8ZPDUG4n_ea_vNfU388IMWnZ6C7LvWJaazbBcOdsuWskZMsSqK5ClqHL7-yIwjRqxwKAOtLXkuRIdYiukfGUZXJ_Tw0lR31z-ZgCHzGXz195bWtd6UYKqsXJGRrc0zekWUaoN-aLbq89pkhGZw5IMVemi7z8M521ZOpwJM2xtfUtqoCUnZcF0m0DjH40DxaRJz3SCtRyRV5ScAo1YF3YausJW1oxIeO3QQ113B',
    title: 'Modern multi-story university central library interior study session',
    likes: '445'
  },
  {
    id: 'p-6',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM106VZ3jmm8_CJOBK37MfKdqKBfyet92uYSMiH_E7U6mVVFO9IYCJvyqgDiUxKrrm8Wjgqd5GPg43hm90nOrOefKzfRm6jT1_1i5PVtwqjgcJ-UmCfYm39HZI6adxzQ0SDR0-MMPtsKj3VVjJuYVHOdH9Uz4gktEAzKGQkvR4Wov_p5to-z2wEm4zptSYYnWElUacpoChOv2kuBpy3WZQHWyIMP6vQV5_23YvQIlbk_SSmXpaEO-m',
    isMultiPhoto: true,
    title: 'Winning university hackathon squad holding golden champion trophy',
    likes: '1.6K'
  },
  {
    id: 'p-7',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHjIKTdpLZvVe1OyjvI3Gv_JMybngYlBx31gDwE5d-6lWwj7v1uJnEX3d9LJtb61y6ILFpefYwbBp7PI93ljI11D0q9gqMGWD5aqSviP9KkUlpIJKh7WvD0Eg7fD5O8DhD5bkffNwkULihCtb8ui7bX0CacHemBe86O33VmY1fODSe6JuoqRJxD2RZrSPrZ2P8q94KtTCVfqEx-l-CrKBdJ21d3HVvp86tsLRCXgV5O2FxkSAEztaQ',
    isVideo: true,
    duration: '0:32',
    title: 'Campus Fest DJ Night with stage lasers and students cheering',
    likes: '920'
  },
  {
    id: 'p-8',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxK3IuODjrlUuqRLUDgoRdl6zLCeFuJo-OYiKEgi8x7wGDyRctyT2ik5imPmFLD5fnWy0C99VpmiqMY0QOrWiO0b7zY88jUq13P6ODpqWmofpVPCOpSd11JlKZ6_cVR86pWvQ_QO9ntTktuKbZBJCJc1gNAUTEQkdjPj3ehLPUmk0hT9kINbM2yYaziqTPIEVLUcDrDdZy6TV7xHZN9c62jrlNNPlQE1qI4RAvQIyqzgeKHVVrgAmm',
    title: 'Mechanical keyboard, dual code monitors with Python algorithms and KRMU lanyard',
    likes: '780'
  },
  {
    id: 'p-9',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYayvfhWvFsTknyFYtUES111HJFnGWHfYhvNif1Ur8N5BwT55LnOeKGHzcjM-8ZmMw4KQeIBP20rj5FR8lsJex8Q8oSlVSRxhEbqGXhe0q8JW2SIuLmn33p_sgJS5YmEs7jGlvn3J3sdtxH0GTTxT0sUrbSAjJ2nUNGNuYOLhBabvRtFJjNF92uqtcQTnNR7cvyWleFS8TCHrGU_92f8_StqdsAXYa4HD2-zmWTYa6bNzWsT0BU0Km',
    title: 'Sunset over K.R. Mangalam University central plaza with fountain silhouette',
    likes: '1.4K'
  }
];

export const PROFILE_REELS = [
  {
    id: 'r-1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhO_hrZjLa0qYvWCyOm6Aw2gOZag42SAVBAOHWqUSDUbFax5caoe1RjJjYBAcJoyFZ49Ez3lxH4vMPeGbwUG3VkFBSocLr9xlsU7xzgb4qiJ8bSphME9QiyS7iU0EmVr2P4hxiQ6BKj6x1yLlo4D1eRI4-4c1ZS3BlYBQCuwhzYYLsOHm50ah2s9c5EmxQFkdoBaLQZGK0Dd9yk8lTcJBFIOrvtnee2u1V1ZPzwc3N8FzbgFIQW_j_',
    views: '2.4k',
    title: 'Day in the life of a CS junior at KRMU 🎒'
  },
  {
    id: 'r-2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnocxAeiV2K5wAHuBQ8AKG22Y43zm8nYRFp29gfDY48dpKAAITNXppJIH9mqsbRZ06r9n4hO4PK9pX7FnAFNzn8uy2U9hQgExl0Vy3HzM87sK8iQZya2qUF_dvGaOIMHcGDMoAMfRXBp_xEkO78BnV-W-Sehw0ahy5W210aTOE3bfKhk6puqkGpaNJ6ksIocAy6XFw0gfqf7-ZrJ7ai_HjV4Mx6yhXX97QEUK3jTtF43wdBXYHCAEr',
    views: '1.8k',
    title: 'Quick algorithmic problem solving trick for tech interviews'
  },
  {
    id: 'r-3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLNMSMLCt7PiAEtjO0DCwDv87j6dWSCvRxFU-jhgvRVa9wFqmqlHv441tLyQ1u25r5cLorGMQuvOVun4_oGJY1DYq74_bPZ7HlLzkrToiBwjOe4E8RjCqMDl5qZV-Ew5F4cPEA9TEsgW6j7C4bJParBspvTTfIZXALclSnW_Jt0t5bhpnsaxh7k8JV43mG62NzSaE-RFFI6b_mBfkZU4BPknjdb7RusfEjUbXVILSz8i-g_vc_hgS1',
    views: '5.1k',
    title: 'Hackathon final 10 seconds countdown cheering!'
  }
];

export const PROFILE_HIGHLIGHTS = [
  {
    id: 'hl-1',
    title: 'Hackathons 🏆',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbK8nfEBZd5h-9kVOGCq97Q1jNzXlStH-Q4TTfPSSiV4ErfOOIh-Q2_RcdujFXyuOCoh1TR8KBXQBxXAgfzzD4sd6cm_GDFngR5I5697_NrR398juLarD12ak3mkvL62JalgmhiI__R2mR-cZEf8fxFj-AkJrPyTQkpkGFYxXXPlzHIbhyD-W_U_D4ZClSKnl4qe9JXMRyMdH2SOG7-1sQJQiHtpzsu7VLeYuZS2EFjc1N-C9Ne4Q'
  },
  {
    id: 'hl-2',
    title: 'Campus Life 🌿',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVWPeFhBx1JbtT0-2mKnGbTmQoPRM6eNWfLgNgiHya2tIrGPs28eaDUbuI3nR9FR8nO8Uj8dMqh8DcPtQH-Z7x-gVynR5LBz51ZMx_4bFMN4xuHjt5Kt0QwH6G0U8yMj_WK3bYPubItPe9Cv_At7BWhpOHhSVxwkJdUp7XfyzcNT2I6KPZHujtx4Twc2q_pQnCMKmGE0zqIFoj0fg3HIHikEqFwnDmedcE1UiXlEWZLBDdcLvFvHFn'
  },
  {
    id: 'hl-3',
    title: 'Projects 💻',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwaNbel6aGqc55QaXQRoWvAp7kp7fue7nR3AsHUJmWGfQs9D2Q8vxBIq7rTCytBLlLCYegcSXOrs5W4hK05ekAVxKR6Qn0mMbtnw_fkiVVChLX7TG11ya4dDq2JKAtgSiCiBpZbCA-mq09-6kVuqvMUI1BX4emjRaEMxpH52sIEnhkRGU_mytyUnO7HexERnfI9xEdByRYINULURW8MJQv4toHJtyhlDHjEZl83t1M471fVXKJ-0vN'
  },
  {
    id: 'hl-4',
    title: 'Rotaract 🤝',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDukWoEVH7XgSy56EvSzNavhQBu5V-uPX54p3ENpxBX6K4DPe1h8NF4o2RvQsipAMYNUOhYnTBqUJzXxSHuTD6LtMJ2DSkRU5QJArgMdJbQ05XObsqQKJee9BOodmtBuqoZwiQSiGrPvrlsbvSpsEoq4KVadWIvg1rapFf7vv8U93T3hzemXhemZ_Nfztgwf5rbwkFhSWZM6Fsl42nqFoXPrancXPL2glLz5FqaBbztDZIEI2Bacd0Z'
  },
  {
    id: 'hl-5',
    title: 'Convocation 🎓',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrXZ-Cxy_zr3cUpOUjspPEtvrqDWEZQeFk8fRMuYwH-CzCtj-Ez6pZg7XtSZlX1Qjn2XmAcTy5otkQooBf-hz1EbzgJs9UYvWcEy9NaG19kcExNeh2nSVH8Umrt26sbZq_56pTB7s2Ba7IwG2xHQTTkcG9JoPKCSzjs1CPqzm0ykX66on0uOG3xNnHMsWT8qx2XsV23bU2xGzH-SLvrGN-OquaSMfMX0AEr1HcrbPGAWF63QM4--fR'
  }
];

export const INITIAL_ALERTS: CampusAlert[] = [
  {
    id: 'alert-1',
    category: 'mentions',
    group: 'today',
    actorName: 'Rohan Verma',
    actorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_EjUPSFJCe8Ct7mgZGVecs4UZxpawnG89poY9eVBLNsiy-WZExLeD82vxChlWHu-h2ve1SQHMxvg5pJ9pYf-PRG4BDLP8N7Mmam8czeqThX8acppoA4pOGlUYq57WMuX7uy7LfQE__Qq0U4_APgk20fPPniILd6LCBWQ4Xr7ZDZQJ4qK2fgDM6Ls8rPh_4udvFBx8TGuozRIz1i9ovrMLwv_k47CHTCYX8ns27kCnOK2cQ9At0C2',
    actionText: 'and 42 others liked your post from',
    location: 'Central Amphitheatre',
    timestamp: '20m ago',
    previewImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkhJdbXrrJ9P17w6fYpk9aNNU1uVLYj_ZW0afItcfYXmsBdDQDG3aH2qDJtZUMNhIC-AXR2bLd14_inTuQIcL4q8VRKnkSYPZAMFAyQUJrFFszfC4BWzdn8UFfeEaKK2cEXH_y976yTCF1jMgxcohjYnRkevqes3yEHxxmN1tbwEHvKiIW6M1YLBZhAnS0XvVoUinKa9axiyS__F-DknkZt7os1QnvBinIPy2anb0Qa0B9mA2olt67',
    isUnread: true,
    badgeType: 'favorite'
  },
  {
    id: 'alert-2',
    category: 'official',
    group: 'today',
    actorName: 'KRMU Placement Cell',
    actorRole: 'Corporate Relations & Career Development Division',
    actionText: 'followed you',
    timestamp: '1h ago',
    isUnread: true,
    badgeType: 'person_add',
    actions: {
      primaryText: 'Follow Back',
      secondaryText: 'Profile',
      primaryIcon: 'person_add'
    }
  },
  {
    id: 'alert-3',
    category: 'mentions',
    group: 'today',
    actorName: 'Prof. Sandeep Gupta',
    actorRole: 'SOET Faculty',
    actorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqsJOAc0TYlQr8EF-pQKLUFWd9NqZzmU7zx-kts8OidTrTE838SoRplglf6Vvm3a-xtXBwtZc-WSCcAdg6F7dC8zDgTc6ZoCYF17c0azayilxlD3JM8OYk3rg0CLshGo7we2qizPzrZsWouUqrJFptcs7Kr9r2KF31PsOHojcTJqrt5IY-s0MO6xPeP3JQnuouHz9qSI6F9YPljtniZatn0YgD0KITEyhuQGHTPIJNbpbs8jhr1ztj',
    actionText: 'commented on your project post:',
    commentQuote: '“Excellent work on the neural net demo! Submit this for the upcoming IEEE student symposium.”',
    timestamp: '2h ago',
    isUnread: true,
    badgeType: 'chat_bubble',
    actions: {
      primaryText: 'Reply',
      secondaryText: 'View Post'
    }
  },
  {
    id: 'alert-4',
    category: 'official',
    group: 'campus',
    actorName: 'KRMU Registrar',
    actorRole: 'Office of Academic Affairs',
    actionText: 'Mid-term examination schedule released on the student portal',
    highlightText: 'Hall tickets will be accessible via ERP login starting Friday 5:00 PM.',
    timestamp: '4h ago',
    isUnread: false,
    badgeType: 'announcement',
    actions: {
      primaryText: 'Download PDF',
      secondaryText: 'Exam Details',
      primaryIcon: 'download'
    }
  },
  {
    id: 'alert-5',
    category: 'mentions',
    group: 'campus',
    actorName: 'E-Cell KRMU',
    actorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqg1RS90AJXAVg4eOQe7RHVOu0CA-4kZnctBeLjjPMSckzpaUSS3fnHXZFI26M-AwB4Svp6T4f9V5TKEgd1yrzVuMb-LlWdwHlJmrG6qbuGWJynirw_YnY7jBIBXgOHGP_5WkPw3IKpNFngoXFc_aS-DNWX6sVgYQz3ZWcQufCJoY6m3-fwfQb1b17Wz1XKDHjgPH6ag7AYT0Jne6wJ7TxxEybVcIjDO73xGY8YGwqH8jcuYjH-IAx',
    actionText: 'tagged you in a story:',
    commentQuote: '“Meet the startup founders panel”',
    previewImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxyp2YpNP-wqIUO27-Gt2712ZHunAYJiuu5-FFHA9qggZRG719ewNOFYLn_DmlwJMch85ILaHalKJIOqnaRzGUCKotIWNHFhbtn67WQFHGMHtZp3FyaDbHYPZI7zcyteCa3vlfC35Kj6bGJRZS6sG-dxWOha8ClX1UhnkAlHqAb4OpV9ykxKUy9SJmHXBGYnnp5lR_EMZgPO098_UHe4nJS_7Dlaj0kw6pic4YbArdupU1Afh3jz5x',
    timestamp: '5h ago',
    isUnread: false,
    badgeType: 'loyalty',
    actions: {
      primaryText: 'View Story',
      secondaryText: 'RSVP'
    }
  },
  {
    id: 'alert-6',
    category: 'mentions',
    group: 'week',
    actorName: 'Kavita Singh',
    actorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD__WjMGiyzusxZxUAFt9EQFub5JqiT2zOrh6eel1Ry2L8BbAHYl_hGP4I1r2pwlt_pM9Zkntu6ECB_qR0Kf9QBIGIPF27KCbgB6L_-SJ1QqQhFpJyIkQc5zyg_yXfpPHoChhAXNOrbv34PUlQNheCfQajKyHSoNNNXrJNWxzJqshUPfnl-EbJ2mhttLhj-WYCCjg9NIxz9hPvZmsbR9ovuvjxsAAmrSt0V_pxhwWHn9joXj7O4zLH4',
    actionText: 'shared your campus hackathon reel',
    highlightText: 'Shared to SOET Department Channel & 3 groups',
    previewImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrsKzB5TpT6anFEJEqDNw66bjt913R2bJOLITliMpmyJ92JRTJS56gzSgqnOJoLFI61FNXu6NXONVV3XFcommHTtBbghpuAiajC-F-Yny4xzYqIrVYPdTl3C1vJWvr30oanRaSxDUCrGqecKaQJz4Mk9RUbofksf-a7FEJP1H29e_OS8nhkjBo7kb6bokXDrx5FDy3p1UEG1PHeGYTUcyxFr1DVGFi7GM7FwXQnoq4G00gOjZr7ydH',
    timestamp: '2d ago',
    isUnread: false,
    badgeType: 'share',
    actions: {
      primaryText: 'Say Thanks'
    }
  },
  {
    id: 'alert-7',
    category: 'official',
    group: 'week',
    actorName: 'Audition Reminder',
    actorRole: 'Campus Culture',
    actionText: 'Reminder: KRMU Cultural Fest auditions start tomorrow at 10 AM at Audi 2',
    timestamp: '3d ago',
    isUnread: false,
    badgeType: 'event',
    actions: {
      primaryText: 'Add to Calendar',
      secondaryText: 'Directions'
    }
  }
];

export const EXPLORE_TILES: ExploreTile[] = [
  {
    id: 'ex-1',
    type: 'tall-reel',
    title: 'Autonomous rover obstacle demo! #RoboticsKRMT',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChb_6S-JaSkTodjMw5k50Ta-A-Q1xrxCjORp30T-_vTA3-Ow8stoJjTwNJHBscppxGbL_SDzNJoOQo9bL-K0ORXNDrZELrBvJ66YmghaOJ3UkqKHAIFBQfMwuPBC_4uKb4XLrfefcuG44aVJSMUihEkW9lpwx4kCn5dQTpp6-qQoPv6_dQbn5BTMuLNaxrsTGrqG7rljVrXxyNgwjjXxlA70Xg2nwBSIXIPbygWLDK5f4lt7wuHWZi',
    views: '45.1K',
    likes: '3.2K',
    comments: '248',
    badge: 'SOET LAB',
    badgeColor: 'bg-[#b80938]',
    category: 'tech'
  },
  {
    id: 'ex-2',
    type: 'square',
    title: 'Wide dynamic aerial drone photography of campus quad',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Jxr8_3dzRSDHh05Ye8FfhZSQoLcWQuhJ8F51Gp2gVjsUdg5KtOdh0q1yclXx8-fbfuo2hx0M91f6y0cnfBUVDkMHO_axsxA8ydxTqlCbncpUgCeujhK03X9Ay7Rkdd9wXubI7Z-NQYwQNO8Cb6pMFzFg6w3Wjt5kC4KQYBl57veKmLQ33it7xjLQx-8u4BM3_zE_tGW9KrSaod9-Ka8bPkOOqIQRgS2G-10FKD7Qq4hW-vyZFgUl',
    likes: '1.8K',
    hasCollectionBadge: true,
    category: 'life'
  },
  {
    id: 'ex-3',
    type: 'square',
    title: 'Solemn moot court hall at School of Law',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFT0WwpJ5BqvgU-XewIVTjIJoABGJeOQc4tSbT-YR7MUV5Go7QAoqYLj8gWVabUwD3XJe7BJUbR9tcNb69YITKrUx_PYchX1vmp8WooPM2HM6cwaxR3B_Esa6IOj4KB8JOI8rq12VH1XPT7y1-exE7GFQvKsG7ICcdnxQXO5bMODq8kGEXXAcOHV0ErmsrANWTSyT2bfFcTg24GoiMF2ZelNCrtAoAvbBTMqtezUWRqGtyhjOnGJRu',
    badge: 'SOL',
    badgeColor: 'bg-[#131b2e]/80',
    likes: '942',
    category: 'life'
  },
  {
    id: 'ex-4',
    type: 'square',
    title: 'Vibrant campus coffee shop Red Cafe hangout',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOty8yCeFpLMtNrQOhRtTGu9DXDqj1VzQXX9OIfzkkX-3_ob5XR6c2CodQanoun8nDspWmLlhdIlAx-kPo1iTCS2oUNZtVPqg9mnls9ajw0LGqF2UdTezGBLsl_lAdqthHxTelGcNN1U-hEFiGM0Jgu8AAo8Gliw3UK_5QvAKbpNYTcoS-v8js8pkUxYZYOOhZ2VUMSw_rXo6f5FK9yLrCCorZaN-qUV3xscVJ72Qg7y9O9LQ8l-K5',
    location: 'Red Cafe',
    likes: '2.1K',
    category: 'life'
  },
  {
    id: 'ex-5',
    type: 'square',
    title: 'Silent study session in grand library mezzanine',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYDjSPe3uu4RNbNFUR555qnVlNJQui2l_rnfjbUjk8DDR8NI3yN2GeyKKLxNJ_J3QHqMctWoi0sr4WLQvFQ3NGpQgXCNulua4ThL8eRFUYLwDZ_rTTiMUDC9WZWlzPENpDAcAkPzApHJVhvkkPbZLb138g8iJDqOcqOP-m9uw-bXIYcXhaGhRwkf8TlKPgArCgql6nLBGkjyzIhgVNnFCkSe91i8IwDiaLIejFXi1m62eoDkmYnYdQ',
    likes: '765',
    category: 'life'
  },
  {
    id: 'ex-6',
    type: 'square',
    title: 'Fashion & Design student showcase runway',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8o6jOKJJmzgLrbvwpKNqdWhj9ttehiODQ4FIU0cJ8iN41Vq30AVuqjTnVVC8-uftOZB3XmzNSRV2dEQHdqLM-thnszVZJQzu_TIOVjBDMtPRHEUbDNyNVWvFf4DJk_7hwu0NRgKQK_MwNKyXY227Xqt0Cx_dIVTz4hunqKB_4qtnox7I3a4QkdKI4lWRDUqVJbQLSRUJ3v99ZWWgp_q_HWA6RICZgyJMQhtlI8UIhaQGzb77weWf1',
    hasCollectionBadge: true,
    likes: '1.4K',
    category: 'cult'
  },
  {
    id: 'ex-7',
    type: 'square',
    title: 'Inter-University Cup Football Tournament match',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATD9ASUbPrWOJ4XYfVbIgbv1T-y7xW0t21VfQhEsNsWROaluemXfuaamyKFXKWVKm08BujO6Pt8N9MxeajgJOW1wPqIzY0zq9nDeiCFdTlHH-uwrnLCynWehLapADuLhyCnE0cbu0P0WVpwR3HgFQ1tfaPiOkMrykULIdjEwSZcNXWVx_bWmnwHEyOcbfqM5sXm2TyvlkxV71srqDZp8W6w-x51QEza8keWI5Ku33Au8zAZ-3Clz72',
    badge: 'GOAL!',
    badgeColor: 'bg-[#b80938]',
    likes: '3.9K',
    category: 'sports'
  },
  {
    id: 'ex-8',
    type: 'tall-reel',
    title: 'Annual Fest Cypher Finals 🔥 wait for the drop!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA52dFjkBFHPfAnmkigipQvFPRWOucGtQbS1D5ytop4b6jz9qWW73y9yaArA6wNLkWtx4IYDrvgyhxOz9Fe4YTQaVXMsHNPaHpj03bMKIjjdYykoH51QxihYbTj0_bgK9uSDjrCF0Ug01gGO3yt5pdpgb6s46p-shndzcn_YLj0uNbF8QTxxOHTJnfDTMK6URpuNJdiE2OTPkywPi1V_-gswqYj2hHtveeA4E4yYa-9S4_IImylST9Q',
    views: '12.4K',
    likes: '4.1K',
    comments: '182',
    badge: 'NATRAJ CREW',
    badgeColor: 'bg-[#ffddb8] text-[#2a1700]',
    category: 'cult'
  },
  {
    id: 'ex-9',
    type: 'square',
    title: 'Biotech microscopy cellular fluorescence slide research',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaH-zbfRypRX_amoJ6SN0ULm2go0omVusPJieEwT0w_EO41MzwAPsbjS99WrbJuLXBQ-IAbfjOe4-tsRRGsLDUGgbrK1z1JZ78JTHf2g6B9Paqs5jJ5KEGq3q9VVH1jcukpGrpn9qNGctbEyCJWJXv7RsEOxwGxNMjBhAhnymnCtjDOGiwNPp1TpqAfcdLFxwKRc7z7KaP-hAQLYo5JAjXPT4aJBSwjQ8zc7VPpxge7jjh6mVWafjx',
    badge: '#Research',
    badgeColor: 'bg-white/90 text-[#0b1c30]',
    likes: '520',
    category: 'stem'
  },
  {
    id: 'ex-10',
    type: 'square',
    title: 'Rock Band campus fest stage rehearsal jam',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0axiqkwFqtHV9Tike3fbEHFkjFGng0le-BnRpBxBKnS4D3vDtYygxZhZ-nNYHxcDtcsum3tBWFggFAJkw0zD91wsWurQHmOeSIjOEfHmC0UudJ6T1rbdM8cTc-MRiR6kHFgJtJCbllSFIPL1DiJgr6yQ_6S_5kA8GvSx6NLxJn2QYgn-slUc-YIzVZMlkPQrzARQQ_P49R59qUAr_p9Au1RRodAwL1jodm4uQF5TeOwYbEifFm58n',
    hasAudioBadge: true,
    likes: '1.1K',
    category: 'cult'
  }
];

export const CAMPUS_CREATORS: CreatorSuggestion[] = [
  {
    id: 'cr-1',
    name: 'Aanya Sharma',
    department: 'SOET',
    role: 'AI Club Pres',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4wOv7cUer5apxuz5b6A6FwECoaZli2B0r8uP0GGb-Q2AZB8zQtJYo8wD8MQaV0QHY1kUq-eV-SLNsWpekj4ErNxy0bVsCVfTBhuMttYlhXWPSvC8L_tP9xYpqL12cNFcxF50AE1cH34WU1T8HE-5TWRle3tR-Sgqc5Me2GFXeNohdwW2BeYUY4-VddDP3QaYxzOOa7Lg7LKlMDhA7nM0MyyhZijP1_dnNvDtsklZcN0b1WjbM_NFG',
    isVerified: true,
    isFollowing: false
  },
  {
    id: 'cr-2',
    name: 'Rohan Verma',
    department: 'SOMC',
    role: 'Track & Field',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLUbmqauFakRAg6csrWu52lOdekntyDyvWpe9UuJ0hh95F0nxNFhXWKGe5g310mGum366TUoTy2BkzpLeIPVv4Pv14vBs6Ln4rMQv5sRUovxVfZv7Rl88GZf1dNF2qhlAHiA-GnrTDey6GJpOGbsdAZv_-2e_OpOqu1rOPPHwW1MVLhyVgnHoZf_aA3854WDLTXA_o7UFGTW9ydsOzIalx1ZzahOuQ4Q3cAROY7nF-bprObYNks4Sv',
    isSports: true,
    isFollowing: false
  },
  {
    id: 'cr-3',
    name: 'KRMT Robotics',
    department: 'Official',
    role: 'Official Society',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGGcZZhe91Rolx13UTOpuKxfwuIJ5ALYQ_ssH55ICfgkSf0_M42GcEqeeaQvGinYe9P8f1eGSRQtu7ZqS066qPLRVYn_1PPojxw0SmrOKKEuObx99pwenuPgkZi8tlLdnjIGyo7YEIscroQTK7X0OFwnGc9C3rZfTr99plvNCiKNqLrhsfveTFqR53D6OLBfu_80gdQP2yco4tEx4DKjFpG1HWDAMqBoX-39r064zJCDvBaQdAPLW',
    isVerified: true,
    actionLabel: 'Join',
    isFollowing: false
  },
  {
    id: 'cr-4',
    name: 'Dia Sen',
    department: 'SOAD',
    role: 'Visual Arts',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5bThidcsfE9fk4vHN6VxWqmzA9QOCUVaB_yhboyNTX8Yavh0BX5S2hWs4-_6fk4vJDfN0yrL33wRZybCiZ_-ahgF36sc-8JonrZxFYqyKL7ia29Hu4QIlA7gb5kOBCn3ps0qC9o4jL8HOltx7hjxO6AVyh6P5KBnobE8oy76T6Bsesl7zMwi16XNk2OWnbRlMidIkWZvQK9ijpsb65Hg6u80lNT7cSaIZ9q59nxULX5js_TwwRkmx',
    isFollowing: false
  }
];

export const DIRECT_MESSAGES = [
  {
    id: 'dm-1',
    user: 'Rohan Verma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_EjUPSFJCe8Ct7mgZGVecs4UZxpawnG89poY9eVBLNsiy-WZExLeD82vxChlWHu-h2ve1SQHMxvg5pJ9pYf-PRG4BDLP8N7Mmam8czeqThX8acppoA4pOGlUYq57WMuX7uy7LfQE__Qq0U4_APgk20fPPniILd6LCBWQ4Xr7ZDZQJ4qK2fgDM6Ls8rPh_4udvFBx8TGuozRIz1i9ovrMLwv_k47CHTCYX8ns27kCnOK2cQ9At0C2',
    lastMessage: 'Are we practicing in Audi 2 at 5 PM today?',
    time: '12m ago',
    unread: true
  },
  {
    id: 'dm-2',
    user: 'Prof. Sandeep Gupta',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqsJOAc0TYlQr8EF-pQKLUFWd9NqZzmU7zx-kts8OidTrTE838SoRplglf6Vvm3a-xtXBwtZc-WSCcAdg6F7dC8zDgTc6ZoCYF17c0azayilxlD3JM8OYk3rg0CLshGo7we2qizPzrZsWouUqrJFptcs7Kr9r2KF31PsOHojcTJqrt5IY-s0MO6xPeP3JQnuouHz9qSI6F9YPljtniZatn0YgD0KITEyhuQGHTPIJNbpbs8jhr1ztj',
    lastMessage: 'Please bring the neural net draft to my office tomorrow.',
    time: '2h ago',
    unread: true
  },
  {
    id: 'dm-3',
    user: 'E-Cell Coordination',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqg1RS90AJXAVg4eOQe7RHVOu0CA-4kZnctBeLjjPMSckzpaUSS3fnHXZFI26M-AwB4Svp6T4f9V5TKEgd1yrzVuMb-LlWdwHlJmrG6qbuGWJynirw_YnY7jBIBXgOHGP_5WkPw3IKpNFngoXFc_aS-DNWX6sVgYQz3ZWcQufCJoY6m3-fwfQb1b17Wz1XKDHjgPH6ag7AYT0Jne6wJ7TxxEybVcIjDO73xGY8YGwqH8jcuYjH-IAx',
    lastMessage: 'Your abstract has been forwarded to the jury panel.',
    time: '5h ago',
    unread: true
  }
];

export const PEER_SUGGESTIONS = INITIAL_PEERS;
export const CAMPUS_ALERTS = INITIAL_ALERTS;
