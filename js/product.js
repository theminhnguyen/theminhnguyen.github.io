/* ============================================================
   Produkt-Detailseite (/produkt/<id>/)
   Rendert Galerie, Tabs (Worum es geht / Highlights / Technik)
   und "Weitere Projekte" aus js/data.js + js/mockups.js.
   ============================================================ */
(() => {
  'use strict';

  const ROOT = document.body.dataset.root || '../../';
  const ID = document.body.dataset.product;
  const raw = PROJECTS.find((p) => p.id === ID);
  const app = document.getElementById('product-app');
  if (!raw || !STORIES[ID] || !app) return;

  setLang(detectInitialLang());

  const esc = (v) =>
    String(v ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const localize = (p) => (getLang() === 'en' && p.en ? { ...p, ...p.en } : p);
  const storyOf = (id) => STORIES[id][getLang()] || STORIES[id].de;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const KIND = {
    app: { badge: 'kindLiveBadge', cls: 'status-live', action: 'kindLiveAction' },
    download: { badge: 'kindDownloadBadge', cls: 'status-download', action: 'kindDownloadAction' },
    none: { badge: 'kindNoneBadge', cls: 'status-soon', action: 'productAskCta' },
  };

  let activeTab = 0;
  let galleryTimer = null;

  function galleryHTML(p) {
    const type = p.shotType || 'desktop';
    const mockup = (MOCKUPS[p.id] || (() => ''))();
    const media = [{ kind: 'mock' }, ...(p.shots || []).map((src) => ({ kind: 'shot', src }))];
    const items = media.map((m, i) => {
      const act = i === 0 ? ' active' : '';
      const inner = m.kind === 'shot'
        ? `<div class="frame frame-${esc(type)}"><img src="${esc(ROOT + m.src)}" alt="${esc(p.name)} ${esc(t('screenshotAltSuffix'))}"></div>`
        : `<div class="mock-holder">${mockup}</div>`;
      return `<figure class="gal-item${act}" data-idx="${i}">${inner}</figure>`;
    }).join('');
    const thumbs = media.length > 1
      ? `<div class="demo-thumbs">${media.map((m, i) => `<button type="button" class="gal-thumb${i === 0 ? ' active' : ''}" data-idx="${i}" data-kind="${m.kind}" aria-label="${esc(t('viewLabel'))} ${i + 1}">${
          m.kind === 'shot' ? `<img src="${esc(ROOT + m.src)}" alt="">` : `<span class="thumb-mock">${esc(p.emoji)}</span>`
        }</button>`).join('')}</div>`
      : '';
    return `
      <div class="demo-visual pd-visual">
        <span class="demo-badge" id="demo-badge"><span class="dot"></span>${esc(t('animatedDemoBadge'))}</span>
        <div class="demo-gallery">${items}</div>
        ${thumbs}
      </div>`;
  }

  function tabPanel(p, s, i) {
    if (i === 0) return s.story.map((para) => `<p>${esc(para)}</p>`).join('');
    if (i === 1) return `<ul class="demo-features">${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`;
    return `<dl class="pd-tech">${s.tech.map(([h, d]) => `<dt>${esc(h)}</dt><dd>${esc(d)}</dd>`).join('')}</dl>`;
  }

  function moreHTML() {
    const others = Object.keys(STORIES).filter((id) => id !== ID);
    return others.map((id) => {
      const o = localize(PROJECTS.find((x) => x.id === id));
      return `<a class="pd-more-item" href="${ROOT}produkt/${esc(id)}/" style="--card-accent:${esc(o.accent)}">
        <span class="pd-more-emoji">${esc(o.emoji)}</span>
        <span><b>${esc(o.name)}</b><small>${esc(o.tagline)}</small></span>
      </a>`;
    }).join('');
  }

  function render() {
    const p = localize(raw);
    const s = storyOf(ID);
    const k = KIND[p.liveKind] || KIND.none;
    const badge = p.paused ? { badge: 'kindPausedBadge', cls: 'status-paused' } : k;
    const tabs = [t('productTabAbout'), t('productTabHighlights'), t('productTabTech')];

    const cta = p.live
      ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener">${esc(t(k.action))}</a>`
      : `<a class="btn btn-primary" href="${ROOT}#kontakt">${esc(t(k.action))}</a>`;
    const notes = [
      p.account ? `<p class="demo-note">${esc(t('accountNote'))}</p>` : '',
      !p.live ? `<p class="demo-note">${esc(t('productOnRequestNote'))}</p>` : '',
    ].join('');

    app.style.setProperty('--card-accent', p.accent);
    app.style.setProperty('--card-accent-2', p.accent2);
    app.innerHTML = `
      <a class="legal-back pd-back" href="${ROOT}#produkte">${esc(t('productBack'))}</a>
      <div class="pd-grid">
        ${galleryHTML(p)}
        <aside class="pd-info">
          <div class="pd-head">
            <span class="demo-emoji">${esc(p.emoji)}</span>
            <div>
              <h1 class="demo-name">${esc(p.name)}</h1>
              <p class="demo-tagline">${esc(p.tagline)}</p>
            </div>
          </div>
          <div class="pd-chips">
            <span class="card-status pd-status ${badge.cls}"><span class="dot"></span>${esc(t(badge.badge))}</span>
            ${p.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}
          </div>
          <div class="pd-tabs" role="tablist">
            ${tabs.map((label, i) => `<button type="button" role="tab" id="pd-tab-${i}" aria-controls="pd-panel" aria-selected="${i === activeTab}" tabindex="${i === activeTab ? 0 : -1}" data-tab="${i}">${esc(label)}</button>`).join('')}
          </div>
          <div class="pd-panel" id="pd-panel" role="tabpanel" aria-labelledby="pd-tab-${activeTab}">${tabPanel(p, s, activeTab)}</div>
          <div class="pd-actions">${cta}</div>
          ${notes}
        </aside>
      </div>
      <section class="pd-more">
        <h2>${esc(t('productMore'))}</h2>
        <div class="pd-more-grid">${moreHTML()}</div>
      </section>`;

    document.title = `${p.name} · The Minh Nguyen`;
    startAutoplay();
  }

  function showSlide(idx) {
    app.querySelectorAll('.gal-thumb').forEach((th) => th.classList.toggle('active', th.dataset.idx === String(idx)));
    app.querySelectorAll('.gal-item').forEach((it) => it.classList.toggle('active', it.dataset.idx === String(idx)));
    const thumb = app.querySelector(`.gal-thumb[data-idx="${idx}"]`);
    const badge = document.getElementById('demo-badge');
    if (badge && thumb) {
      badge.innerHTML = `<span class="dot"></span>${esc(thumb.dataset.kind === 'mock' ? t('animatedDemoBadge') : t('realScreenshotBadge'))}`;
    }
  }

  // Galerie blättert sanft weiter, bis jemand selbst eine Ansicht wählt
  function startAutoplay() {
    clearInterval(galleryTimer);
    const count = app.querySelectorAll('.gal-item').length;
    if (reduceMotion || count < 2) return;
    let i = 0;
    galleryTimer = setInterval(() => {
      if (document.hidden) return;
      i = (i + 1) % count;
      showSlide(i);
    }, 5000);
  }

  app.addEventListener('click', (e) => {
    const thumb = e.target.closest('.gal-thumb');
    if (thumb) {
      clearInterval(galleryTimer);
      showSlide(thumb.dataset.idx);
      return;
    }
    const tab = e.target.closest('[data-tab]');
    if (tab) selectTab(+tab.dataset.tab, false);
  });

  function selectTab(i, focus) {
    activeTab = i;
    const p = localize(raw);
    app.querySelectorAll('[data-tab]').forEach((b) => {
      const on = +b.dataset.tab === i;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    const panel = document.getElementById('pd-panel');
    panel.setAttribute('aria-labelledby', `pd-tab-${i}`);
    panel.innerHTML = tabPanel(p, storyOf(ID), i);
  }

  // Pfeiltasten zwischen den Tabs (WAI-ARIA Tabs-Pattern)
  app.addEventListener('keydown', (e) => {
    if (!e.target.closest('[role="tab"]')) return;
    const n = 3;
    if (e.key === 'ArrowRight') selectTab((activeTab + 1) % n, true);
    else if (e.key === 'ArrowLeft') selectTab((activeTab + n - 1) % n, true);
    else return;
    e.preventDefault();
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-opt');
      const next = opt ? opt.dataset.lang : (getLang() === 'de' ? 'en' : 'de');
      if (next !== getLang()) setLang(next);
    });
  }
  window.onLanguageChanged = render;

  render();
})();
