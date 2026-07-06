# ✦ minh.studio — Produkt-Showcase

Eine cinematische Landingpage, die meine im **Vibe-Coding-Stil** gebauten Produkte
an einem Ort bündelt. Die Quell-Repos sind privat – jedes Produkt wird stattdessen
mit **echten Screenshots** und einer animierten Illustration direkt auf der Seite gezeigt.

**Live:** https://theminhnguyen.github.io

## Enthaltene Produkte

| Produkt | Was es ist |
|---|---|
| **Korbi** | Einkaufsliste mit Live-Sync (Next.js + Supabase) |
| **WonderDeck** | Cinematisches Präsentations-Tool mit 3D-Galerie |
| **WHOOPI** | Whoop-4.0-Live-Dashboard über Web Bluetooth |
| **PixelPost** | Grußkarte als begehbares Game-Boy-Mini-Spiel |
| **Virtual World** | Browser-Multiplayer für bis zu 50 Spieler |
| **TripMate** | Gemeinsame Urlaubsplanung als PWA |
| **KudosEdge** | Werte-basiertes Peer-Recognition-Tool |
| **Claude Usage Monitor** | macOS-Menüleisten-App für claude.ai-Limits |

## Features der Seite

- 🎨 Dark, futuristisches Design mit Gradient-Mesh, Glow & Cursor-Licht
- 🃏 Bento-Grid mit individuellen, animierten CSS-Mockups pro Produkt
- ▶️ **Demo-Galerie** pro Produkt (Lightbox): echte Screenshots in Geräte-Rahmen (Browser/Phone) + animierte Illustration
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
