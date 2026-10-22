// Erzeugt /produkt/<id>/index.html für alle Einträge in STORIES (js/data.js).
// Aufruf aus dem Repo-Root: node tools/gen-product-pages.js
const fs = require('fs');
eval(fs.readFileSync('js/data.js', 'utf8') + ';global.PROJECTS=PROJECTS;global.STORIES=STORIES;');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const id of Object.keys(STORIES)) {
  const p = PROJECTS.find((x) => x.id === id);
  const desc = `${p.tagline} ${STORIES[id].de.story[0]}`;
  const img = p.shots && p.shots[0] ? `https://theminhnguyen.github.io/${p.shots[0]}` : 'https://theminhnguyen.github.io/assets/og-image.png';
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(p.name)} · The Minh Nguyen</title>
  <meta name="description" content="${esc(desc)}" />
  <meta name="theme-color" content="#06060b" />
  <meta property="og:title" content="${esc(p.name)} · The Minh Nguyen" />
  <meta property="og:description" content="${esc(p.tagline)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://theminhnguyen.github.io/produkt/${id}/" />
  <meta property="og:image" content="${img}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="../../assets/fonts/fonts.css" />
  <script src="../../js/theme.js"></script>
  <link rel="stylesheet" href="../../css/styles.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
</head>
<!-- Erzeugt aus js/data.js (STORIES). Inhalte dort pflegen, nicht hier. -->
<body class="product-page" data-product="${id}" data-root="../../">
  <a class="skip-link" href="#product-app" data-i18n="skipLink">Zum Inhalt springen</a>
  <div class="bg-field" aria-hidden="true">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="grid-overlay"></div>
  </div>

  <header class="nav scrolled">
    <a class="nav-brand" href="../../">
      <span class="nav-mark">✦</span>
      <span>minh<span class="nav-dot">.</span>studio</span>
    </a>
    <nav class="nav-links" aria-label="Hauptnavigation" data-i18n-aria-label="navAriaLabel">
      <a href="../../#produkte" data-i18n="navProducts">Produkte</a>
      <a href="../../warum/" data-i18n="navStory">Story</a>
      <a href="../../ueber-mich/" data-i18n="navCv">Über mich</a>
      <button class="theme-toggle" type="button" data-theme-toggle aria-label="Hell/Dunkel umschalten" data-i18n-aria-label="themeToggleAria"></button>
      <button class="lang-toggle" id="lang-toggle" type="button" aria-label="Sprache wechseln" data-i18n-aria-label="langToggleAria">
        <span class="lang-opt active" data-lang="de">DE</span>
        <span class="lang-opt" data-lang="en">EN</span>
      </button>
    </nav>
  </header>

  <main class="product-detail" id="product-app">
    <noscript><p>${esc(p.name)} – ${esc(p.tagline)}</p></noscript>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <p class="footer-equation">
        <img class="footer-avatar" src="../../assets/portrait.jpg" alt="" width="26" height="26" />
        <span>The Minh</span>
        <span class="footer-op" aria-hidden="true">×</span>
        <span data-i18n="footerAi">KI</span>
        <span class="footer-op" aria-hidden="true">=</span>
        <span class="nav-mark" aria-hidden="true">✦</span>
      </p>
      <nav class="footer-links" aria-label="Rechtliches und Profile" data-i18n-aria-label="footerNavAria">
        <a href="../../warum/" data-i18n="footerWhy">Warum ich baue</a>
        <a href="../../ueber-mich/" data-i18n="navCv">Über mich</a>
        <a href="https://www.linkedin.com/in/the-minh-ng/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="../../impressum/" data-i18n="footerImprint">Impressum</a>
        <a href="../../datenschutz/" data-i18n="footerPrivacy">Datenschutz</a>
      </nav>
    </div>
  </footer>

  <script src="../../js/i18n.js"></script>
  <script src="../../js/data.js"></script>
  <script src="../../js/mockups.js"></script>
  <script src="../../js/product.js"></script>
  <script src="../../js/ask.js" data-root="../../"></script>
</body>
</html>
`;
  fs.mkdirSync(`produkt/${id}`, { recursive: true });
  fs.writeFileSync(`produkt/${id}/index.html`, html);
  console.log('produkt/' + id);
}
