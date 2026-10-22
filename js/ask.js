/**
 * "Frag mich"-Blase im Footer: kleines Porträt, das bei Interesse eine
 * Sprechblase aufklappt und zur Story-Seite (warum/) führt.
 *
 * - Beim ersten Besuch (pro Sitzung) erscheint sie, wenn man ganz unten ist
 *   und trotzdem weiterscrollt: erst Tipp-Punkte, dann die Frage.
 * - Danach: Maus drüber/Fokus öffnet, Verlassen schließt.
 * - Touch: erster Tipp zeigt die Frage, zweiter folgt dem Link.
 * Der Platz ist im Footer fest reserviert, damit nichts springt.
 */
(() => {
  'use strict';

  const footer = document.querySelector('.footer-inner');
  if (!footer) return;

  const root = (document.currentScript && document.currentScript.dataset.root) || '';
  const SEEN_KEY = 'site:ask-seen';
  const TYPING_MS = 1400;
  const OPEN_MS = 6000;
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;

  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'de');
  const TEXT = {
    de: 'Neugierig, warum ich das alles baue?',
    en: 'Curious why I build all this?',
  };

  const el = document.createElement('a');
  el.className = 'ask';
  el.href = `${root}warum/`;
  el.innerHTML = `
    <span class="ask-bubble" aria-hidden="true">
      <span class="ask-dots"><i></i><i></i><i></i></span>
      <span class="ask-text"></span>
    </span>
    <img class="ask-avatar" src="${root}assets/portrait.jpg" alt="" width="44" height="44" />`;
  footer.appendChild(el);

  const textEl = el.querySelector('.ask-text');
  const syncText = () => {
    textEl.textContent = TEXT[lang()];
    el.setAttribute('aria-label', TEXT[lang()]);
  };
  syncText();
  // Sprachwechsel ändert <html lang> – Text mitziehen
  new MutationObserver(syncText).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  let closeTimer = null;
  const open = (typing) => {
    clearTimeout(closeTimer);
    el.classList.add('open');
    el.classList.toggle('typing', !!typing);
  };
  const close = () => el.classList.remove('open', 'typing');
  const closeLater = (ms) => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => { if (!el.matches(':hover')) close(); }, ms);
  };

  let seen = false;
  try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* egal */ }

  if (seen) {
    el.classList.add('ready');
  } else {
    let fired = false;
    let touchStartY = 0;
    const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    const reveal = () => {
      if (fired) return;
      fired = true;
      try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* egal */ }
      el.classList.add('ready');
      if (calm) { open(false); closeLater(OPEN_MS); return; }
      setTimeout(() => open(true), 300);
      setTimeout(() => { open(false); closeLater(OPEN_MS); }, 300 + TYPING_MS);
    };

    window.addEventListener('wheel', (e) => { if (e.deltaY > 0 && atBottom()) reveal(); }, { passive: true });
    window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (touchStartY - e.touches[0].clientY > 30 && atBottom()) reveal();
    }, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'PageDown', 'End', ' '].includes(e.key) && atBottom()) reveal();
    });
    // Sehr kurze Seiten haben nichts zum Weiterscrollen
    if (document.documentElement.scrollHeight <= window.innerHeight + 4) setTimeout(reveal, 2500);
  }

  el.addEventListener('mouseenter', () => { if (el.classList.contains('ready')) open(false); });
  el.addEventListener('mouseleave', () => close());
  el.addEventListener('focus', () => { el.classList.add('ready'); open(false); });
  el.addEventListener('blur', close);
  el.addEventListener('click', (e) => {
    if (canHover || el.classList.contains('open')) return;
    e.preventDefault();
    el.classList.add('ready');
    open(false);
    closeLater(OPEN_MS);
  });
})();
