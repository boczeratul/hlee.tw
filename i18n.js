// Minimal i18n: English (default markup) + Traditional Chinese.
// Elements carry data-i18n (text) or data-i18n-html (trusted markup from this file).
(function () {
  const STRINGS = {
    en: {
      title: "Hsuan Lee — Founder · Software Engineer · Photographer",
      "nav.about": "About",
      "nav.work": "Work",
      "nav.photos": "Photos",
      "nav.contact": "Contact",
      "role.founder": "Founder",
      "role.photo": "Photographer",
      "hero.tagline": "I build companies, write software, and shoot film.",
      "hero.cue": "Advance film ↓",
      "about.photo": 'Travel, landscape and portrait photography from Japan to Iceland, shared as <a href="https://www.instagram.com/analog_nomad_/" target="_blank" rel="noopener">@analog_nomad_</a>.',
      "work.init": "Initial commit",
      "work.edu": "Education",
      "work.more": "Full history on LinkedIn →",
      "photos.title": "Photographs",
      "photos.hint": "Hover or tap a frame to develop it.",
      "photo.1": "Niseko, Japan · 2025",
      "photo.2": "Mount Fuji, Japan · 2025",
      "photo.3": "Takachiho Gorge, Japan · 2025",
      "photo.4": "Grjótagjá, Iceland · 2026",
      "photo.5": "Stuðlagil, Iceland · 2026",
      "photo.6": "Iceland · 2026",
      "photo.7": "Zaanse Schans, Netherlands · 2026",
      "photo.8": "Scottish Highlands · 2026",
      "photo.9": "Bopiliao, Taipei · 2026",
      "photo.10": "London, UK · 2026",
      "photo.11": "Bopiliao, Taipei · 2026",
      "photo.12": "Taichung Green Museumbrary · 2026",
      "photos.more": "More on Instagram @analog_nomad_ →",
      "contact.big": "Let's build something<br /><em>or go shoot a roll.</em>",
      foot: "Developed, not rendered.",
      "w1.t": "Co-Founder & CEO",
      "w1.c": "Blocto (portto)",
      "w1.d": "Co-founded portto and led it for six and a half years, building Blocto to make blockchain applications and services simple enough for everyone to use.",
      "w2.t": "Technical Course Director & Lecturer",
      "w2.c": "College of Blockchain Asia",
      "w2.d": "Designed and taught the technical blockchain curriculum.",
      "w3.t": "VP of Engineering",
      "w3.c": "DEXON Foundation",
      "w3.d": "Led development of DEXON products and planned its ecosystem. DEXON is a blocklattice consensus designed to be infinitely scalable, low-latency and Byzantine fault tolerant.",
      "w4.t": "VP of Engineering, from Frontend Director",
      "w4.c": "COBINHOOD",
      "w4.d": "Built a large part of the exchange interface and led the client teams for web, iOS and Android. The world's first zero-fee crypto exchange, and the first crypto app to win a Red Dot design award.",
      "w5.t": "Senior Frontend Developer",
      "w5.c": "17 Media",
      "w5.d": "One of two engineers who built the 17.live livestream web app from scratch, shipping the MVP within a month on React, Redux and RxJS.",
      "w6.t": "Full Stack Engineer",
      "w6.c": "Agoda · Bangkok",
      "w6.d": "Built and maintained the frontend and backend of Agoda's booking form with C# .NET, TypeScript and KnockoutJS.",
      "w7.t": "Software Engineer",
      "w7.c": "Yahoo",
      "w7.d": "Worked on the mobile and desktop News web apps, among the first large-scale production apps on React, and contributed to Yahoo Taiwan's Android app.",
      "w8.t": "Founder",
      "w8.c": "PlatoForum",
      "w8.d": "An experimental online debate platform that clusters opinions by how users react to each other's statements. Designed and built the clustering algorithm.",
      "w9.t": "Researcher",
      "w9.c": "National Taiwan University",
      "w9.d": "Taiwan Evolutionary Intelligence Lab: genetic algorithms and other branches of AI and machine learning.",
      "work.school": "National Taiwan University",
      "work.degrees": "M.S. Computational Science (2012) · B.S. Electrical Engineering (2010)",
      "about.bio": "I'm Hsuan, a founder and software engineer based in Taipei. I co-founded Blocto (portto) and led it as CEO from 2019 to 2025, making blockchain apps simple enough for anyone to use. Before that I led engineering at COBINHOOD and DEXON, and built web apps at 17 Media, Agoda and Yahoo. Away from the keyboard, I travel and take photos.",
      "about.founder": "Co-founded Blocto (portto) and PlatoForum. AppWorks Accelerator #19.",
      "about.eng": "Full-stack since 2014: React, Node.js, mobile, and blockchain infrastructure.",
      "description": "Hsuan Lee: co-founder of Blocto, software engineer and photographer based in Taipei.",
    },
    "zh-TW": {
      title: "Hsuan Lee — 創辦人 · 軟體工程師 · 攝影師",
      "nav.about": "關於",
      "nav.work": "經歷",
      "nav.photos": "攝影",
      "nav.contact": "聯絡",
      "role.founder": "創辦人",
      "role.photo": "攝影師",
      "hero.tagline": "創業、寫程式、拍底片。",
      "hero.cue": "過片 ↓",
      "about.photo": '旅行、風景與人像攝影，從日本到冰島，作品發表於 <a href="https://www.instagram.com/analog_nomad_/" target="_blank" rel="noopener">@analog_nomad_</a>。',
      "work.init": "初始提交",
      "work.edu": "學歷",
      "work.more": "在 LinkedIn 查看完整經歷 →",
      "photos.title": "攝影作品",
      "photos.hint": "滑過或點擊底片格，讓照片顯影。",
      "photo.1": "日本 二世谷 · 2025",
      "photo.2": "日本 富士山 · 2025",
      "photo.3": "日本 高千穗峽 · 2025",
      "photo.4": "冰島 Grjótagjá 溫泉洞窟 · 2026",
      "photo.5": "冰島 Stuðlagil 玄武岩柱峽谷 · 2026",
      "photo.6": "冰島 · 2026",
      "photo.7": "荷蘭 風車村 · 2026",
      "photo.8": "蘇格蘭高地 · 2026",
      "photo.9": "台北 剝皮寮 · 2026",
      "photo.10": "英國 倫敦 · 2026",
      "photo.11": "台北 剝皮寮 · 2026",
      "photo.12": "台中綠美圖 · 2026",
      "photos.more": "在 Instagram 看更多 @analog_nomad_ →",
      "contact.big": "一起打造點什麼，<br /><em>或一起去拍一卷底片。</em>",
      foot: "顯影，而非渲染。",
      "w1.t": "共同創辦人暨執行長",
      "w1.c": "Blocto (portto)",
      "w1.d": "共同創辦 portto 並擔任執行長六年半，打造 Blocto，讓區塊鏈應用與服務簡單到人人都能輕鬆使用。",
      "w2.t": "技術課程總監暨講師",
      "w2.c": "College of Blockchain Asia",
      "w2.d": "規劃並講授區塊鏈技術課程。",
      "w3.t": "工程副總",
      "w3.c": "DEXON Foundation",
      "w3.d": "帶領 DEXON 相關產品開發並規劃其生態系。DEXON 是一種 blocklattice 共識技術，具備無限擴展、低延遲與拜占庭容錯的特性。",
      "w4.t": "工程副總（前端總監升任）",
      "w4.c": "COBINHOOD",
      "w4.d": "打造交易所介面的大部分功能，並帶領 Web、iOS、Android 客戶端團隊。全球首個零手續費加密貨幣交易所，也是首個獲得紅點設計獎的加密貨幣應用。",
      "w5.t": "資深前端工程師",
      "w5.c": "17 Media",
      "w5.d": "兩人團隊從零打造直播 Web App 17.live，以 React、Redux 與 RxJS 在一個月內完成 MVP。",
      "w6.t": "全端工程師",
      "w6.c": "Agoda · 曼谷",
      "w6.d": "負責 Agoda 訂房表單的前端與後端開發，使用 C# .NET、TypeScript 與 KnockoutJS。",
      "w7.t": "軟體工程師",
      "w7.c": "Yahoo",
      "w7.d": "開發行動版與桌面版新聞 Web App，是最早在大型產品上採用 React 的團隊之一，也參與 Yahoo 奇摩 Android App 開發。",
      "w8.t": "創辦人",
      "w8.c": "PlatoForum 潑辣瘋人",
      "w8.d": "實驗性的線上辯論平台，依使用者對彼此論點的反應自動分群意見。我設計並實作了意見分群演算法。",
      "w9.t": "研究員",
      "w9.c": "國立台灣大學",
      "w9.d": "台灣演化智慧實驗室：研究基因演算法與其他 AI、機器學習領域。",
      "work.school": "國立台灣大學",
      "work.degrees": "計算科學碩士（2012）· 電機工程學士（2010）",
      "about.bio": "我是 Hsuan，台北的創辦人與軟體工程師。2019 至 2025 年，我共同創辦 Blocto（portto）並擔任執行長，致力讓區塊鏈應用簡單到人人都能上手。在此之前，我在 COBINHOOD 與 DEXON 帶領工程團隊，也曾在 17 Media、Agoda 與 Yahoo 打造 Web App。離開鍵盤時，我四處旅行、拍照。",
      "about.founder": "共同創辦 Blocto（portto）與 PlatoForum，AppWorks 加速器第 19 屆。",
      "about.eng": "2014 年起的全端工程師：React、Node.js、行動 App 與區塊鏈基礎建設。",
      "description": "Hsuan Lee：Blocto 共同創辦人、軟體工程師、攝影師，現居台北。",
    },
  };

  const SUPPORTED = Object.keys(STRINGS);
  const KEY = "lang";

  function detect() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && SUPPORTED.includes(q)) return q;
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    const nav = (navigator.languages || [navigator.language || ""]).join(",").toLowerCase();
    return /zh-(tw|hk|mo|hant)/.test(nav) ? "zh-TW" : "en";
  }

  function apply(lang) {
    const t = STRINGS[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = t.description;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = t[el.dataset.i18nHtml];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function set(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    apply(lang);
  }

  const initial = detect();
  document.documentElement.lang = initial;
  document.addEventListener("DOMContentLoaded", () => {
    apply(initial);
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => set(b.dataset.lang))
    );
  });
})();
