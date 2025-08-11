window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.jpg",
    roles: [
      "Gamer",
    ],
  },
  roles: {
    Gamer: '<i class="fas fa-gamepad"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "238684978425102336",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Discord", url: "https://discord.com/users/238684978425102336", icon: "discord" },
    { name: "Steam", url: "https://steamcommunity.com/profiles/76561199341238302", icon: "steam" },
    { name: "Instagram", url: "https://www.instagram.com/5_co/", icon: "instagram" },
  ],
};