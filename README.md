# ✦ minh.studio — Produkt-Showcase

Eine cinematische Landingpage, die meine im **Vibe-Coding-Stil** gebauten Produkte
an einem Ort bündelt. Die Quell-Repos sind privat – jedes Produkt wird stattdessen
direkt auf der Seite gezeigt: mit einer animierten CSS-Illustration und, wo
vorhanden, echten Screenshots.

**Live:** https://theminhnguyen.github.io

## Enthaltene Produkte

| Produkt | Was es ist | Status |
|---|---|---|
| **MediaVault** | Tracker für Filme/Serien/Bücher/Mangas mit KI-Auto-Recherche (Next.js + Supabase) | Live (Konto nötig) |
| **LocalFlow** | Lokale KI-Diktier-App für macOS, Whisper auf der Apple-GPU | Download |
| **StreetPulse** | Verkehrszählung per Webcam, KI-Erkennung komplett im Browser (TensorFlow.js) | Live |
| **Korbi** | Einkaufsliste mit Live-Sync (Next.js + Supabase) | Live (Konto nötig) |
| **WonderDeck** | Cinematisches Präsentations-Tool mit begehbarer 3D-Galerie | Live |
| **Hogwarts 3D** | Prozedural erzeugte, begehbare 3D-Schlosswelt (nicht-kommerzielles Fan-Projekt) | Live |
| **WHOOPI** | Whoop-4.0-Live-Dashboard über Web Bluetooth | Live |
| **PixelPost** | Grußkarte als begehbares Game-Boy-Mini-Spiel | Live |
| **Virtual World** | Browser-Multiplayer für bis zu 50 Spieler | Live |
| **TripMate** | Gemeinsame Urlaubsplanung als PWA | Live |
| **KudosEdge** | Werte-basiertes Peer-Recognition-Tool | Live |
| **Boop** | Physik-Fidget-Ball für die macOS-Menüleiste | Auf Anfrage |
| **Claude Usage Monitor** | macOS-Menüleisten-App für claude.ai-Limits | Auf Anfrage |

> Die Zahlen im Hero (Produkte, Live-Demos, Technologien) werden zur Laufzeit aus
> `js/data.js` berechnet – beim Hinzufügen eines Produkts stimmen sie automatisch.
> „Live-Demo“ zählt nur im Browser lauffähige Apps; Downloads und Auf-Anfrage-Produkte
> werden nicht mitgezählt.

## Features der Seite

- 🎨 Dark, futuristisches Design mit Gradient-Mesh, Glow & Cursor-Licht
- 🃏 Bento-Grid mit individuellen, animierten CSS-Mockups pro Produkt
- ▶️ **Demo-Galerie** pro Produkt (Lightbox): animierte Illustration + echte Screenshots (sofern vorhanden) in Geräte-Rahmen (Browser/Phone)
- 🧲 3D-Tilt auf den Karten, Scroll-Reveals, animierter Tech-Ticker & Zähler
- 🔎 Filter nach Kategorie (Apps, Health, Games, Dev-Tools)
- 🏷️ Ehrliche Status-Badges (Live / Download / Auf Anfrage) und „Konto nötig“-Hinweis
- 📱 Voll responsive, `prefers-reduced-motion`-freundlich, mit Skip-Link & Fokus-Ringen

## Technik

Reines **HTML/CSS/JS**, keine Build-Tools, keine Abhängigkeiten — läuft direkt auf
GitHub Pages.

```
index.html          # Struktur
css/styles.css      # komplettes Design
js/data.js          # Produktdaten (Single Source of Truth)
js/main.js          # Rendering, Mockups, Interaktion
assets/og-image.png # Social-Preview (Open Graph / Twitter)
assets/shots/       # echte Screenshots
```

## Lokal ansehen

```bash
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

---

Gebaut im Vibe-Coding-Stil. ✦
