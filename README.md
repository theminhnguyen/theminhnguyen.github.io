# ✦ minh.studio — Produkt-Showcase

Eine cinematische Landingpage, die meine im **Vibe-Coding-Stil** gebauten Produkte
an einem Ort bündelt — live erlebbar, direkt im Browser.

**Live:** https://theminhnguyen.github.io

## Enthaltene Produkte

| Produkt | Was es ist | Live |
|---|---|---|
| **Korbi** | Einkaufsliste mit Live-Sync (Next.js + Supabase) | [korbi.vercel.app](https://korbi.vercel.app) |
| **WonderDeck** | Cinematisches Präsentations-Tool mit 3D-Galerie | [Demo](https://theminhnguyen.github.io/wonderdeck/) |
| **WHOOPI** | Whoop-4.0-Live-Dashboard über Web Bluetooth | [Demo](https://theminhnguyen.github.io/whoopi-dashboard/) |
| **PixelPost** | Grußkarte als begehbares Game-Boy-Mini-Spiel | [Demo](https://theminhnguyen.github.io/pixelpost/) |
| **Virtual World** | Browser-Multiplayer für bis zu 50 Spieler | [Demo](https://virtual-world-multiplayer.onrender.com) |
| **TripMate** | Gemeinsame Urlaubsplanung als PWA | [Demo](https://theminhnguyen.github.io/tripmate/) |
| **KudosEdge** | Werte-basiertes Peer-Recognition-Tool | [Demo](https://kudosedge.vercel.app) |
| **Claude Usage Monitor** | macOS-Menüleisten-App für claude.ai-Limits | privat |

## Features der Seite

- 🎨 Dark, futuristisches Design mit Gradient-Mesh, Glow & Cursor-Licht
- 🃏 Bento-Grid mit individuellen, animierten CSS-Mockups pro Produkt
- ▶️ **Live-Vorschau** direkt in der Seite (Lightbox-iframe), ohne den Tab zu verlassen
- 🧲 3D-Tilt auf den Karten, Scroll-Reveals, animierter Tech-Ticker & Zähler
- 🔎 Filter nach Kategorie (Apps, Health, Games, Dev-Tools)
- 📱 Voll responsive, `prefers-reduced-motion`-freundlich

## Technik

Reines **HTML/CSS/JS**, keine Build-Tools, keine Abhängigkeiten — läuft direkt auf
GitHub Pages.

```
index.html        # Struktur
css/styles.css    # komplettes Design
js/data.js        # Produktdaten
js/main.js        # Rendering, Mockups, Interaktion
```

## Lokal ansehen

```bash
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

---

Gebaut im Vibe-Coding-Stil. ✦
