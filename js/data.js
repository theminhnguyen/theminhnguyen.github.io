/**
 * Produktdaten für die Showcase-Seite.
 * Jedes Objekt beschreibt ein "vibe-codetes" Produkt.
 *
 * category: apps | health | games | tools   (steuert die Filter)
 * features: Bullet-Punkte für die Demo-Großvorschau
 */
const PROJECTS = [
  {
    id: 'korbi',
    name: 'Korbi',
    emoji: '🧡',
    tagline: 'Nie wieder Milch vergessen.',
    description:
      'Mobile-first Einkaufsliste mit Live-Sync für den ganzen Haushalt. Gerichte mit einem Tap zur Liste, Verlauf, Favoriten und Kategorien – installierbar als App.',
    features: [
      'Live-Sync in Echtzeit für den ganzen Haushalt',
      'Gerichte mit einem Tap zur Einkaufsliste',
      'Verlauf, Favoriten & Kategorien',
      'Installierbar als App (PWA)',
    ],
    shots: ['assets/shots/korbi-1.jpg', 'assets/shots/korbi-2.jpg'],
    shotType: 'mobile',
    tags: ['Next.js 15', 'Supabase', 'Realtime', 'PWA'],
    category: 'apps',
    categoryLabel: 'Alltag',
    accent: '#f97316',
    accent2: '#fb7185',
    featured: true,
  },
  {
    id: 'wonderdeck',
    name: 'WonderDeck',
    emoji: '✦',
    tagline: 'PowerPoint war gestern.',
    description:
      'Cinematisches Präsentations-Tool im Browser – mit Parallax-Folien, einer begehbaren 3D-Galerie (Three.js) und Journey-Modus. Ohne Server, ohne Konto.',
    features: [
      'Drei Modi: Folien, Journey & begehbare 3D-Welt',
      'Parallax-Ebenen & Ken-Burns-Effekte',
      'Läuft komplett im Browser – ohne Konto',
      'Begehbare Three.js-Galerie mit Figur',
    ],
    shots: ['assets/shots/wonderdeck-2.jpg', 'assets/shots/wonderdeck-1.jpg'],
    shotType: 'desktop',
    tags: ['Three.js', 'WebGL', 'VRM', 'Canvas'],
    category: 'apps',
    categoryLabel: 'Kreativ',
    accent: '#8b5cf6',
    accent2: '#22d3ee',
    featured: true,
  },
  {
    id: 'whoopi-dashboard',
    name: 'WHOOPI',
    emoji: '🫀',
    tagline: 'Deine Vitaldaten. Ohne Abo.',
    description:
      'Liest Herzfrequenz, RR-Intervalle & Batterie live vom abofreien Whoop 4.0 – direkt im Browser über Web Bluetooth. Alles lokal, CSV-Export inklusive.',
    features: [
      'Live-Herzfrequenz per Web Bluetooth',
      'RR-Intervalle & Batteriestand in Echtzeit',
      'Alles lokal – kein Server, kein Tracking',
      'CSV-Export der ganzen Session',
    ],
    shots: ['assets/shots/whoopi-dashboard-1.jpg'],
    shotType: 'mobile',
    tags: ['Web Bluetooth', 'IndexedDB', 'Single-File'],
    category: 'health',
    categoryLabel: 'Health',
    accent: '#ef4444',
    accent2: '#f59e0b',
    featured: false,
  },
  {
    id: 'pixelpost',
    name: 'PixelPost',
    emoji: '💌',
    tagline: 'Grüße zum Ablaufen.',
    description:
      'Verwandelt Grußkarten in ein begehbares Mini-Spiel im Game-Boy-Look. Jeder Gruß wird ein Männchen im Pixel-Raum – die ganze Karte steckt im Link, kein Server.',
    features: [
      'Grüße als begehbares Pixel-Spiel',
      'Game-Boy-Look mit Dialogboxen',
      'Die ganze Karte steckt im Link – kein Server',
      'Anlässe: Geburtstag, Abschied, Hochzeit …',
    ],
    shots: ['assets/shots/pixelpost-1.jpg'],
    shotType: 'mobile',
    tags: ['Canvas', 'Game Engine', 'Zero-Backend'],
    category: 'games',
    categoryLabel: 'Fun',
    accent: '#ec4899',
    accent2: '#a3e635',
    featured: false,
  },
  {
    id: 'virtual-world-multiplayer',
    name: 'Virtual World',
    emoji: '🎮',
    tagline: 'Trefft euch im Pixel-Universum.',
    description:
      'Browser-Multiplayer für bis zu 50 Spieler: eine Pixel-Art-Welt mit Minispielen, Boss-Fights und KI-Agenten – in Echtzeit synchronisiert über Socket.io.',
    features: [
      'Bis zu 50 Spieler gleichzeitig',
      'Minispiele & Boss-Fights',
      'KI-Agenten bevölkern die Welt',
      'Echtzeit-Multiplayer über Socket.io',
    ],
    shots: ['assets/shots/virtual-world-multiplayer-1.jpg'],
    shotType: 'desktop',
    tags: ['Socket.io', 'Node.js', 'Realtime', 'Game'],
    category: 'games',
    categoryLabel: 'Multiplayer',
    accent: '#10b981',
    accent2: '#3b82f6',
    featured: false,
  },
  {
    id: 'tripmate',
    name: 'TripMate',
    emoji: '🗺️',
    tagline: 'Urlaub gemeinsam planen.',
    description:
      'Sammelt Orte mit Auto-Fill für Adresse, Koordinaten & Öffnungszeiten, zeigt sie auf Karte und Kalender und teilt alles per Link. Offline-fähige PWA.',
    features: [
      'Orte sammeln mit Auto-Fill (OpenStreetMap)',
      'Karten- & Kalender-Ansicht',
      'Gemeinsam planen per Share-Link',
      'Offline-fähige PWA',
    ],
    shots: ['assets/shots/tripmate-2.jpg', 'assets/shots/tripmate-1.jpg'],
    shotType: 'mobile',
    tags: ['Leaflet', 'OpenStreetMap', 'PWA', 'Offline'],
    category: 'apps',
    categoryLabel: 'Travel',
    accent: '#06b6d4',
    accent2: '#6366f1',
    featured: false,
  },
  {
    id: 'kudosedge',
    name: 'KudosEdge',
    emoji: '🏆',
    tagline: 'Anerkennung, die zählt.',
    description:
      'Werte-basiertes Peer-Recognition-Tool für Teams: Kollegen loben sich entlang gemeinsamer Werte. Schlanker SaaS-Prototyp auf Next.js & Supabase.',
    features: [
      'Werte-basiertes Peer-Lob im Team',
      'Anerkennung sichtbar im Feed',
      'Schlanker SaaS-Prototyp',
      'Gebaut mit Next.js & Supabase',
    ],
    shots: ['assets/shots/kudosedge-1.jpg'],
    shotType: 'desktop',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    category: 'apps',
    categoryLabel: 'Business',
    accent: '#eab308',
    accent2: '#f97316',
    featured: false,
  },
  {
    id: 'claude-usage-monitor',
    name: 'Claude Usage Monitor',
    emoji: '📊',
    tagline: 'Deine KI-Limits im Blick.',
    description:
      'macOS-Menüleisten-App, die die Nutzungslimits von claude.ai anzeigt: 5-Stunden-Sitzung, Wochenlimit und Modell-Buckets – mit Ampel, Benachrichtigungen & 7-Tage-Sparkline.',
    features: [
      '5-Std-Sitzung & Wochenlimit im Blick',
      'Ampel-Status direkt in der Menüleiste',
      'Benachrichtigung bei Schwellwerten',
      '7-Tage-Sparkline & Modell-Buckets',
    ],
    shots: ['assets/shots/claude-usage-monitor-1.jpg'],
    shotType: 'raw',
    tags: ['Python', 'PyObjC', 'Swift', 'macOS'],
    category: 'tools',
    categoryLabel: 'Dev-Tool',
    accent: '#d97757',
    accent2: '#8b5cf6',
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
