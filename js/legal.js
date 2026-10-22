/**
 * Sprachumschaltung für die Unterseiten Impressum & Datenschutz.
 * Nutzt denselben localStorage-Schlüssel wie die Startseite (js/i18n.js),
 * damit die gewählte Sprache seitenübergreifend erhalten bleibt.
 */
(() => {
  const KEY = 'site:lang';
  const titles = {
    de: document.body.dataset.titleDe,
    en: document.body.dataset.titleEn,
  };

  function apply(lang) {
    document.documentElement.lang = lang;
    if (titles[lang]) document.title = `${titles[lang]} · The Minh Nguyen`;
    document.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  let lang = 'de';
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'de' || saved === 'en') lang = saved;
  } catch {
    // localStorage nicht verfügbar – Deutsch bleibt Standard.
  }
  apply(lang);

  // Produktzahl aus js/data.js, falls die Seite die Daten lädt (z. B. Über mich)
  if (typeof PROJECTS !== 'undefined') {
    document.querySelectorAll('[data-count-products]').forEach((el) => {
      el.textContent = String(PROJECTS.length);
    });
  }

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-opt');
      lang = opt ? opt.dataset.lang : (lang === 'de' ? 'en' : 'de');
      try { localStorage.setItem(KEY, lang); } catch { /* optional */ }
      apply(lang);
    });
  }
})();
