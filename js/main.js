/* ============================================================
   minh.studio — Interaktion, Rendering & Animationen
   ============================================================ */
(() => {
  'use strict';

  /* ---------- Individuelle CSS-Mockups pro Produkt ---------- */
  const MOCKUPS = {
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

  /* ---------- Karten rendern ---------- */
  const grid = document.getElementById('product-grid');

  function cardHTML(p) {
    const mockup = (MOCKUPS[p.id] || (() => ''))();

    // In-Page-Demo + Link zur echten App (falls vorhanden), sonst Anfragen
    const actions = [
      `<button class="card-btn primary" data-demo="${p.id}">▶ Demo ansehen</button>`,
    ];
    if (p.live) {
      actions.push(`<a class="card-btn" href="${p.live}" target="_blank" rel="noopener">Live testen ↗</a>`);
    } else {
      actions.push(`<a class="card-btn" href="#kontakt">Anfragen</a>`);
    }

    // Overlay auf der Vorschau-Bühne öffnet dieselbe Demo
    const previewOverlay =
      `<button class="stage-preview-btn" data-demo="${p.id}" aria-label="Demo von ${p.name} ansehen">
         <span class="play">▶</span> Demo ansehen
       </button>`;

    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');

    return `
      <article class="card ${p.featured ? 'featured' : ''}" data-category="${p.category}"
        style="--card-accent:${p.accent};--card-accent-2:${p.accent2};--card-glow:${hexToGlow(p.accent)}">
        <span class="card-accent-line"></span>
        <span class="card-status status-demo"><span class="dot"></span>Demo</span>
        <div class="card-body">
          <div class="card-stage">
            ${mockup}
            ${previewOverlay}
          </div>
          <div class="card-content">
            <div class="card-top">
              <span class="card-emoji">${p.emoji}</span>
              <div>
                <div class="card-name">${p.name}</div>
                <div class="card-cat">${p.categoryLabel}</div>
              </div>
            </div>
            <p class="card-tagline">${p.tagline}</p>
            <p class="card-desc">${p.description}</p>
            <div class="card-tags">${tags}</div>
            <div class="card-actions">${actions.join('')}</div>
          </div>
        </div>
      </article>`;
  }

  function hexToGlow(hex) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return `rgba(${r},${g},${b},0.45)`;
  }

  // Featured zuerst, damit das Bento-Layout stimmt
  const ordered = [...PROJECTS].sort((a, b) => (b.featured === true) - (a.featured === true));
  grid.innerHTML = ordered.map(cardHTML).join('');

  /* ---------- Filter ---------- */
  const filterBar = document.getElementById('filters');
  filterBar.innerHTML = FILTERS.map(
    (f, i) =>
      `<button class="filter-chip ${i === 0 ? 'active' : ''}" data-filter="${f.id}" role="tab">${f.label}</button>`
  ).join('');

  filterBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    grid.querySelectorAll('.card').forEach((card) => {
      const show = f === 'all' || card.dataset.category === f;
      card.classList.toggle('hide', !show);
    });
  });

  /* ---------- Tech-Ticker ---------- */
  const track = document.getElementById('ticker-track');
  const tickerHTML = TECH_TICKER.map((t) => `<span class="ticker-item">${t}</span>`).join('');
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
    const feats = (p.features || []).map((f) => `<li>${f}</li>`).join('');
    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
    const shots = p.shots || [];
    const type = p.shotType || 'desktop';

    // Medien: echte Screenshots zuerst, dann die animierte Illustration
    const media = [...shots.map((src) => ({ kind: 'shot', src })), { kind: 'mock' }];

    const stage = media
      .map((m, i) => {
        const act = i === 0 ? ' active' : '';
        if (m.kind === 'shot') {
          return `<figure class="gal-item${act}" data-idx="${i}"><div class="frame frame-${type}"><img loading="lazy" src="${m.src}" alt="${p.name} – echter Screenshot"></div></figure>`;
        }
        return `<figure class="gal-item${act}" data-idx="${i}"><div class="mock-holder">${mockup}</div></figure>`;
      })
      .join('');

    const thumbs = media
      .map((m, i) => {
        const act = i === 0 ? ' active' : '';
        const inner =
          m.kind === 'shot'
            ? `<img src="${m.src}" alt="">`
            : `<span class="thumb-mock">${p.emoji}</span>`;
        return `<button class="gal-thumb${act}" data-idx="${i}" data-kind="${m.kind}" aria-label="Ansicht ${i + 1}">${inner}</button>`;
      })
      .join('');

    const startBadge = media[0].kind === 'shot' ? 'Echter Screenshot' : 'Animierte Demo';
    const thumbsRow = media.length > 1 ? `<div class="demo-thumbs">${thumbs}</div>` : '';

    return `
      <div class="demo-scene" style="--card-accent:${p.accent};--card-accent-2:${p.accent2}">
        <div class="demo-visual">
          <span class="demo-badge" id="demo-badge"><span class="dot"></span>${startBadge}</span>
          <div class="demo-gallery">${stage}</div>
          ${thumbsRow}
        </div>
        <aside class="demo-info">
          <span class="demo-emoji">${p.emoji}</span>
          <h3 class="demo-name">${p.name}</h3>
          <p class="demo-tagline">${p.tagline}</p>
          <p class="demo-desc">${p.description}</p>
          <ul class="demo-features">${feats}</ul>
          <div class="demo-tags">${tags}</div>
        </aside>
      </div>`;
  }

  function openDemo(id) {
    const p = byId(id);
    if (!p) return;
    lbTitle.textContent = p.name + ' · Demo';
    if (p.live) { lbLive.href = p.live; lbLive.style.display = ''; } else { lbLive.style.display = 'none'; }
    lbStage.innerHTML = demoSceneHTML(p);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDemo() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { lbStage.innerHTML = ''; }, 300);
  }

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-demo]');
    if (!btn) return;
    openDemo(btn.dataset.demo);
  });
  lbContact.addEventListener('click', closeDemo);
  lbClose.addEventListener('click', closeDemo);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeDemo(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) closeDemo(); });

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
  const revealables = () => document.querySelectorAll('.reveal, .card');
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
  revealables().forEach((el) => io.observe(el));

  /* ---------- Zähler-Animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count, 10);
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

  // Sanfter 3D-Tilt auf Karten (nur mit Zeiger)
  if (window.matchMedia('(hover: hover)').matches) {
    grid.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
    });
    grid.addEventListener('mouseleave', (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (card) card.style.transform = '';
    }, true);
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
