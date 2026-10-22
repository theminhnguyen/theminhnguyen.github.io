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
| **MeetScribe** | Besprechungen lokal mitschreiben mit automatischer Sprecher-Trennung (macOS) | Auf Anfrage |
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
| **SideTrack** | Team-Tool für Nebenprojekte: Gantt, Snooze-Audit-Log, Tagesgeschäft-Ampel | Live |
| **Spielkiste** | Neun ruhige Montessori-Spielzeuge für Kleinkinder, offline als PWA | Live |
| **Context Studio** | Lern-App für Markdown-Kontextdateien (CLAUDE.md & Co.) mit Budget-Ladeleiste, Linter & Export | Live |

> Die Zahlen im Hero (Produkte, Live-Demos, Technologien) werden zur Laufzeit aus
> `js/data.js` berechnet – beim Hinzufügen eines Produkts stimmen sie automatisch.
> „Live-Demo“ zählt nur im Browser lauffähige Apps; Downloads und Auf-Anfrage-Produkte
> werden nicht mitgezählt.

## Features der Seite

- 👤 Persönlicher Hero mit Porträt und Claim „Erst ausprobieren. Dann skalieren.“ – verlinkt auf „Über mich“
- ⭐ Vier Lieblingsprojekte mit eigener Detailseite: Galerie, Tabs „Worum es geht / Highlights / Technik“, Entstehungsgeschichte
- 🎨 Dark, futuristisches Design mit Gradient-Mesh, Glow & Cursor-Licht
- 🃏 Bento-Grid mit individuellen, animierten CSS-Mockups pro Produkt
- ▶️ **Demo-Galerie** pro Produkt (Lightbox): animierte Illustration + echte Screenshots (sofern vorhanden) in Geräte-Rahmen (Browser/Phone)
- 🧲 3D-Tilt auf den Karten, Scroll-Reveals, animierter Tech-Ticker & Zähler
- 🔎 Filter nach Kategorie (Apps, Health, Games, Dev-Tools)
- 🏷️ Ehrliche Status-Badges (Live / Download / Auf Anfrage) und „Konto nötig“-Hinweis
- 📱 Voll responsive, `prefers-reduced-motion`-freundlich, mit Skip-Link & Fokus-Ringen
- 🌗 Hell/Dunkel-Umschalter (Standard dunkel, Wahl lokal gespeichert)
- 💬 „Frag mich“-Blase im Footer, führt zur Story-Seite
- ⏸️ Status „Pausiert“ für Produkte, die nicht mehr weiterentwickelt werden (`paused: true` in `js/data.js`)
- ♿ Lighthouse: Barrierefreiheit, Best Practices & SEO jeweils 100 (Kontraste nach WCAG AA)
- 🔎 sitemap.xml, robots.txt, Canonical-Links und strukturierte Daten (Schema.org Person)
- ⚖️ Impressum & Datenschutz, keine Cookies, kein Tracking, keine externen Font-Abrufe

## Technik

Reines **HTML/CSS/JS**, keine Build-Tools, keine Abhängigkeiten — läuft direkt auf
GitHub Pages.

```
index.html          # Struktur
css/styles.css      # komplettes Design
js/i18n.js          # UI-Texte DE/EN + Sprachumschaltung
js/data.js          # Produktdaten (Single Source of Truth) + STORIES für Detailseiten
js/mockups.js       # animierte CSS-Mockups pro Produkt (Startseite & Detailseiten)
js/main.js          # Rendering, Interaktion (Startseite)
js/product.js       # Rendering der Produkt-Detailseiten (Galerie, Tabs, Weitere Projekte)
js/theme.js         # Hell/Dunkel-Umschaltung (im <head> geladen)
js/ask.js           # „Frag mich“-Blase im Footer
js/legal.js         # Sprachumschaltung für Unterseiten (Warum, Impressum, Datenschutz)
produkt/<id>/       # Detailseiten der Lieblingsprojekte (generiert)
tools/gen-product-pages.js # erzeugt produkt/<id>/index.html aus STORIES
ueber-mich/         # kompakter Werdegang (DE/EN), Details auf LinkedIn
warum/              # Story-Seite „Warum ich selbst baue“ (DE/EN)
impressum/          # Impressum (DE/EN)
datenschutz/        # Datenschutzerklärung (DE/EN)
assets/fonts/       # selbst gehostete Schriften (@font-face steht direkt in css/styles.css)
assets/portrait.jpg # Porträt für Hero & Footer
assets/og-image.png # Social-Preview (Open Graph / Twitter)
assets/shots/       # echte Screenshots
```

## Lokal ansehen

```bash
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

## Neues Lieblingsprojekt mit Detailseite

1. In `js/data.js` unter `STORIES` einen Eintrag mit der Produkt-`id` ergänzen (`story` + `tech`, DE/EN).
2. `node tools/gen-product-pages.js` ausführen – erzeugt `produkt/<id>/index.html`.
   Neue Seite zusätzlich in `sitemap.xml` eintragen.
3. Startseite (Favoriten-Bereich + „Story & Details“-Button) aktualisiert sich automatisch.

---

Gebaut im Vibe-Coding-Stil. ✦
