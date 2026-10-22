// Leitet alle Kennzahlen aus js/data.js ab und trägt sie dort ein, wo kein
// JavaScript läuft (Suchmaschinen, Link-Vorschauen, ausführlicher CV).
// Läuft im Deploy-Workflow; lokal: node tools/build-stats.js
//
//  1. stats.json              → wird vom CV (/minh-cv/) zur Laufzeit gelesen
//  2. statische HTML-Fallbacks → "Achtzehn"/"18" im Markup = echte Zahl
//  3. tools/_og.html          → Vorlage mit Zahl, daraus rendert der Workflow assets/og-image.png
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);

const ctx = {};
new Function('ctx', `${read('js/data.js')}\nctx.PROJECTS = PROJECTS; ctx.STORIES = STORIES; ctx.TECH = TECH_TICKER;`)(ctx);
new Function('ctx', `${read('js/i18n.js')}\nctx.NUM_WORDS = NUM_WORDS;`)(ctx);

const products = ctx.PROJECTS.length;
const stats = {
  products,
  liveDemos: ctx.PROJECTS.filter((p) => p.liveKind === 'app').length,
  technologies: ctx.TECH.length,
  paused: ctx.PROJECTS.filter((p) => p.paused).length,
  words: {
    de: ctx.NUM_WORDS.de[products] || String(products),
    en: ctx.NUM_WORDS.en[products] || String(products),
  },
};

write('stats.json', `${JSON.stringify(stats, null, 2)}\n`);

// Statische Fallbacks (JS überschreibt sie im Browser ohnehin mit demselben Wert)
const fallbacks = [
  ['index.html', /(<span data-count-word="products">)[^<]*(<\/span>)/g, `$1${stats.words.de}$2`],
  ['index.html', /data-count="\d+" data-count-src="products"/g, `data-count="${products}" data-count-src="products"`],
  ['index.html', /data-count="\d+" data-count-src="demos"/g, `data-count="${stats.liveDemos}" data-count-src="demos"`],
  ['index.html', /data-count="\d+" data-count-src="tech"/g, `data-count="${stats.technologies}" data-count-src="tech"`],
  ['ueber-mich/index.html', /(<b data-count-products>)[^<]*(<\/b>)/g, `$1${products}$2`],
];
for (const [file, re, rep] of fallbacks) write(file, read(file).replace(re, rep));

write('tools/_og.html', read('tools/og-image.html').replace(/\{\{PRODUCTS\}\}/g, String(products)));

console.log(JSON.stringify(stats));
