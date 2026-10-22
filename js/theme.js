/**
 * Hell/Dunkel-Umschaltung. Wird synchron im <head> geladen, damit die Seite
 * nicht erst dunkel aufblitzt. Standard ist Dunkel (Markenlook); die Wahl
 * wird lokal gespeichert (localStorage), nichts wird übertragen.
 */
(() => {
  const KEY = 'site:theme';
  const COLORS = { dark: '#06060b', light: '#f5f4fa' };
  const root = document.documentElement;

  let theme = 'dark';
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {
    // ohne localStorage bleibt es beim Standard
  }

  function apply(next) {
    theme = next;
    root.dataset.theme = next;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', COLORS[next]);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(next === 'light'));
    });
  }

  apply(theme);

  const SUN = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.innerHTML = `<span class="tt-sun">${SUN}</span><span class="tt-moon">${MOON}</span>`;
      btn.setAttribute('aria-pressed', String(theme === 'light'));
      btn.addEventListener('click', () => {
        const next = theme === 'light' ? 'dark' : 'light';
        try { localStorage.setItem(KEY, next); } catch { /* optional */ }
        apply(next);
      });
    });
    apply(theme);
  });
})();
