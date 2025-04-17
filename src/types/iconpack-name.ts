const arrayIconName = [
  "arrow-left",
  "arrow-right",
  "cardholder",
  "caret-double-left",
  "caret-double-right",
  "caret-down",
  "caret-up",
  "caret-left",
  "caret-right",
  "eye-slash",
  "eye",
  "facebook",
  "finger-print",
  "instagram",
  "mail",
  "smiley",
  "twitter",
  "success",
  "error",
  "bell-ringing",
  "close",
  "user",
  "key",
  "fingerprint",
  "newspaper-clipping",
  "timer",
  "calendar",
  "house",
  "suitcase",
  "gearsix",
  "cat",
  "brain",
  "add-user",
  "briefcase",
  "radio-active",
  "food",
  "education",
  "entertaiment",
  "shopping",
  "dots_three_vertical",
  "airplay",
  "download",
  "headphone",
  "heart",
  "receipt",
  "search",
  "plus",
  "minus",
  "camera",
  "chat",
  "podcasts",
  "scan",
  "bookmark",
  "bookmarks",
  "upload",
  "share-network",
  "popcorn",
  "envelope",
  "crown",
  "chat-circle",
  "article",
  "notification",
  "check",
  "play-circle",
  "chat-bubble",
  "dot-six",
  "half-star",
  "outline-star",
  "star",
  "house-fill",
  "heart-fill",
  "lightning",
  "user-four",
  "circles-four",
  "dots-six-vertical",
  "bell",
  "calendar-check",
  "pencil",
] as const;

type NameIcon = (typeof arrayIconName)[number];
export type { NameIcon };
