
// Demo
export const project = 'fadzilhanis';
export const wishlistDoc = "hanisfadzil";
export const projectTitle = 'Hanis & Fadzil';

export const allowedEmails = [
  "fadziljusri@gmail.com",
  "nurhanismohdshukri@gmail.com"
]

export const fireStore = {
  collection: "infos",
  doc: project === "demo" ? "_demo" : project
};

export const fireStoreProtected = {
  collection: "infos_protected",
  doc: project === "demo" ? "_demo" : project
}

export const fireStoreWishlist = {
  collection: "wishlist",
  doc: project === "demo" ? "_demo" : wishlistDoc
};

export const themes = [
  "baby-blue-floral",
  "leaves",
  "wine",
  "vector-pink",
  "classic",
  "rose",
  "autumn",
  "tropical",
  "flora",
  "brush",
  "blush",
  "elegant",
  "lavender"
];

export const rsvpOptions = [
  { value: 'Going', class: 'is-success', faIcon: 'smile-wink' },
  { value: 'Not Going', class: 'is-warning', faIcon: 'frown', hidePax: true },
];

export const rsvpMaxPax = 4;

export const userData = require(`./_infos/client.json`);

export const cfg = {
  name: project,
  title: "Walimatulurus - " + projectTitle,
}