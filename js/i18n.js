/**
 * Übersetzungen & Sprachumschaltung (DE ⇄ EN) für die statische UI.
 * Produkt-Texte (tagline/description/features/categoryLabel) liegen
 * direkt bei den jeweiligen Einträgen in js/data.js (Feld `en`).
 */
const LANG_STORAGE_KEY = 'site:lang';

const UI_STRINGS = {
  skipLink: { de: 'Zum Inhalt springen', en: 'Skip to content' },
  navAriaLabel: { de: 'Hauptnavigation', en: 'Main navigation' },
  navProducts: { de: 'Produkte', en: 'Products' },
  navStory: { de: 'Story', en: 'Story' },
  navContact: { de: 'Kontakt', en: 'Contact' },
  langToggleAria: { de: 'Sprache wechseln', en: 'Switch language' },

  heroBadge: { de: 'Ein-Personen-Studio · Vibe-Coded', en: 'One-person studio · Vibe-coded' },
  heroTitleHtml: {
    de: 'Ideen, die <span class="grad-text">im Browser</span> lebendig werden.',
    en: 'Ideas that <span class="grad-text">come alive</span> in the browser.',
  },
  heroSubRest: {
    de: 'Produkte, gebaut ohne klassisches Coding – von der lokalen KI-Diktier-App über einen KI-Medien-Tracker bis zum begehbaren 3D-Schloss. Kein Slide-Deck, sondern echte Software zum Anfassen.',
    en: 'products, built without classic coding — from a local AI dictation app to an AI media tracker to a walkable 3D castle. No slide deck, just real software you can try.',
  },
  heroCtaPrimary: { de: 'Produkte entdecken', en: 'Explore products' },
  heroCtaGhost: { de: 'Zusammenarbeiten', en: "Let's collaborate" },
  statProducts: { de: 'Produkte', en: 'Products' },
  statDemos: { de: 'Live-Demos', en: 'Live demos' },
  statTech: { de: 'Technologien', en: 'Technologies' },
  statCuriosity: { de: 'Neugier', en: 'Curiosity' },

  productsKicker: { de: '// Die Produkte', en: '// The Products' },
  productsTitle: { de: 'Alles selbst gebaut. Alles zum Ausprobieren.', en: 'Everything self-built. Everything hands-on.' },
  productsLead: {
    de: 'Jede Kachel ist ein fertiges Produkt. Fahr mit der Maus drüber und starte die animierte Demo-Vorschau – direkt hier auf der Seite.',
    en: 'Every tile is a finished product. Hover over it to trigger the animated demo preview — right here on the page.',
  },
  filtersAriaLabel: { de: 'Produkte nach Kategorie filtern', en: 'Filter products by category' },

  storyKicker: { de: '// Der Ansatz', en: '// The Approach' },
  storyTitle: { de: 'Vom Gefühl zum Produkt.', en: 'From feeling to product.' },
  storyP1: {
    de: 'Ich beschreibe, was ich will – und lasse es entstehen. Keine Programmier­ausbildung, sondern Neugier, Geschmack und ein Auge fürs Detail. Aus dieser Arbeitsweise sind echte, benutzbare Produkte geworden.',
    en: 'I describe what I want — and let it come to life. No formal training in programming, just curiosity, taste, and an eye for detail. This way of working has produced real, usable products.',
  },
  storyP2Html: {
    de: 'Der Fokus liegt auf Dingen, die man <em>sofort</em> erleben kann: im Browser, ohne Installation. Die meisten laufen ganz ohne Konto und speichern nur lokal – wo doch eine Anmeldung nötig ist, steht es an der Karte.',
    en: 'The focus is on things you can experience <em>immediately</em>: in the browser, no installation required. Most run without any account and store everything locally — wherever a login is needed, it\'s noted on the card.',
  },
  storyPoint1: {
    de: '<strong>Erlebbar statt erklärt.</strong> Jedes Produkt hat eine animierte Demo – ein Klick genügt.',
    en: '<strong>Experienced, not explained.</strong> Every product has an animated demo — one click is all it takes.',
  },
  storyPoint2: {
    de: '<strong>Privat by design.</strong> Viele Apps speichern lokal, ohne Server, ohne Tracking.',
    en: '<strong>Private by design.</strong> Many apps store data locally — no server, no tracking.',
  },
  storyPoint3: {
    de: '<strong>Von A bis Z.</strong> Idee, Design, Umsetzung und Deployment – aus einer Hand.',
    en: '<strong>Start to finish.</strong> Idea, design, implementation, and deployment — all from one hand.',
  },
  storyPoint4: {
    de: '<strong>Breite Palette.</strong> Health, Games, Produktivität, Dev-Tools – ein Werkzeugkasten aus Neugier.',
    en: '<strong>Wide range.</strong> Health, games, productivity, dev tools — a toolbox built from curiosity.',
  },

  ctaKicker: { de: "// Let's talk", en: "// Let's talk" },
  ctaTitle: { de: 'Hat ein Produkt dein Interesse geweckt?', en: 'Did a product catch your interest?' },
  ctaSub: {
    de: "Ob Lizenz, Weiterentwicklung, White-Label oder eine ganz neue Idee – schreib mir. Ich melde mich schnell.",
    en: "Whether it's licensing, further development, white-label, or a completely new idea — reach out. I'll get back to you quickly.",
  },
  formNameLabel: { de: 'Dein Name', en: 'Your name' },
  formNamePlaceholder: { de: 'Dein Name', en: 'Your name' },
  formEmailLabel: { de: 'Deine E-Mail-Adresse', en: 'Your email address' },
  formEmailPlaceholder: { de: 'Deine E-Mail (für die Antwort)', en: 'Your email (for the reply)' },
  formMessageLabel: { de: 'Deine Nachricht', en: 'Your message' },
  formMessagePlaceholder: { de: "Worum geht's? Deine Nachricht …", en: "What's this about? Your message …" },
  formSubmit: { de: 'Nachricht senden', en: 'Send message' },
  formSending: { de: 'Wird gesendet …', en: 'Sending …' },
  formSuccess: { de: '✓ Danke! Deine Nachricht ist unterwegs – ich melde mich bald.', en: "✓ Thanks! Your message is on its way — I'll get back to you soon." },
  formError: { de: '✗ Das hat leider nicht geklappt. Bitte später nochmal versuchen.', en: "✗ That didn't work, unfortunately. Please try again later." },
  ctaGithubLink: { de: 'oder auf GitHub ansehen ↗', en: 'or check it out on GitHub ↗' },

  footerNote: { de: 'Gebaut im Vibe-Coding-Stil ·', en: 'Built in vibe-coding style ·' },
  footerTop: { de: 'Nach oben ↑', en: 'Back to top ↑' },

  lightboxContact: { de: 'Interesse? Anfragen ↗', en: 'Interested? Get in touch ↗' },
  lightboxCloseAria: { de: 'Demo schließen', en: 'Close demo' },

  demoWatchBtn: { de: '▶ Demo ansehen', en: '▶ Watch demo' },
  demoWatchLabel: { de: 'Demo ansehen', en: 'Watch demo' },
  accountNeededTooltip: { de: 'Zum Ausprobieren ist ein Konto nötig', en: 'An account is required to try this' },
  accountNeededLabel: { de: '🔑 Konto nötig', en: '🔑 Account needed' },

  kindLiveBadge: { de: 'Live', en: 'Live' },
  kindLiveAction: { de: 'Live testen ↗', en: 'Try it live ↗' },
  kindDownloadBadge: { de: 'Download', en: 'Download' },
  kindDownloadAction: { de: 'Zum Download ↗', en: 'Get the download ↗' },
  kindDownloadLightbox: { de: 'Download ↗', en: 'Download ↗' },
  kindConceptBadge: { de: 'Konzept', en: 'Concept' },
  kindConceptAction: { de: 'Konzept ansehen ↗', en: 'View concept ↗' },
  kindBuildingBadge: { de: 'In Entwicklung', en: 'In development' },
  kindBuildingAction: { de: 'Repo ansehen ↗', en: 'View repo ↗' },
  kindNoneBadge: { de: 'Auf Anfrage', en: 'On request' },
  kindNoneAction: { de: 'Anfragen', en: 'Get in touch' },

  screenshotAltSuffix: { de: '– echter Screenshot', en: '– real screenshot' },
  viewLabel: { de: 'Ansicht', en: 'View' },
  realScreenshotBadge: { de: 'Echter Screenshot', en: 'Real screenshot' },
  animatedDemoBadge: { de: 'Animierte Demo', en: 'Animated demo' },
  accountNote: {
    de: '🔑 Zum Ausprobieren ist ein kostenloses Konto nötig (Google oder E-Mail-Link).',
    en: '🔑 A free account is required to try this (Google or email link).',
  },
  fanProjectNote: {
    de: '⚖️ Nicht-kommerzielles Fan-Projekt – steht nicht zur Lizenzierung.',
    en: '⚖️ Non-commercial fan project — not available for licensing.',
  },
};

const NUM_WORDS = {
  de: ['Null', 'Ein', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht',
    'Neun', 'Zehn', 'Elf', 'Zwölf', 'Dreizehn', 'Vierzehn', 'Fünfzehn',
    'Sechzehn', 'Siebzehn', 'Achtzehn', 'Neunzehn', 'Zwanzig'],
  en: ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
    'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'],
};
function numWord(n, lang) {
  const list = NUM_WORDS[lang] || NUM_WORDS.de;
  return list[n] || String(n);
}

function getLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'de';
}

function t(key) {
  const entry = UI_STRINGS[key];
  if (!entry) return '';
  return entry[getLang()] ?? entry.de ?? '';
}

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'de' || saved === 'en') return saved;
  } catch {
    // localStorage kann in privaten/eingebetteten Kontexten fehlen – dann Default.
  }
  return 'de';
}

function persistLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Speichern ist ein Nice-to-have, kein Blocker.
  }
}

// Läuft nach jedem Sprachwechsel über alle statischen data-i18n-Elemente.
function applyStaticTranslations() {
  const lang = getLang();
  document.title = lang === 'en' ? 'Minh · Vibe-Coded Products' : 'Minh · Vibe-Coded Products';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.setAttribute('aria-label', t('langToggleAria'));
    toggle.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }
}

function setLang(lang) {
  if (lang !== 'de' && lang !== 'en') return;
  document.documentElement.lang = lang;
  persistLang(lang);
  applyStaticTranslations();
  if (typeof window.onLanguageChanged === 'function') window.onLanguageChanged(lang);
}
