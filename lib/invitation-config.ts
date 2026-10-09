export const invitationConfig = {
  company: {
    name: "Access Solution",
    logoText: "AS",
  },
  event: {
    title: "A New Beginning",
    titleLines: ["A New", "Beginning"],
    occasions: "Dua-e-Khair / Opening / Get-Together",
    ceremonyLabel: "The Gathering",
    welcomeMessage: "Join us for Dua-e-Khair, the opening of our office, and a warm get-together as we begin this new chapter. Your prayers and presence would mean so much to us.",
    description: "You are cordially invited to Access Solution for Dua-e-Khair, our office opening, and a get-together to celebrate a new beginning.",
    dateLabel: "9 October 2026",
    dateISO: "2026-10-09T17:30:00+05:00",
    time: "5:30 PM",
    venue: "Access Solution Office",
    address: "E, Block, Block E Phase 1 Johar Town, Lahore, 54000",
    timezone: "Asia/Karachi",
    locationUrl: "https://www.google.com/maps/place/Access+Solution/data=!4m2!3m1!1s0x0:0x2b8a78d8547b0e1b?sa=X&ved=1t:2428&ictx=111",
    contactNumber: "03299966558",
  },
  gallery: [
    { src: "/office/workspace.jpg", title: "Our Workspace", alt: "Access Solution's shared workspace with a long marble-pattern desk and black office chairs", width: 1600, height: 900 },
    { src: "/office/meeting-room.jpg", title: "The Meeting Room", alt: "Access Solution's meeting room with a conference table, leather chairs, and warm wall lighting", width: 1600, height: 900 },
    { src: "/office/team-space.jpg", title: "Room to Grow", alt: "Access Solution's team office with shared desks and framed motivational artwork", width: 1600, height: 900 },
    { src: "/office/creative-space.jpg", title: "Where Ideas Begin", alt: "Access Solution's office desks beneath orange motivational posters on a dark feature wall", width: 1600, height: 900 },
  ],
};

export type InvitationConfig = typeof invitationConfig;
