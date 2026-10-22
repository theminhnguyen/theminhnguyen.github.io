/**
 * Animierte CSS-Mockups pro Produkt (id → HTML-String).
 * Gemeinsam genutzt von der Startseite (js/main.js) und den Produkt-Detailseiten (js/product.js).
 */
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

  meetscribe: () => `
    <div class="mock">
      <div class="mock-window">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-screen m-ms">
          <div class="m-ms-head"><span class="m-ms-rec"></span>Mitschrift · 3 Personen</div>
          <div class="m-ms-row r1">
            <span class="m-ms-who w1">A<b>00:12</b></span>
            <span class="m-ms-said"><i style="width:94%"></i><i style="width:61%"></i></span>
          </div>
          <div class="m-ms-row r2">
            <span class="m-ms-who w2">B<b>00:31</b></span>
            <span class="m-ms-said"><i style="width:78%"></i></span>
          </div>
          <div class="m-ms-row r3 marked">
            <span class="m-ms-who w3">C<b>00:48</b></span>
            <span class="m-ms-said"><i style="width:88%"></i><i style="width:49%"></i></span>
            <span class="m-ms-star">★</span>
          </div>
          <span class="m-tag">🎧 lokal · Sprecher getrennt</span>
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

  sidetrack: () => `
    <div class="mock">
      <div class="mock-window">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-screen m-gantt">
          <div class="m-gantt-head">
            <span style="font-size:14px">🗂️</span>
            <b>SideTrack</b>
            <span class="m-gantt-avatars"><span class="m-gantt-ava a1"></span><span class="m-gantt-ava a2"></span><span class="m-gantt-ava a3"></span></span>
          </div>
          <div class="m-gantt-rows">
            <span class="m-gantt-today"></span>
            <span class="m-gantt-bar b1" style="margin-left:4%;width:40%"></span>
            <span class="m-gantt-bar b2" style="margin-left:28%;width:46%"></span>
            <span class="m-gantt-bar b3" style="margin-left:14%;width:32%"></span>
            <span class="m-gantt-bar b4 snoozed" style="margin-left:50%;width:38%"></span>
          </div>
          <span class="m-tag">📊 Gantt · Snooze · Ampel</span>
        </div>
      </div>
    </div>`,

  spielkiste: () => `
    <div class="mock m-room">
      <div class="m-room-tile rt1"><span class="m-room-board"><i></i><b></b><i class="d2"></i><b class="b2"></b></span></div>
      <div class="m-room-tile rt2"><span class="m-room-blob c1"></span><span class="m-room-blob c2"></span><span class="m-room-blob c3"></span></div>
      <div class="m-room-tile rt3"><span class="m-room-stroke"></span><span class="m-room-dot"></span></div>
      <div class="m-room-tile rt4"><span class="m-room-block bl1"></span><span class="m-room-block bl2"></span><span class="m-room-block bl3"></span></div>
      <span class="m-tag">🧸 Fummelbrett · Kleckse · Malen · Wimmelbild</span>
    </div>`,

  'context-studio': () => `
    <div class="mock">
      <div class="mock-window">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-screen m-ctx">
          <div class="m-ctx-load">
            <span class="m-ctx-seg s1"></span><span class="m-ctx-seg s2"></span><span class="m-ctx-seg s3"></span>
            <span class="m-ctx-split"></span>
            <span class="m-ctx-seg outline o1"></span><span class="m-ctx-seg outline o2"></span>
            <span class="m-ctx-dot"></span>
          </div>
          <div class="m-ctx-row"><span class="m-ctx-file">CLAUDE.md</span><span class="m-ctx-badge">Ebene 0</span></div>
          <div class="m-ctx-row"><span class="m-ctx-file dim">context/people.md</span><span class="m-ctx-badge dim">Ebene 2</span></div>
          <span class="m-tag">🧭 148 Zeilen · Budget im Blick</span>
        </div>
      </div>
    </div>`,

  wanderjahre: () => `
    <div class="mock">
      <div class="mock-window">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-screen" style="background:#eef1ef;padding:12px;gap:8px;display:flex;flex-direction:column">
          <div style="display:flex;gap:6px">
            <span style="font-size:9px;color:#566360;background:#e4e9e6;padding:3px 9px;border-radius:999px">2029</span>
            <span style="font-size:9px;color:#fbfcfb;background:#0e5158;padding:3px 9px;border-radius:999px;font-weight:600">2030</span>
            <span style="font-size:9px;color:#566360;background:#e4e9e6;padding:3px 9px;border-radius:999px">2031</span>
          </div>
          <div style="background:#fbfcfb;border:1px solid #dfe5e2;border-left:3px solid #a76d14;border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:5px">
            <b style="color:#131a19;font-size:11px">🏰 Walt Disney World</b>
            <span style="font-size:8px;color:#566360">Orlando · Okt</span>
            <div style="display:flex;gap:4px">
              <span style="font-size:7px;color:#0e5158;background:#dde9e9;padding:2px 6px;border-radius:3px;font-weight:600">GESETZT</span>
              <span style="font-size:7px;color:#566360;background:#e4e9e6;padding:2px 6px;border-radius:3px">DANN 5 JAHRE</span>
            </div>
          </div>
          <div style="border:1px dashed #d0d8d4;border-radius:8px;padding:7px;text-align:center;font-size:8px;color:#566360;letter-spacing:.03em">+ Idee</div>
        </div>
      </div>
    </div>`,
};
