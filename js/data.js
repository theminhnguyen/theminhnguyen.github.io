/**
 * Produktdaten für die Showcase-Seite.
 * Jedes Objekt beschreibt ein "vibe-codetes" Produkt.
 *
 * category: apps | health | games | tools   (steuert die Filter)
 * status:   live | private                  (steuert das Badge)
 */
const PROJECTS = [
  {
    id: 'korbi',
    name: 'Korbi',
    emoji: '🧡',
    tagline: 'Nie wieder Milch vergessen.',
    description:
      'Mobile-first Einkaufsliste mit Live-Sync für den ganzen Haushalt. Gerichte mit einem Tap zur Liste, Verlauf, Favoriten und Kategorien – installierbar als App.',
    tags: ['Next.js 15', 'Supabase', 'Realtime', 'PWA'],
    category: 'apps',
    categoryLabel: 'Alltag',
    status: 'live',
    accent: '#f97316',
    accent2: '#fb7185',
    live: 'https://korbi.vercel.app',
    code: 'https://github.com/theminhnguyen/korbi',
    featured: true,
  },
  {
    id: 'wonderdeck',
    name: 'WonderDeck',
    emoji: '✦',
    tagline: 'PowerPoint war gestern.',
    description:
      'Cinematisches Präsentations-Tool im Browser – mit Parallax-Folien, einer begehbaren 3D-Galerie (Three.js) und Journey-Modus. Ohne Server, ohne Konto.',
    tags: ['Three.js', 'WebGL', 'VRM', 'Canvas'],
    category: 'apps',
    categoryLabel: 'Kreativ',
    status: 'live',
    accent: '#8b5cf6',
    accent2: '#22d3ee',
    live: 'https://theminhnguyen.github.io/wonderdeck/',
    code: 'https://github.com/theminhnguyen/wonderdeck',
    featured: true,
  },
  {
    id: 'whoopi-dashboard',
    name: 'WHOOPI',
    emoji: '🫀',
    tagline: 'Deine Vitaldaten. Ohne Abo.',
    description:
      'Liest Herzfrequenz, RR-Intervalle & Batterie live vom abofreien Whoop 4.0 – direkt im Browser über Web Bluetooth. Alles lokal, CSV-Export inklusive.',
    tags: ['Web Bluetooth', 'IndexedDB', 'Single-File'],
    category: 'health',
    categoryLabel: 'Health',
    status: 'live',
    accent: '#ef4444',
    accent2: '#f59e0b',
    live: 'https://theminhnguyen.github.io/whoopi-dashboard/',
    code: 'https://github.com/theminhnguyen/whoopi-dashboard',
    featured: false,
  },
  {
    id: 'pixelpost',
    name: 'PixelPost',
    emoji: '💌',
    tagline: 'Grüße zum Ablaufen.',
    description:
      'Verwandelt Grußkarten in ein begehbares Mini-Spiel im Game-Boy-Look. Jeder Gruß wird ein Männchen im Pixel-Raum – die ganze Karte steckt im Link, kein Server.',
    tags: ['Canvas', 'Game Engine', 'Zero-Backend'],
    category: 'games',
    categoryLabel: 'Fun',
    status: 'live',
    accent: '#ec4899',
    accent2: '#a3e635',
    live: 'https://theminhnguyen.github.io/pixelpost/',
    code: 'https://github.com/theminhnguyen/pixelpost',
    featured: false,
  },
  {
    id: 'virtual-world-multiplayer',
    name: 'Virtual World',
    emoji: '🎮',
    tagline: 'Trefft euch im Pixel-Universum.',
    description:
      'Browser-Multiplayer für bis zu 50 Spieler: eine Pixel-Art-Welt mit Minispielen, Boss-Fights und KI-Agenten – in Echtzeit synchronisiert über Socket.io.',
    tags: ['Socket.io', 'Node.js', 'Realtime', 'Game'],
    category: 'games',
    categoryLabel: 'Multiplayer',
    status: 'live',
    accent: '#10b981',
    accent2: '#3b82f6',
    live: 'https://virtual-world-multiplayer.onrender.com',
    code: 'https://github.com/theminhnguyen/virtual-world-multiplayer',
    featured: false,
  },
  {
    id: 'tripmate',
    name: 'TripMate',
    emoji: '🗺️',
    tagline: 'Urlaub gemeinsam planen.',
    description:
      'Sammelt Orte mit Auto-Fill für Adresse, Koordinaten & Öffnungszeiten, zeigt sie auf Karte und Kalender und teilt alles per Link. Offline-fähige PWA.',
    tags: ['Leaflet', 'OpenStreetMap', 'PWA', 'Offline'],
    category: 'apps',
    categoryLabel: 'Travel',
    status: 'live',
    accent: '#06b6d4',
    accent2: '#6366f1',
    live: 'https://theminhnguyen.github.io/tripmate/',
    code: 'https://github.com/theminhnguyen/tripmate',
    featured: false,
  },
  {
    id: 'kudosedge',
    name: 'KudosEdge',
    emoji: '🏆',
    tagline: 'Anerkennung, die zählt.',
    description:
      'Werte-basiertes Peer-Recognition-Tool für Teams: Kollegen loben sich entlang gemeinsamer Werte. Schlanker SaaS-Prototyp auf Next.js & Supabase.',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    category: 'apps',
    categoryLabel: 'Business',
    status: 'live',
    accent: '#eab308',
    accent2: '#f97316',
    live: 'https://kudosedge.vercel.app',
    code: null,
    featured: false,
  },
  {
    id: 'claude-usage-monitor',
    name: 'Claude Usage Monitor',
    emoji: '📊',
    tagline: 'Deine KI-Limits im Blick.',
    description:
      'macOS-Menüleisten-App, die die Nutzungslimits von claude.ai anzeigt: 5-Stunden-Sitzung, Wochenlimit und Modell-Buckets – mit Ampel, Benachrichtigungen & 7-Tage-Sparkline.',
    tags: ['Python', 'PyObjC', 'Swift', 'macOS'],
    category: 'tools',
    categoryLabel: 'Dev-Tool',
    status: 'private',
    accent: '#d97757',
    accent2: '#8b5cf6',
    live: null,
    code: null,
    featured: false,
  },
];

const FILTERS = [
  { id: 'all', label: 'Alle' },
  { id: 'apps', label: 'Apps & Produktivität' },
  { id: 'health', label: 'Health & Body' },
  { id: 'games', label: 'Games & Fun' },
  { id: 'tools', label: 'Dev-Tools' },
];

const TECH_TICKER = [
  'Next.js', 'React', 'Supabase', 'Three.js', 'WebGL', 'Socket.io',
  'Web Bluetooth', 'TypeScript', 'Tailwind', 'Node.js', 'Canvas',
  'PWA', 'Leaflet', 'IndexedDB', 'PyObjC', 'Swift', 'Realtime', 'Vercel',
];
