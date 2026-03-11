export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  hero: string;
  intro: string;
  keywords: string[];
  sections: Array<{
    title: string;
    body: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenjigsawmaster.com";

export const siteConfig = {
  name: "Zen Jigsaw Master Online",
  brandLine: "A calm browser puzzle room built for long, low-stress sessions.",
  description:
    "Play Zen Jigsaw Master online for free in your browser. Enjoy a relaxing jigsaw puzzle game with fullscreen support, mobile play, and no download.",
  shortDescription:
    "Play Zen Jigsaw Master online in a simple browser-first puzzle site.",
  siteUrl: rawSiteUrl.replace(/\/$/, ""),
  socialImage: "/images/zen-jigsaw-master-cover.png",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  tallyContactFormUrl: process.env.NEXT_PUBLIC_TALLY_CONTACT_FORM_URL || "",
  themeColor: "#efe5d2",
  game: {
    title: "Zen Jigsaw Master",
    tagline: "A slow, soothing jigsaw browser game built around focus instead of frenzy.",
    embedUrl:
      "https://html5.gamemonetize.co/5txu5m2xxe8oxgzghnvbwyas8u76t3lv/",
    externalUrl: "https://gamemonetize.com/zen-jigsaw-master-game",
    genre: ["Puzzle", "Jigsaw", "Relaxing", "Single Player"],
    devices: ["Desktop Browser", "Mobile Browser", "Tablet"],
    developer: "AlexMyaklov",
    features: [
      "No download required",
      "Simple mouse or touch controls",
      "Nature-inspired puzzle scenes",
      "Short, replayable focus sessions",
    ],
    profile: [
      { label: "Play style", value: "Single-player calming puzzle" },
      { label: "Best for", value: "Quiet breaks and low-pressure play" },
      { label: "Controls", value: "Mouse, trackpad, or touch" },
      { label: "Session length", value: "5 to 15 minutes" },
    ],
  },
  metaKeywords: [
    "zen jigsaw master",
    "play zen jigsaw master",
    "zen jigsaw master mobile",
    "zen jigsaw master fullscreen",
  ],
  keywordCluster: [
    "zen jigsaw master",
    "play zen jigsaw master online",
    "zen jigsaw master game",
    "zen jigsaw master fullscreen",
    "zen jigsaw master mobile",
    "zen jigsaw master no download",
    "relaxing jigsaw puzzle game",
    "calm puzzle game online",
    "browser jigsaw game",
    "peaceful picture puzzle",
  ],
  quickLinks: [
    {
      href: "/guides/zen-jigsaw-master-fullscreen",
      label: "Zen Jigsaw Master fullscreen",
      note: "For uninterrupted desktop play.",
    },
    {
      href: "/guides/zen-jigsaw-master-mobile",
      label: "Zen Jigsaw Master mobile",
      note: "Touch-first advice for phones and tablets.",
    },
    {
      href: "/guides/zen-jigsaw-master-no-download",
      label: "Zen Jigsaw Master no download",
      note: "Fast browser access without installs.",
    },
    {
      href: "/guides/zen-jigsaw-master-tips",
      label: "Zen Jigsaw Master tips",
      note: "Gentle strategy ideas for smoother sessions.",
    },
  ],
};

export const guidePages: GuidePage[] = [
  {
    slug: "zen-jigsaw-master-fullscreen",
    title: "How to Play Zen Jigsaw Master in Fullscreen",
    description:
      "Learn how to play Zen Jigsaw Master in fullscreen for a larger board, fewer distractions, and a more comfortable puzzle session.",
    hero: "Play Zen Jigsaw Master in fullscreen for a more gallery-like puzzle session.",
    intro:
      "If you want Zen Jigsaw Master to feel more immersive on desktop, fullscreen mode is the best setup. This guide explains how to get a larger board, reduce distractions, and keep the puzzle session comfortable.",
    keywords: [
      "zen jigsaw master fullscreen",
      "zen jigsaw master full screen",
      "play zen jigsaw master fullscreen",
    ],
    sections: [
      {
        title: "Why fullscreen fits this game",
        body: [
          "Zen Jigsaw Master is built around quiet concentration. Unlike arcade games that need rapid reactions, this one rewards visual scanning, pattern memory, and gentle progress. A larger view gives each piece more breathing room and helps the artwork feel intentional.",
          "Fullscreen mode also reduces the stop-start feeling that browser games often have. Once the interface chrome disappears, the game becomes easier to treat as a focused ritual: choose a puzzle, settle your eyes, and move piece by piece without bouncing between tabs.",
        ],
      },
      {
        title: "Best setup on desktop",
        body: [
          "Use a laptop or monitor in landscape mode and start with your browser zoom at 100 percent. This keeps drag distance predictable and prevents the board from feeling cramped. If your mouse is very sensitive, slow it slightly so fine piece placement feels calmer.",
          "When you play on a larger screen, keep one short break between puzzles instead of multitasking during the same session. That rhythm matches the game's relaxed tone and makes the next board feel fresh rather than repetitive.",
        ],
      },
      {
        title: "Common fullscreen issues",
        body: [
          "If fullscreen does not trigger right away, click once inside the page first and then use the fullscreen button again. Some browsers require a direct user interaction before opening immersive mode.",
          "If the puzzle looks soft or stretched, leave fullscreen and refresh the embedded frame. Most layout glitches come from the browser remembering an old viewport size, not from the game itself.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Zen Jigsaw Master work better in fullscreen?",
        answer:
          "Yes. A larger play area makes the pieces easier to inspect and gives the artwork more room, which suits the game's slow and relaxing pace.",
      },
      {
        question: "Can I use browser fullscreen on a laptop trackpad?",
        answer:
          "Yes. The game remains playable with a trackpad, though many players prefer a mouse for more precise dragging during larger puzzles.",
      },
    ],
  },
  {
    slug: "zen-jigsaw-master-mobile",
    title: "How to Play Zen Jigsaw Master on Mobile",
    description:
      "Play Zen Jigsaw Master on mobile with better touch controls, landscape mode, and simple setup tips for phones and tablets.",
    hero: "Zen Jigsaw Master mobile play works best when you lean into short, touch-first sessions.",
    intro:
      "If you want to play Zen Jigsaw Master on a phone or tablet, this guide explains the best setup, orientation, and touch habits for smoother mobile sessions.",
    keywords: [
      "zen jigsaw master mobile",
      "play zen jigsaw master on phone",
      "zen jigsaw master touch controls",
    ],
    sections: [
      {
        title: "Phone or tablet?",
        body: [
          "Phones are great for quick puzzle resets during a commute, coffee break, or waiting room. The smaller screen encourages shorter sessions, which matches the game's low-pressure style. Tablets feel better if you want to finish more complex boards in one sitting.",
          "If you switch between devices, treat mobile as the lighter version of the experience. Use it for casual momentum, then return to a larger screen when you want the board to breathe.",
        ],
      },
      {
        title: "Touch habits that make the game easier",
        body: [
          "Hold the device steady before dragging a piece. On touch screens, the first half second matters more than speed. A clean initial grab reduces small corrections and makes the board feel more predictable.",
          "Landscape orientation usually gives Zen Jigsaw Master the best balance between board width and piece tray visibility. If your browser shows too much chrome in portrait mode, rotate the device before starting a new puzzle.",
        ],
      },
      {
        title: "Battery and browser comfort",
        body: [
          "Lower your brightness a little during longer sessions. Puzzle games do not need maximum brightness, and a softer screen matches the calming tone of the artwork.",
          "If the embedded page pauses after switching apps, simply reload and resume a fresh round. Because the game is no-download and lightweight, getting back in is usually faster than troubleshooting browser memory behavior.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Zen Jigsaw Master good on mobile?",
        answer:
          "Yes. Its slow pace and touch-friendly dragging make it more mobile-friendly than most fast arcade browser games.",
      },
      {
        question: "Should I use portrait or landscape mode?",
        answer:
          "Landscape is usually better because it gives the puzzle board and loose pieces more horizontal space.",
      },
    ],
  },
  {
    slug: "zen-jigsaw-master-no-download",
    title: "Play Zen Jigsaw Master with No Download",
    description:
      "Play Zen Jigsaw Master with no download or install. Open the browser page and start a relaxing puzzle session right away.",
    hero: "Zen Jigsaw Master no download play is one of the strongest reasons to build a dedicated landing page for it.",
    intro:
      "If you want Zen Jigsaw Master without downloads, installs, or signups, browser play is the simplest route. This guide focuses on instant access and what to expect from the no-download version.",
    keywords: [
      "zen jigsaw master no download",
      "play zen jigsaw master online free",
      "browser jigsaw game no install",
    ],
    sections: [
      {
        title: "Why no-download matters here",
        body: [
          "Relaxing games lose some of their charm when access feels heavy. If a player has to install software, create an account, or clear permissions first, the mood is already broken. A browser-first flow keeps the promise simple: click, load, play, breathe.",
          "That convenience also makes the game more shareable. Someone can send the page to a friend as a quiet recommendation without asking them to commit to a full app ecosystem.",
        ],
      },
      {
        title: "What to expect from browser play",
        body: [
          "A no-download puzzle game is best when the page is clean, the iframe is visible immediately, and the surrounding copy helps rather than distracts. That is why this site gives the game a calm frame, clear launch controls, and plain-language guidance instead of a noisy portal layout.",
          "If you want the fastest route back in later, bookmark the page after your first session. Browser-based puzzle play works best when returning feels as easy as opening a saved article.",
        ],
      },
      {
        title: "When a dedicated site beats a portal",
        body: [
          "Large game portals are useful for discovery, but single-game pages win when the search intent is already specific. If someone searches for Zen Jigsaw Master, they usually want the game itself, a clear explanation, and maybe one or two practical tips. A focused landing page satisfies that need faster.",
          "That focused experience also supports SEO better because the page can speak directly to the query instead of burying the answer under a generic library layout.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to install anything to play Zen Jigsaw Master?",
        answer:
          "No. This version runs in the browser, so you can start playing without an app install or account signup.",
      },
      {
        question: "Is no-download play free?",
        answer:
          "Yes. The browser version on this site is free to access and designed for quick sessions.",
      },
    ],
  },
  {
    slug: "zen-jigsaw-master-tips",
    title: "Zen Jigsaw Master Tips for Smoother Puzzles",
    description:
      "Use Zen Jigsaw Master tips to sort pieces, read image patterns, and keep each puzzle session calm and frustration-free.",
    hero: "Zen Jigsaw Master tips are less about speed and more about keeping the puzzle flow gentle.",
    intro:
      "If you want Zen Jigsaw Master to feel smoother and less frustrating, the key is simple piece sorting, image reading, and a calmer pace. These tips focus on puzzle flow rather than speed.",
    keywords: [
      "zen jigsaw master tips",
      "how to play zen jigsaw master",
      "zen jigsaw master strategy",
    ],
    sections: [
      {
        title: "Start with calm sorting",
        body: [
          "Before you chase exact placements, scan for edges, obvious color clusters, and repeating shapes. That first minute of quiet sorting makes the rest of the board feel less random and keeps the experience relaxing.",
          "Think in visual neighborhoods instead of isolated pieces. A patch of sky, foliage, or water can act like a mental anchor even when you do not know the final placement yet.",
        ],
      },
      {
        title: "Use the image mood as a clue",
        body: [
          "Zen Jigsaw Master leans on peaceful artwork, and that helps more than you might expect. Tranquil scenes usually have gradual transitions instead of harsh contrast, so pay attention to texture shifts, line direction, and edge softness.",
          "When two pieces seem close but not perfect, stop forcing them. This game rewards patience because the correct fit often becomes obvious after you place one neighboring piece elsewhere.",
        ],
      },
      {
        title: "Protect the relaxing rhythm",
        body: [
          "If a board starts to feel frustrating, pause for a few seconds and look away from the screen. Jigsaw games often unlock after a visual reset. That tiny break keeps the session aligned with the calm identity of the game.",
          "For repeat play, rotate between quick sessions and longer sessions. Short plays help you return often, while occasional longer sessions create the satisfying sense of finishing a full picture journey.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the best first move in Zen Jigsaw Master?",
        answer:
          "Start by sorting obvious edge pieces and large color groups. That lowers visual chaos and makes the board easier to read.",
      },
      {
        question: "Should I play fast or slow?",
        answer:
          "Slow is better. The game's appeal comes from relaxed progress, so deliberate placement feels more natural than rushing.",
      },
    ],
  },
];

export const legalPages = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-service", label: "Terms" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}

export const homepageFaq = [
  {
    question: "What kind of game is Zen Jigsaw Master?",
    answer:
      "Zen Jigsaw Master is a browser-based jigsaw puzzle game with calm visuals, simple controls, and a single-player focus.",
  },
  {
    question: "Can I play Zen Jigsaw Master online without downloading anything?",
    answer:
      "Yes. The game runs in an embedded browser frame, so you can start playing without installs, accounts, or launchers.",
  },
  {
    question: "Does Zen Jigsaw Master work on mobile devices?",
    answer:
      "Yes. It works on phones and tablets, especially in landscape mode where the board has more room.",
  },
  {
    question: "Is Zen Jigsaw Master good for short breaks?",
    answer:
      "Yes. Its quiet pace and low-pressure gameplay make it a good fit for five-to-fifteen-minute sessions.",
  },
];
