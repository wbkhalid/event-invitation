export const invitationConfig = {
  company: {
    name: "Access Solution",
    logoText: "AS",
    logoSrc: "/brand/access-solution-logo-transparent.png",
  },
  event: {
    title: "A New Beginning",
    titleLines: ["A New", "Beginning"],
    occasions: "Opening / Get-Together",
    ceremonyLabel: "The Gathering",
    welcomeMessage: "Join us for the opening of our office and a warm get-together as we begin this new chapter. Your presence would mean so much to us.",
    description: "You are cordially invited to Access Solution for our office opening and a get-together to celebrate a new beginning.",
    dateLabel: "10 October 2026",
    dateISO: "2026-10-10T20:00:00+05:00",
    time: "8:00 PM",
    venue: "Access Solution Office",
    address: "E, Block, Block E Phase 1 Johar Town, Lahore, 54000",
    timezone: "Asia/Karachi",
    locationUrl: "https://www.google.com/maps/place/Access+Solution/data=!4m2!3m1!1s0x0:0x2b8a78d8547b0e1b?sa=X&ved=1t:2428&ictx=111",
    contactNumber: "03067660000",
  },
  gallery: [
    { src: "/office/workspace-v2.jpg", title: "Our Workspace", alt: "Access Solution's shared workspace with divided marble-pattern desks and black office chairs", width: 3024, height: 4032 },
    { src: "/office/meeting-room-v2.jpg", title: "The Meeting Room", alt: "Access Solution's meeting room with a conference table, plants, leather chairs, and warm wall lighting", width: 3120, height: 4160 },
    { src: "/office/team-space.jpg", title: "Room to Grow", alt: "Access Solution's team office with shared desks and framed motivational artwork", width: 1600, height: 900 },
    { src: "/office/creative-space.jpg", title: "Where Ideas Begin", alt: "Access Solution's office desks beneath orange motivational posters on a dark feature wall", width: 1600, height: 900 },
  ],
};

export type InvitationConfig = typeof invitationConfig;
