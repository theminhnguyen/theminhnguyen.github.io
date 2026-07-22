/* ============================================================
   minh.studio — Interaktion, Rendering & Animationen
   ============================================================ */
(() => {
  'use strict';

  /* ---------- Kleine Helfer ---------- */

  // Schützt vor kaputtem Markup (und XSS), falls Produktdaten je aus
  // einer externen Quelle kommen. Kostet nichts, verhindert böse Überraschungen.
  const esc = (v) =>
    String(v ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const NUM_WORDS = [
    'Null', 'Ein', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht',
    'Neun', 'Zehn', 'Elf', 'Zwölf', 'Dreizehn', 'Vierzehn', 'Fünfzehn',
    'Sechzehn', 'Siebzehn', 'Achtzehn', 'Neunzehn', 'Zwanzig',
  ];
  const numWord = (n) => NUM_WORDS[n] || String(n);

  /* ---------- Individuelle CSS-Mockups pro Produkt ---------- */
  const MOCKUPS = {
    mediavault: () => `
      <div class="mock">
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-screen" style="background:linear-gradient(160deg,#1a1826,#0f0d19);padding:14px;gap:10px;display:flex;flex-direction:column">
            <div style="display:flex;gap:8px;align-items:center">
              <span style="width:22px;height:22px;border-radius:7px;background:linear-gradient(135deg,#818cf8,#6366f1)"></span>
              <b style="color:#edecf5;font-size:13px;letter-spacing:.2px">MediaVault</b>
            </div>
            <div style="display:flex;gap:6px">
              <span style="font-size:9px;color:#16151f;background:#edecf5;padding:3px 9px;border-radius:999px;font-weight:600">Alle</span>
              <span style="font-size:9px;color:#9995ad;border:1px solid #2a2740;padding:3px 9px;border-radius:999px">Filme</span>
              <span style="font-size:9px;color:#9995ad;border:1px solid #2a2740;padding:3px 9px;border-radius:999px">Mangas</span>
            </div>
            <div style="display:flex;gap:9px;background:#1a1826;border:1px solid #2a2740;border-radius:12px;padding:8px">
              <span style="width:34px;height:50px;border-radius:6px;background:linear-gradient(135deg,#c8763a,#e8a24a)"></span>
              <div style="flex:1;display:flex;flex-direction:column;gap:5px;justify-content:center">
                <span style="font-size:8px;color:#818cf8;font-weight:700">▦ Film</span>
                <span style="height:7px;width:75%;background:#3a3654;border-radius:4px"></span>
                <span style="font-size:8px;color:#fbbf24;background:rgba(234,138,12,.16);padding:2px 7px;border-radius:999px;align-self:flex-start">ab 16.12.2026</span>
              </div>
            </div>
            <div style="display:flex;gap:9px;background:#1a1826;border:1px solid #2a2740;border-radius:12px;padding:8px">
              <span style="width:34px;height:50px;border-radius:6px;background:linear-gradient(135deg,#ec4899,#a855f7)"></span>
              <div style="flex:1;display:flex;flex-direction:column;gap:5px;justify-content:center">
                <span style="font-size:8px;color:#f472b6;font-weight:700">▤ Manga</span>
                <span style="height:7px;width:60%;background:#3a3654;border-radius:4px"></span>
                <span style="font-size:8px;color:#60a5fa;background:rgba(37,99,235,.16);padding:2px 7px;border-radius:999px;align-self:flex-start">Laufend</span>
              </div>
            </div>
            <span class="m-tag">🎬 Auto-recherchiert · KI</span>
          </div>
        </div>
      </div>`,

    localflow: () => `
      <div class="mock">
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-screen m-lf">
            <div class="m-lf-head"><span class="m-lf-rec"></span>Aufnahme · ⌥ gehalten</div>
            <div class="m-lf-wave">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <div class="m-lf-text"><span class="m-lf-type">Hallo, das ist ein Diktat – lokal auf dem Mac.</span></div>
            <span class="m-tag">🎙 Whisper · 0 € · offline</span>
          </div>
        </div>
      </div>`,

    streetpulse: () => `
      <div class="mock">
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-screen m-street">
            <span class="m-lane"></span>
            <span class="m-veh v1"><b></b></span>
            <span class="m-veh v2"><b></b></span>
            <span class="m-veh v3"><b></b></span>
            <span class="m-scan"></span>
            <span class="m-tag">🚗 12 · 🚶 5 · ~38 km/h</span>
          </div>
        </div>
      </div>`,

    korbi: () => `
      <div class="mock">
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-screen">
            <div class="m-list-row"><span class="m-check done"></span><span class="m-line done" style="width:52%"></span><span class="m-pill">2×</span></div>
            <div class="m-list-row"><span class="m-check"></span><span class="m-line" style="width:64%"></span><span class="m-pill">500g</span></div>
            <div class="m-list-row"><span class="m-check done"></span><span class="m-line done" style="width:40%"></span></div>
            <div class="m-list-row"><span class="m-check"></span><span class="m-line" style="width:58%"></span><span class="m-pill">1l</span></div>
            <div class="m-list-row" style="border:0"><span class="m-check"></span><span class="m-line" style="width:46%"></span></div>
          </div>
        </div>
      </div>`,

    wonderdeck: () => `
      <div class="mock">
        <div class="m-deck">
          <div class="m-slide s1"></div>
          <div class="m-slide s2"></div>
          <div class="m-slide s3"><span class="sq t1"></span><span class="sq t2"></span><span class="sq t3"></span></div>
        </div>
      </div>`,

    'whoopi-dashboard': () => `
      <div class="mock">
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-screen m-hr">
            <div class="m-hr-top"><span class="m-bpm">72<small> bpm</small></span><span class="m-heart">🫀</span></div>
            <svg class="m-ecg" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0,30 L30,30 L38,30 L44,10 L52,52 L60,22 L68,30 L110,30 L118,30 L124,10 L132,52 L140,22 L148,30 L200,30" />
            </svg>
          </div>
        </div>
      </div>`,

    pixelpost: () => `
      <div class="mock">
        <div class="m-gb">
          <div class="m-gb-screen">
            <div class="sky"></div>
            <span class="m-npc a"></span>
            <span class="m-npc b"></span>
            <span class="m-hero-px"></span>
          </div>
          <div class="m-gb-dpad"></div>
          <div class="m-gb-ab"><i></i><i></i></div>
        </div>
      </div>`,

    'virtual-world-multiplayer': () => `
      <div class="mock" style="display:flex;justify-content:center">
        <div class="m-world">
          <div class="tiles"></div>
          <span class="m-boss"></span>
          <span class="m-player m-p1"></span>
          <span class="m-player m-p2"></span>
          <span class="m-player m-p3"></span>
          <span class="m-tag">◉ 3 online · Boss aktiv</span>
        </div>
      </div>`,

    tripmate: () => `
      <div class="mock" style="display:flex;justify-content:center">
        <div class="m-map">
          <span class="road r1"></span><span class="road r2"></span><span class="road r3"></span>
          <span class="m-pin a"></span><span class="m-pin b"></span><span class="m-pin c"></span>
        </div>
      </div>`,

    kudosedge: () => `
      <div class="mock m-kudos">
        <div class="m-kudos-card">
          <div class="m-kudos-head"><span class="m-ava"></span><span class="m-line" style="width:44%;height:9px"></span></div>
          <div class="m-badge-row"><span class="m-badge">✦ Teamwork</span><span class="m-badge">★ Impact</span></div>
          <span class="m-line" style="width:88%;height:8px;display:block;margin:8px 0"></span>
          <span class="m-line" style="width:66%;height:8px;display:block"></span>
          <div class="m-stars" style="margin-top:10px">★★★★★</div>
        </div>
      </div>`,

    boop: () => `
      <div class="mock m-boop">
        <div class="m-boop-bar"><span class="m-boop-icon"></span></div>
        <div class="m-boop-pivot">
          <span class="m-boop-rope"></span>
          <span class="m-boop-ball">🙂</span>
        </div>
      </div>`,

    'hogwarts-3d': () => `
      <div class="mock m-castle">
        <span class="m-cs-moon"></span>
        <span class="m-cs-star s1"></span><span class="m-cs-star s2"></span><span class="m-cs-star s3"></span>
        <span class="m-cs-star s4"></span><span class="m-cs-star s5"></span>
        <div class="m-cs-hill"></div>
        <div class="m-cs-tower t1"><i></i><b></b></div>
        <div class="m-cs-keep"><b class="w1"></b><b class="w2"></b><b class="w3"></b></div>
        <div class="m-cs-tower t2"><i></i><b></b></div>
        <div class="m-cs-tower t3"><i></i><b></b></div>
        <span class="m-cs-snitch">✦</span>
      </div>`,

    'claude-usage-monitor': () => `
      <div class="mock m-menubar">
        <div class="m-mb-top"><span class="dot-g"></span><span class="m-line" style="width:40%;height:7px"></span><b>68%</b></div>
        <div class="m-meter"><label><span>5-Std-Sitzung</span><span>68%</span></label><div class="m-track"><div class="m-fill" style="--to:68%"></div></div></div>
        <div class="m-meter"><label><span>Woche</span><span>42%</span></label><div class="m-track"><div class="m-fill w2" style="--to:42%"></div></div></div>
        <div class="m-meter"><label><span>Opus</span><span>81%</span></label><div class="m-track"><div class="m-fill w3" style="--to:81%"></div></div></div>
        <div class="m-spark">
          <i style="height:40%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:80%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:70%"></i>
        </div>
      </div>`,
  };

  /* ---------- Verfügbarkeit eines Produkts ---------- */
  // Ein Produkt kann eine echte Web-App sein ('app'), nur ein Download
  // ('download') oder gar nichts Öffentliches (null). Danach richten sich
  // Badge, Button-Beschriftung und der Live-Demo-Zähler.
  const KIND = {
    app:      { badge: 'Live',        cls: 'status-live',     action: 'Live testen ↗',   lightbox: 'Live testen ↗' },
    download: { badge: 'Download',    cls: 'status-download', action: 'Zum Download ↗',  lightbox: 'Download ↗' },
    none:     { badge: 'Auf Anfrage', cls: 'status-soon',     action: 'Anfragen',        lightbox: '' },
  };
  const kindOf = (p) => KIND[p.liveKind || 'none'] || KIND.none;

  /* ---------- Karten rendern ---------- */
  const grid = document.getElementById('product-grid');

  function cardHTML(p) {
    const mockup = (MOCKUPS[p.id] || (() => ''))();
    const k = kindOf(p);

    const actions = [
      `<button class="card-btn primary" data-demo="${esc(p.id)}">▶ Demo ansehen</button>`,
    ];
    if (p.live) {
      actions.push(
        `<a class="card-btn" href="${esc(p.live)}" target="_blank" rel="noopener">${k.action}</a>`
      );
    } else {
      actions.push(`<a class="card-btn" href="#kontakt">${k.action}</a>`);
    }

    // Overlay auf der Vorschau-Bühne öffnet dieselbe Demo. Rein dekorativ –
    // es dupliziert den sichtbaren Button darunter, deshalb aus Tab-Reihenfolge
    // und Screenreader-Ausgabe genommen.
    const previewOverlay =
      `<button class="stage-preview-btn" data-demo="${esc(p.id)}" tabindex="-1" aria-hidden="true">
         <span class="play">▶</span> Demo ansehen
       </button>`;

    const tags = p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
    const accountHint = p.account
      ? `<span class="need-account" title="Zum Ausprobieren ist ein Konto nötig">🔑 Konto nötig</span>`
      : '';

    return `
      <article class="card ${p.featured ? 'featured' : ''}" data-category="${esc(p.category)}"
        style="--card-accent:${esc(p.accent)};--card-accent-2:${esc(p.accent2)};--card-glow:${hexToGlow(p.accent)}">
        <span class="card-accent-line"></span>
        <span class="card-status ${k.cls}"><span class="dot"></span>${k.badge}</span>
        <div class="card-body">
          <div class="card-stage">
            ${mockup}
            ${previewOverlay}
          </div>
          <div class="card-content">
            <div class="card-top">
              <span class="card-emoji">${esc(p.emoji)}</span>
              <div>
                <div class="card-name">${esc(p.name)}</div>
                <div class="card-cat">${esc(p.categoryLabel)}</div>
              </div>
            </div>
            <p class="card-tagline">${esc(p.tagline)}</p>
            <p class="card-desc">${esc(p.description)}</p>
            <div class="card-tags">${tags}</div>
            <div class="card-actions">${actions.join('')}${accountHint}</div>
          </div>
        </div>
      </article>`;
  }

  function hexToGlow(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ''));
    if (!m) return 'rgba(139,92,246,0.45)'; // Fallback: Standard-Akzent
    const c = m[1];
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    return `rgba(${r},${g},${b},0.45)`;
  }

  // Featured zuerst, damit das Bento-Layout stimmt
  const ordered = [...PROJECTS].sort((a, b) => (b.featured === true) - (a.featured === true));
  grid.innerHTML = ordered.map(cardHTML).join('');

  /* ---------- Bento-Layout: keine halbe Karte allein in der letzten Reihe ---------- */
  // Normale Karten belegen je eine halbe Reihe. Bleibt am Ende eine übrig
  // (ungerade Anzahl – z. B. beim Filtern), bekommt sie die volle Breite.
  function layoutGrid() {
    const visible = [...grid.querySelectorAll('.card:not(.featured):not(.hide)')];
    grid.querySelectorAll('.card.span-full').forEach((c) => c.classList.remove('span-full'));
    if (visible.length % 2 === 1) visible[visible.length - 1].classList.add('span-full');
  }
  layoutGrid();

  /* ---------- Filter ---------- */
  const filterBar = document.getElementById('filters');
  filterBar.innerHTML = FILTERS.map(
    (f, i) =>
      `<button type="button" class="filter-chip ${i === 0 ? 'active' : ''}" data-filter="${esc(f.id)}" aria-pressed="${i === 0}">${esc(f.label)}</button>`
  ).join('');

  filterBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach((c) => {
      const on = c === chip;
      c.classList.toggle('active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    const f = chip.dataset.filter;
    grid.querySelectorAll('.card').forEach((card) => {
      const show = f === 'all' || card.dataset.category === f;
      card.classList.toggle('hide', !show);
    });
    layoutGrid();
  });

  /* ---------- Tech-Ticker ---------- */
  const track = document.getElementById('ticker-track');
  const tickerHTML = TECH_TICKER.map((t) => `<span class="ticker-item">${esc(t)}</span>`).join('');
  track.innerHTML = tickerHTML + tickerHTML; // verdoppeln für nahtlose Schleife

  /* ---------- Demo-Großvorschau (Lightbox) ---------- */
  const lb = document.getElementById('lightbox');
  const lbTitle = document.getElementById('lightbox-title');
  const lbStage = document.getElementById('lightbox-stage');
  const lbContact = document.getElementById('lightbox-contact');
  const lbLive = document.getElementById('lightbox-live');
  const lbClose = document.getElementById('lightbox-close');

  const byId = (id) => PROJECTS.find((p) => p.id === id);

  function demoSceneHTML(p) {
    const mockup = (MOCKUPS[p.id] || (() => ''))();
    const feats = (p.features || []).map((f) => `<li>${esc(f)}</li>`).join('');
    const tags = p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
    const shots = p.shots || [];
    const type = p.shotType || 'desktop';

    // Medien: echte Screenshots zuerst, dann die animierte Illustration
    const media = [...shots.map((src) => ({ kind: 'shot', src })), { kind: 'mock' }];

    const stage = media
      .map((m, i) => {
        const act = i === 0 ? ' active' : '';
        if (m.kind === 'shot') {
          return `<figure class="gal-item${act}" data-idx="${i}"><div class="frame frame-${esc(type)}"><img loading="lazy" src="${esc(m.src)}" alt="${esc(p.name)} – echter Screenshot"></div></figure>`;
        }
        return `<figure class="gal-item${act}" data-idx="${i}"><div class="mock-holder">${mockup}</div></figure>`;
      })
      .join('');

    const thumbs = media
      .map((m, i) => {
        const act = i === 0 ? ' active' : '';
        const inner =
          m.kind === 'shot'
            ? `<img src="${esc(m.src)}" alt="">`
            : `<span class="thumb-mock">${esc(p.emoji)}</span>`;
        return `<button type="button" class="gal-thumb${act}" data-idx="${i}" data-kind="${m.kind}" aria-label="Ansicht ${i + 1}">${inner}</button>`;
      })
      .join('');

    const startBadge = media[0].kind === 'shot' ? 'Echter Screenshot' : 'Animierte Demo';
    const thumbsRow = media.length > 1 ? `<div class="demo-thumbs">${thumbs}</div>` : '';

    const notes = [];
    if (p.account) {
      notes.push(`<p class="demo-note">🔑 Zum Ausprobieren ist ein kostenloses Konto nötig (Google oder E-Mail-Link).</p>`);
    }
    if (p.fanProject) {
      notes.push(`<p class="demo-note">⚖️ Nicht-kommerzielles Fan-Projekt – steht nicht zur Lizenzierung.</p>`);
    }

    return `
      <div class="demo-scene" style="--card-accent:${esc(p.accent)};--card-accent-2:${esc(p.accent2)};--card-glow:${hexToGlow(p.accent)}">
        <div class="demo-visual">
          <span class="demo-badge" id="demo-badge"><span class="dot"></span>${startBadge}</span>
          <div class="demo-gallery">${stage}</div>
          ${thumbsRow}
        </div>
        <aside class="demo-info">
          <span class="demo-emoji">${esc(p.emoji)}</span>
          <h3 class="demo-name">${esc(p.name)}</h3>
          <p class="demo-tagline">${esc(p.tagline)}</p>
          <p class="demo-desc">${esc(p.description)}</p>
          <ul class="demo-features">${feats}</ul>
          <div class="demo-tags">${tags}</div>
          ${notes.join('')}
        </aside>
      </div>`;
  }

  // Aufräum-Timer der Lightbox. Ohne das Handle würde ein schnelles
  // Schließen-und-wieder-Öffnen die frisch gerenderte Bühne leer räumen.
  let stageClearTimer = null;

  function openDemo(id) {
    const p = byId(id);
    if (!p) return;

    clearTimeout(stageClearTimer);
    stageClearTimer = null;

    lbTitle.textContent = p.name + ' · Demo';

    const k = kindOf(p);
    if (p.live && k.lightbox) {
      lbLive.href = p.live;
      lbLive.textContent = k.lightbox;
      lbLive.hidden = false;
    } else {
      lbLive.removeAttribute('href');
      lbLive.hidden = true;
    }

    // Fan-Projekte bekommen keinen Lizenz-/Anfrage-CTA
    lbContact.hidden = !!p.fanProject;

    lbStage.innerHTML = demoSceneHTML(p);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeDemo() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    clearTimeout(stageClearTimer);
    stageClearTimer = setTimeout(() => {
      lbStage.innerHTML = '';
      stageClearTimer = null;
    }, 300);
  }

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-demo]');
    if (!btn) return;
    openDemo(btn.dataset.demo);
  });
  lbContact.addEventListener('click', closeDemo);
  lbClose.addEventListener('click', closeDemo);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeDemo(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeDemo();
  });

  // Galerie: zwischen Screenshots & Illustration umschalten
  lbStage.addEventListener('click', (e) => {
    const thumb = e.target.closest('.gal-thumb');
    if (!thumb) return;
    const idx = thumb.dataset.idx;
    lbStage.querySelectorAll('.gal-thumb').forEach((t) => t.classList.toggle('active', t === thumb));
    lbStage.querySelectorAll('.gal-item').forEach((it) => it.classList.toggle('active', it.dataset.idx === idx));
    const badge = document.getElementById('demo-badge');
    if (badge) badge.innerHTML = `<span class="dot"></span>${thumb.dataset.kind === 'mock' ? 'Animierte Demo' : 'Echter Screenshot'}`;
  });

  /* ---------- Reveal on Scroll ---------- */
  document.querySelectorAll('.card').forEach((c) => c.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Zähler-Animation ---------- */
  // Alle drei Zahlen kommen aus den echten Daten, damit sie beim Hinzufügen
  // neuer Produkte oder Technologien automatisch stimmen (kein Hardcoden).
  const nProducts = PROJECTS.length;
  // Nur echte, im Browser lauffähige Apps zählen als "Live-Demo" – ein
  // GitHub-Release ist ein Download, keine Demo.
  const nDemos = PROJECTS.filter((p) => p.liveKind === 'app').length;
  const nTech = TECH_TICKER.length;

  const COUNT_SOURCES = { products: nProducts, demos: nDemos, tech: nTech };
  document.querySelectorAll('[data-count-src]').forEach((el) => {
    const v = COUNT_SOURCES[el.dataset.countSrc];
    if (typeof v === 'number') el.dataset.count = String(v);
  });

  // Fließtext, der die Produktzahl nennt, ebenfalls aus den Daten speisen
  document.querySelectorAll('[data-count-word="products"]').forEach((el) => {
    el.textContent = numWord(nProducts);
  });

  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count, 10);
      if (!Number.isFinite(target)) { cio.unobserve(el); return; }
      let cur = 0;
      const step = Math.max(1, Math.round(target / 28));
      const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  /* ---------- Nav-Scroll-Zustand ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Cursor-Glow + 3D-Tilt ---------- */
  const glow = document.querySelector('.cursor-glow');
  let rafId = null;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        glow.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        rafId = null;
      });
    }
  });

  // Sanfter 3D-Tilt auf Karten (nur mit Zeiger und ohne reduzierte Bewegung)
  const wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.matchMedia('(hover: hover)').matches && wantsMotion) {
    grid.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
    });

    // Nur ein Handler pro Karte. Ein Capture-Listener auf dem Grid würde auch
    // bei jedem Verlassen eines *Kind*-Elements feuern und den Tilt mitten im
    // Hover zurücksetzen (sichtbares Zucken).
    grid.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Kontaktformular (Web3Forms – Adresse bleibt serverseitig) ---------- */
  const cform = document.getElementById('contact-form');
  if (cform) {
    const cstatus = document.getElementById('cf-status');
    const csubmit = cform.querySelector('.cf-submit');
    const clabel = cform.querySelector('.cf-label');
    cform.addEventListener('submit', async (e) => {
      e.preventDefault();
      cstatus.className = 'cf-status';
      cstatus.textContent = '';
      if (!cform.checkValidity()) { cform.reportValidity(); return; }
      csubmit.disabled = true;
      const orig = clabel.textContent;
      clabel.textContent = 'Wird gesendet …';
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(cform),
        });
        const json = await res.json();
        if (json.success) {
          cform.reset();
          cstatus.className = 'cf-status ok';
          cstatus.textContent = '✓ Danke! Deine Nachricht ist unterwegs – ich melde mich bald.';
        } else {
          throw new Error(json.message || 'Fehler');
        }
      } catch (err) {
        cstatus.className = 'cf-status err';
        cstatus.textContent = '✗ Das hat leider nicht geklappt. Bitte später nochmal versuchen.';
      } finally {
        csubmit.disabled = false;
        clabel.textContent = orig;
      }
    });
  }

  /* ---------- Jahr im Footer ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
