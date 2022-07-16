
// Demo
export const project = 'hanisfadzil_spW7h1guWOh0DctRpkvFreI1zLq2';
export const wishlistDoc = "hanisfadzil";
export const projectTitle = 'Hanis & Fadzil';


export const fireStore = {
    collection: "infos",
    doc: project === "demo" ? "_demo" : project
};

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
    { value: 'Hadir', class: 'is-success', faIcon: 'smile-wink' },
    // { value: 'Maybe', class: 'is-link', faIcon: 'meh' },
    { value: 'Tidak Hadir', class: 'is-warning', faIcon: 'frown', hidePax: true },
];

export const userData = require(`./_infos/client.json`);

export const cfg = {
    name: project,
    title: "Walimatulurus - " + projectTitle,
}