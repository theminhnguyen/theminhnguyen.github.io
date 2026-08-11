/**
 * Produktdaten für die Showcase-Seite.
 * Jedes Objekt beschreibt ein "vibe-codetes" Produkt.
 *
 * category:  apps | health | games | tools   (steuert die Filter)
 * features:  Bullet-Punkte für die Demo-Großvorschau
 * live:      URL zur echten App/zum Download (oder null, wenn keine)
 * liveKind:  'app'      → im Browser lauffähige Anwendung  (zählt als Live-Demo)
 *            'download' → Download/Release-Seite           (zählt NICHT als Live-Demo)
 *            null       → nichts Öffentliches verfügbar
 * account:   true, wenn zum Ausprobieren ein Konto/Login nötig ist
 * fanProject: true bei nicht-kommerziellen Fan-Projekten (kein Lizenz-CTA)
 * en:        englische Übersetzung von tagline/description/features/categoryLabel
 *            (siehe js/i18n.js für die Sprachumschaltung)
 */
const PROJECTS = [
  {
    id: 'mediavault',
    name: 'MediaVault',
    emoji: '🎬',
    tagline: 'Filme, Serien, Bücher & Mangas – automatisch recherchiert.',
    description:
      'Persönlicher Medien-Tracker als PWA: Titel eintippen – auch ungenau wie „der neue Dune“ –, die KI erkennt, was gemeint ist, und holt Cover, Beschreibung und Erscheinungsdatum automatisch aus TMDB, Google Books & AniList. Zukünftige Releases inklusive: Ein täglicher Cloud-Check schickt dir eine Push-Benachrichtigung, sobald ein geplanter Titel erscheint. Sortiert nach Typ und Fortschritt (Geplant → Dabei → Fertig). Alles gratis, offline-fähig, installierbar.',
    features: [
      'Freitext-Suche mit KI (Gemini): erkennt Titel & Typ auch bei unscharfer Eingabe',
      'Auto-Recherche von Cover, Beschreibung & Erscheinungsdatum (TMDB · Google Books · AniList)',
      'Zukünftige Releases: Push aufs Handy, sobald ein geplanter Titel erscheint',
      'Filter nach Film/Serie/Buch/Manga + Status Geplant → Dabei → Fertig',
      'Live-Sync über Geräte, offline-fähig, installierbar als App (PWA)',
    ],
    en: {
      tagline: 'Movies, shows, books & manga — auto-researched.',
      description:
        'Personal media tracker as a PWA: type a title — even loosely, like "the new Dune" — and the AI figures out what you mean, then fetches cover art, description, and release date automatically from TMDB, Google Books & AniList. Upcoming releases included: a daily cloud check sends a push notification the moment a planned title comes out. Sorted by type and progress (Planned → In Progress → Done). Free, offline-capable, installable.',
      features: [
        'Free-text search with AI (Gemini): recognizes title & type even from fuzzy input',
        'Auto-research of cover art, description & release date (TMDB · Google Books · AniList)',
        'Upcoming releases: push notification the moment a planned title comes out',
        'Filter by movie/show/book/manga + status Planned → In Progress → Done',
        'Live sync across devices, offline-capable, installable as an app (PWA)',
      ],
      categoryLabel: 'Entertainment',
    },
    shots: ['assets/shots/mediavault-1.jpg', 'assets/shots/mediavault-2.jpg'],
    shotType: 'mobile',
    tags: ['Next.js 15', 'Supabase', 'Gemini', 'TMDB', 'AniList', 'PWA'],
    category: 'apps',
    categoryLabel: 'Entertainment',
    live: 'https://mediavault-sooty-beta.vercel.app',
    liveKind: 'app',
    account: true,
    accent: '#6366f1',
    accent2: '#a855f7',
    featured: true,
  },
  {
    id: 'localflow',
    name: 'LocalFlow',
    emoji: '🎙️',
    tagline: 'Sprechen statt tippen. 100 % lokal.',
    description:
      'Diktier-App wie Wispr Flow – aber komplett lokal und kostenlos: Taste halten, sprechen, loslassen, und der Text erscheint an der Cursor-Position, in jeder Mac-App. Whisper läuft auf der Apple-GPU, ein lokales LLM poliert auf Wunsch den Text, das iPhone wird zum Fernmikrofon. Fertige DMG zum Draufziehen, inklusive Einrichtungs-Assistent. Kein Abo, keine Cloud, kein Konto.',
    features: [
      'Systemweit diktieren: ⌥ halten, sprechen – Text landet am Cursor',
      'Whisper large-v3-turbo lokal auf der Apple-GPU – offline & 0 €',
      'iPhone als Fernmikrofon: Diktat erscheint direkt am Mac',
      '✨ KI-Feinschliff per lokalem LLM (LM Studio/Ollama) & Freihand-Modus',
      'Fertige DMG-Datei: installieren per Drag & Drop, Assistent führt durch die Einrichtung',
    ],
    en: {
      tagline: 'Speak instead of type. 100% local.',
      description:
        'A dictation app like Wispr Flow — but completely local and free: hold a key, speak, release, and the text appears at the cursor, in any Mac app. Whisper runs on the Apple GPU, a local LLM can polish the text on request, and your iPhone becomes a remote microphone. Ready-made DMG to drag in, including a setup assistant. No subscription, no cloud, no account.',
      features: [
        'System-wide dictation: hold ⌥, speak — text lands at the cursor',
        'Whisper large-v3-turbo locally on the Apple GPU — offline & $0',
        'iPhone as a remote microphone: dictation appears directly on the Mac',
        '✨ AI polish via a local LLM (LM Studio/Ollama) & hands-free mode',
        'Ready-made DMG file: install via drag & drop, assistant guides setup',
      ],
      categoryLabel: 'Productivity',
    },
    shots: [],
    shotType: 'raw',
    tags: ['Python', 'Whisper (MLX)', 'LM Studio', 'Ollama', 'macOS'],
    category: 'apps',
    categoryLabel: 'Produktivität',
    live: 'https://github.com/theminhnguyen/localflow/releases/latest',
    liveKind: 'download',
    accent: '#5b8cff',
    accent2: '#3ecf8e',
    featured: true,
  },
  {
    id: 'streetpulse',
    name: 'StreetPulse',
    emoji: '🚦',
    tagline: 'Der Puls deiner Straße.',
    description:
      'Zählt per Webcam den Verkehr vor der Tür – Autos, Fußgänger und LKW – inklusive Tempo-Schätzung. KI-Objekterkennung läuft komplett im Browser (TensorFlow.js), mit Zähllinie, Tempo-Statistik, Tagesbericht und teilbarem Report. Kein Bild verlässt den Rechner.',
    features: [
      'KI-Objekterkennung live im Browser (TensorFlow.js / COCO-SSD)',
      'Zählt Autos, Fußgänger & LKW – mit Tempo-Schätzung',
      'Tempo-Statistik (85-%-Wert) & Zähllinie mit Richtung',
      'Intelligenter Tagesbericht, Report & 100 % lokal',
    ],
    en: {
      tagline: 'The pulse of your street.',
      description:
        'Counts traffic outside your window via webcam — cars, pedestrians, and trucks — including speed estimates. AI object detection runs entirely in the browser (TensorFlow.js), with a counting line, speed statistics, a daily report, and a shareable summary. No image ever leaves the computer.',
      features: [
        'AI object detection live in the browser (TensorFlow.js / COCO-SSD)',
        'Counts cars, pedestrians & trucks — with speed estimation',
        'Speed statistics (85th percentile) & counting line with direction',
        'Smart daily report, shareable report & 100% local',
      ],
      categoryLabel: 'AI & Traffic',
    },
    shots: [],
    shotType: 'desktop',
    tags: ['TensorFlow.js', 'COCO-SSD', 'Canvas', 'IndexedDB'],
    category: 'apps',
    categoryLabel: 'KI & Verkehr',
    live: 'https://theminhnguyen.github.io/streetpulse/',
    liveKind: 'app',
    accent: '#4f9dff',
    accent2: '#34d399',
    featured: true,
  },
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
    en: {
      tagline: 'Never forget the milk again.',
      description:
        'Mobile-first shopping list with live sync for the whole household. Add dishes to the list with a single tap, plus history, favorites, and categories — installable as an app.',
      features: [
        'Real-time live sync for the whole household',
        'Add dishes to the shopping list with one tap',
        'History, favorites & categories',
        'Installable as an app (PWA)',
      ],
      categoryLabel: 'Everyday',
    },
    shots: ['assets/shots/korbi-1.jpg', 'assets/shots/korbi-2.jpg'],
    shotType: 'mobile',
    tags: ['Next.js 15', 'Supabase', 'Realtime', 'PWA'],
    category: 'apps',
    categoryLabel: 'Alltag',
    live: 'https://korbi-app.vercel.app',
    liveKind: 'app',
    account: true,
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
    en: {
      tagline: 'PowerPoint is history.',
      description:
        'A cinematic presentation tool in the browser — with parallax slides, a walkable 3D gallery (Three.js), and a journey mode. No server, no account.',
      features: [
        'Three modes: slides, journey & walkable 3D world',
        'Parallax layers & Ken Burns effects',
        'Runs entirely in the browser — no account',
        'Walkable Three.js gallery with an avatar',
      ],
      categoryLabel: 'Creative',
    },
    shots: ['assets/shots/wonderdeck-2.jpg', 'assets/shots/wonderdeck-1.jpg'],
    shotType: 'desktop',
    tags: ['Three.js', 'WebGL', 'VRM', 'Canvas'],
    category: 'apps',
    categoryLabel: 'Kreativ',
    live: 'https://theminhnguyen.github.io/wonderdeck/',
    liveKind: 'app',
    accent: '#8b5cf6',
    accent2: '#22d3ee',
    featured: true,
  },
  {
    id: 'hogwarts-3d',
    name: 'Hogwarts 3D',
    emoji: '🏰',
    tagline: 'Ein Schloss zum Erkunden.',
    description:
      'Begehbare 3D-Welt im Browser: Schloss mit Großem Saal und schwebenden Kerzen, See mit Bootshaus, Wald, Quidditch-Feld – komplett prozedural erzeugt, ohne ein einziges Asset. Mit Tag/Nacht-Zyklus, 12 versteckten Schnätzen und Lumos-Zauber. Nicht-kommerzielles Fan-Projekt.',
    features: [
      'Frei begehbares 3D-Schloss in Ego-Perspektive',
      'Voller Tag/Nacht-Zyklus: Sonne, Mond, Sterne, Abendrot',
      '12 goldene Schnätze mit HUD-Kompass & Speicherstand',
      'Null Assets: Texturen, Gelände & Sound prozedural erzeugt',
    ],
    en: {
      tagline: 'A castle to explore.',
      description:
        'A walkable 3D world in the browser: a castle with a Great Hall and floating candles, a lake with a boathouse, a forest, a Quidditch pitch — all generated procedurally, without a single asset. With a day/night cycle, 12 hidden snitches, and a Lumos spell. Non-commercial fan project.',
      features: [
        'Freely walkable 3D castle in first-person view',
        'Full day/night cycle: sun, moon, stars, sunset',
        '12 golden snitches with HUD compass & save state',
        'Zero assets: textures, terrain & sound generated procedurally',
      ],
      categoryLabel: '3D World',
    },
    shots: [],
    shotType: 'desktop',
    tags: ['Three.js', 'WebGL', 'WebAudio', 'Prozedural'],
    category: 'games',
    categoryLabel: '3D-Welt',
    live: 'https://theminhnguyen.github.io/hogwarts-3d/',
    liveKind: 'app',
    fanProject: true,
    accent: '#d4a437',
    accent2: '#8b5cf6',
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
    en: {
      tagline: 'Your vitals. No subscription.',
      description:
        'Reads heart rate, RR intervals & battery live from a subscription-free Whoop 4.0 — directly in the browser via Web Bluetooth. All local, CSV export included.',
      features: [
        'Live heart rate via Web Bluetooth',
        'RR intervals & battery level in real time',
        'Everything local — no server, no tracking',
        'CSV export of the whole session',
      ],
      categoryLabel: 'Health',
    },
    shots: ['assets/shots/whoopi-dashboard-1.jpg'],
    shotType: 'mobile',
    tags: ['Web Bluetooth', 'IndexedDB', 'Single-File'],
    category: 'health',
    categoryLabel: 'Health',
    live: 'https://theminhnguyen.github.io/whoopi-dashboard/',
    liveKind: 'app',
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
    en: {
      tagline: 'Greetings you can walk through.',
      description:
        'Turns greeting cards into a walkable mini-game in a Game Boy look. Every greeting becomes a little character in a pixel room — the whole card lives inside the link, no server needed.',
      features: [
        'Greetings as a walkable pixel game',
        'Game Boy look with dialogue boxes',
        'The whole card lives inside the link — no server',
        'Occasions: birthday, farewell, wedding …',
      ],
      categoryLabel: 'Fun',
    },
    shots: ['assets/shots/pixelpost-1.jpg'],
    shotType: 'mobile',
    tags: ['Canvas', 'Game Engine', 'Zero-Backend'],
    category: 'games',
    categoryLabel: 'Fun',
    live: 'https://theminhnguyen.github.io/pixelpost/',
    liveKind: 'app',
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
    en: {
      tagline: 'Meet up in the pixel universe.',
      description:
        'Browser multiplayer for up to 50 players: a pixel-art world with minigames, boss fights, and AI agents — synced in real time via Socket.io.',
      features: [
        'Up to 50 players simultaneously',
        'Minigames & boss fights',
        'AI agents populate the world',
        'Real-time multiplayer via Socket.io',
      ],
      categoryLabel: 'Multiplayer',
    },
    shots: ['assets/shots/virtual-world-multiplayer-1.jpg'],
    shotType: 'desktop',
    tags: ['Socket.io', 'Node.js', 'Realtime', 'Game'],
    category: 'games',
    categoryLabel: 'Multiplayer',
    live: 'https://virtual-world-multiplayer.onrender.com',
    liveKind: 'app',
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
    en: {
      tagline: 'Plan trips together.',
      description:
        'Collects places with auto-fill for address, coordinates & opening hours, shows them on a map and calendar, and shares everything via link. Offline-capable PWA.',
      features: [
        'Collect places with auto-fill (OpenStreetMap)',
        'Map & calendar view',
        'Plan together via share link',
        'Offline-capable PWA',
      ],
      categoryLabel: 'Travel',
    },
    shots: ['assets/shots/tripmate-2.jpg', 'assets/shots/tripmate-1.jpg'],
    shotType: 'mobile',
    tags: ['Leaflet', 'OpenStreetMap', 'PWA', 'Offline'],
    category: 'apps',
    categoryLabel: 'Travel',
    live: 'https://theminhnguyen.github.io/tripmate/',
    liveKind: 'app',
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
    en: {
      tagline: 'Recognition that counts.',
      description:
        'Values-based peer recognition tool for teams: colleagues praise each other along shared values. A lean SaaS prototype built on Next.js & Supabase.',
      features: [
        'Values-based peer recognition within the team',
        'Recognition visible in a feed',
        'Lean SaaS prototype',
        'Built with Next.js & Supabase',
      ],
      categoryLabel: 'Business',
    },
    shots: ['assets/shots/kudosedge-1.jpg'],
    shotType: 'desktop',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    category: 'apps',
    categoryLabel: 'Business',
    live: 'https://kudosedge.vercel.app',
    liveKind: 'app',
    // TODO: prüfen – falls die Demo einen Login erzwingt, hier `account: true` setzen.
    accent: '#eab308',
    accent2: '#f97316',
    featured: false,
  },
  {
    id: 'boop',
    name: 'Boop',
    emoji: '🟡',
    tagline: 'Der Fidget-Ball für deinen Desktop.',
    description:
      'Ein physik-basierter Fidget-Ball an einem Seil, der über deinem Mac-Desktop schwebt. Ziehen, werfen, prellen, das Seil durchschneiden – mit 12 Skins, Effekten, Sound & Trackpad-Haptik. Lebt in der Menüleiste, unsichtbar bis du ihn brauchst.',
    features: [
      'Echte Seil-Physik: ziehen, werfen, schwingen, prellen',
      'Seil durchschneiden – der Ball fällt frei (mit Konfetti)',
      '12 Ball-Skins + Effekte, Sound & Trackpad-Haptik',
      'Lebt in der Menüleiste, globaler Shortcut ⌥F',
    ],
    en: {
      tagline: 'The fidget ball for your desktop.',
      description:
        'A physics-based fidget ball on a rope that floats over your Mac desktop. Drag it, throw it, bounce it, cut the rope — with 12 skins, effects, sound & trackpad haptics. Lives in the menu bar, invisible until you need it.',
      features: [
        'Real rope physics: drag, throw, swing, bounce',
        'Cut the rope — the ball falls freely (with confetti)',
        '12 ball skins + effects, sound & trackpad haptics',
        'Lives in the menu bar, global shortcut ⌥F',
      ],
      categoryLabel: 'Fun',
    },
    shots: ['assets/shots/boop-1.jpg'],
    shotType: 'raw',
    tags: ['Swift', 'SpriteKit', 'AppKit', 'macOS'],
    category: 'games',
    categoryLabel: 'Fun',
    live: null,
    liveKind: null,
    accent: '#f5b301',
    accent2: '#fb7185',
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
    en: {
      tagline: 'Your AI limits, at a glance.',
      description:
        "A macOS menu bar app that shows claude.ai's usage limits: 5-hour session, weekly limit, and model buckets — with a traffic-light status, notifications & a 7-day sparkline.",
      features: [
        '5-hour session & weekly limit at a glance',
        'Traffic-light status right in the menu bar',
        'Notification at threshold levels',
        '7-day sparkline & model buckets',
      ],
      categoryLabel: 'Dev Tool',
    },
    shots: ['assets/shots/claude-usage-monitor-1.jpg'],
    shotType: 'raw',
    tags: ['Python', 'PyObjC', 'Swift', 'macOS'],
    category: 'tools',
    categoryLabel: 'Dev-Tool',
    live: null,
    liveKind: null,
    accent: '#d97757',
    accent2: '#8b5cf6',
    featured: false,
  },
  {
    id: 'sidetrack',
    name: 'SideTrack',
    emoji: '🗂️',
    tagline: 'Nebenprojekte im Blick – auch wenn das Tagesgeschäft dazwischenfunkt.',
    description:
      'Internes Team-Tool, um Nebenprojekte parallel zum Tagesgeschäft zu tracken: T-Shirt-Schätzungen statt Stunden, 1-Klick-Snooze für Deadlines mit Audit-Log (wer hat wann warum verschoben?), eine Tagesgeschäft-Ampel pro Person und ein interaktives Gantt mit Abhängigkeiten, Konflikt-Erkennung & Drag-to-Reschedule. Dazu ein 1-Klick-Statusbericht für Team-Updates sowie PowerPoint-Export – inklusive Hell/Dunkel-Modus.',
    features: [
      'T-Shirt-Größen (S/M/L/XL) statt Stundenschätzung',
      '1-Klick-Snooze mit Audit-Log: wer hat wann warum verschoben',
      'Tagesgeschäft-Ampel (Rot/Gelb/Grün) pro Teammitglied',
      'Interaktives Gantt mit Abhängigkeiten, Konflikten & Drag-to-Reschedule',
      '1-Klick-Statusbericht + PowerPoint-Export',
    ],
    en: {
      tagline: 'Keep side projects on your radar — even when the day job gets in the way.',
      description:
        'Internal team tool for tracking side projects alongside day-to-day work: T-shirt sizing instead of hours, one-click deadline snoozing with an audit log (who moved what, when, and why?), a day-job traffic light per person, and an interactive Gantt chart with dependencies, conflict detection & drag-to-reschedule. Plus a one-click status report for team updates and PowerPoint export — including light/dark mode.',
      features: [
        'T-shirt sizes (S/M/L/XL) instead of hour estimates',
        'One-click snooze with audit log: who moved what, when, and why',
        'Day-job traffic light (red/yellow/green) per team member',
        'Interactive Gantt chart with dependencies, conflicts & drag-to-reschedule',
        'One-click status report + PowerPoint export',
      ],
      categoryLabel: 'Team Tool',
    },
    shots: ['assets/shots/sidetrack-1.jpg', 'assets/shots/sidetrack-3.jpg', 'assets/shots/sidetrack-2.jpg'],
    shotType: 'desktop',
    tags: ['React', 'TypeScript', 'Zustand', 'Gantt', 'PPTX-Export'],
    category: 'tools',
    categoryLabel: 'Team-Tool',
    live: 'https://theminhnguyen.github.io/sidetrack/',
    liveKind: 'app',
    accent: '#22c55e',
    accent2: '#0ea5e9',
    featured: false,
  },
  {
    id: 'spielkiste',
    name: 'Spielkiste',
    emoji: '🧸',
    tagline: 'Ein ruhiges Spielzimmer, ganz ohne Bildschirmzeit-Schuldgefühle.',
    description:
      'Neun handgebaute Spielzeuge für ein 2-jähriges Kind – vom Fummelbrett über Klang-Kleckse und eine Wimmelbild-Gartenszene bis zur Gute-Nacht-Szene zum Runterkommen. Kein Text, keine Werbung, keine Level: als Web-App auf dem iPad installiert, läuft alles zu 100% offline und merkt sich jeden Spielstand – ideal auch für lange Flüge.',
    features: [
      'Neun Spielzeuge: Fummelbrett, Klang-Kleckse, Malen, Stapelsteine, Seifenblasen, Putzen, Sticker-Szene, Wimmelbild, Gute-Nacht-Szene',
      'Komplett ohne Text, Menüs oder Level – für 2-Jährige gebaut',
      'Läuft zu 100% offline als installierte Web-App auf dem iPad',
      'Alle Klänge live synthetisiert – keine einzige Audiodatei',
    ],
    en: {
      tagline: 'A calm playroom, no screen-time guilt attached.',
      description:
        'Nine handcrafted toys for a 2-year-old — from a busy board and sound blobs to a garden search-and-find scene and a calming bedtime scene. No text, no ads, no levels: installed as a web app on the iPad, it runs 100% offline and remembers every play state — great for long flights too.',
      features: [
        'Nine toys: busy board, sound blobs, drawing, stacking blocks, bubbles, window cleaning, sticker scene, search-and-find garden, bedtime scene',
        'Completely text-free, no menus or levels — built for age 2',
        'Runs 100% offline as an installed web app on the iPad',
        'Every sound synthesized live — not a single audio file',
      ],
      categoryLabel: 'Montessori',
    },
    shots: [],
    shotType: 'mobile',
    tags: ['PWA', 'Web Audio', 'Offline-First'],
    category: 'games',
    categoryLabel: 'Montessori',
    live: 'https://theminhnguyen.github.io/spielkiste/',
    liveKind: 'app',
    accent: '#e0a458',
    accent2: '#e88a9a',
    featured: false,
  },
  {
    id: 'context-studio',
    name: 'Context Studio',
    emoji: '🧭',
    tagline: 'Kontext ist ein Budget, kein Lager.',
    description:
      'Lokale Lern-App für Markdown-Kontextdateien wie CLAUDE.md: Sechs interaktive Kapitel erklären, wie Claude Code, Claude.ai und Langdock Kontext laden – dann baut man im Workspace das eigene Set, mit einer Budget-Ladeleiste, die live zeigt, was bei jedem Sessionstart mitlädt. Dazu Linter, Sparring-Modus für Reflexionsfragen, Versionierung und Export als ZIP oder direkt fürs jeweilige Tool. Kein Backend, kein Login, alle Daten bleiben im Browser.',
    features: [
      'Sechs interaktive Lernkapitel zu CLAUDE.md, Auto Memory & Co.',
      'Budget-Ladeleiste zeigt live, was bei jedem Sessionstart mitlädt',
      'Linter & Sparring-Modus decken vage Regeln und Widersprüche auf',
      'Export als ZIP für Claude Code, Claude.ai oder Langdock',
    ],
    en: {
      tagline: 'Context is a budget, not a warehouse.',
      description:
        'A local learning app for markdown context files like CLAUDE.md: six interactive chapters explain how Claude Code, Claude.ai, and Langdock load context — then you build your own set in the workspace, with a budget load bar that shows live what loads on every session start. Plus a linter, a sparring mode for reflection questions, versioning, and export as a ZIP or directly for the target tool. No backend, no login, all data stays in the browser.',
      features: [
        'Six interactive learning chapters on CLAUDE.md, Auto Memory & more',
        'Budget load bar shows live what loads on every session start',
        'Linter & sparring mode surface vague rules and contradictions',
        'Export as a ZIP for Claude Code, Claude.ai, or Langdock',
      ],
      categoryLabel: 'Dev Tool',
    },
    shots: [],
    shotType: 'desktop',
    tags: ['Vite', 'React', 'TypeScript', 'Zustand', 'IndexedDB'],
    category: 'tools',
    categoryLabel: 'Dev-Tool',
    live: 'https://theminhnguyen.github.io/context-studio/',
    liveKind: 'app',
    accent: '#2F6F62',
    accent2: '#B4531B',
    featured: false,
  },
];

const FILTERS = [
  { id: 'all', label: 'Alle', labelEn: 'All' },
  { id: 'apps', label: 'Apps & Produktivität', labelEn: 'Apps & Productivity' },
  { id: 'health', label: 'Health & Body', labelEn: 'Health & Body' },
  { id: 'games', label: 'Games & Fun', labelEn: 'Games & Fun' },
  { id: 'tools', label: 'Dev-Tools', labelEn: 'Dev Tools' },
];

/**
 * Kuratierte Technologie-Liste. Speist sowohl den Ticker als auch den
 * Zähler "Technologien" im Hero – dadurch können beide nicht auseinanderlaufen.
 */
const TECH_TICKER = [
  'Next.js', 'React', 'Supabase', 'Three.js', 'WebGL', 'Socket.io',
  'Web Bluetooth', 'TypeScript', 'Tailwind', 'Node.js', 'Canvas',
  'PWA', 'Leaflet', 'IndexedDB', 'PyObjC', 'Swift', 'Realtime', 'Vercel',
  'TensorFlow.js', 'COCO-SSD', 'Computer Vision', 'WebAudio',
  'Whisper', 'MLX', 'Ollama', 'Gemini', 'TMDB', 'AniList',
];
