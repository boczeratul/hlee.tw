// Minimal i18n: English (default markup) + Traditional Chinese.
// Elements carry data-i18n (text) or data-i18n-html (trusted markup from this file).
(function () {
  const STRINGS = {
    en: {
      title: "Hsuan Lee — Founder · Software Engineer · Photographer",
      description: "Hsuan Lee: founder, software engineer and analog photographer.",
      "nav.about": "About",
      "nav.work": "Work",
      "nav.photos": "Photos",
      "nav.contact": "Contact",
      "role.founder": "Founder",
      "role.photo": "Photographer",
      "hero.tagline": "I build companies, write software, and shoot film.",
      "hero.cue": "Advance film ↓",
      "about.bio": "I'm a founder and software engineer based in Taiwan, and an analog photographer when I'm away from the keyboard. This paragraph is a placeholder for a short personal bio.",
      "about.founder": "Building products and teams from zero to one.",
      "about.eng": "Shipping software that scales and stays maintainable.",
      "about.photo": 'Travel, landscape and portrait photography from Japan to Iceland, shared as <a href="https://www.instagram.com/analog_nomad_/" target="_blank" rel="noopener">@analog_nomad_</a>.',
      "work.present": "Present",
      "work.t1": "Founder & CEO",
      "work.t2": "Senior Software Engineer",
      "work.t3": "Software Engineer",
      "work.company": "Company name",
      "work.d1": "One or two lines on what the company does and what you built.",
      "work.d2": "Key systems, scale, and impact.",
      "work.init": "Initial commit",
      "work.edu": "Education",
      "work.school": "School, degree",
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
    },
    "zh-TW": {
      title: "Hsuan Lee — 創辦人 · 軟體工程師 · 攝影師",
      description: "Hsuan Lee：創辦人、軟體工程師、底片攝影師。",
      "nav.about": "關於",
      "nav.work": "經歷",
      "nav.photos": "攝影",
      "nav.contact": "聯絡",
      "role.founder": "創辦人",
      "role.photo": "攝影師",
      "hero.tagline": "創業、寫程式、拍底片。",
      "hero.cue": "過片 ↓",
      "about.bio": "我是一名在台灣的創辦人與軟體工程師，離開鍵盤時是底片攝影師。這段文字為個人簡介的暫代內容。",
      "about.founder": "從零到一，打造產品與團隊。",
      "about.eng": "交付可擴展、好維護的軟體。",
      "about.photo": '旅行、風景與人像攝影，從日本到冰島，作品發表於 <a href="https://www.instagram.com/analog_nomad_/" target="_blank" rel="noopener">@analog_nomad_</a>。',
      "work.present": "至今",
      "work.t1": "創辦人暨執行長",
      "work.t2": "資深軟體工程師",
      "work.t3": "軟體工程師",
      "work.company": "公司名稱",
      "work.d1": "用一兩句話描述公司在做什麼，以及你打造了什麼。",
      "work.d2": "負責的關鍵系統、規模與影響。",
      "work.init": "初始提交",
      "work.edu": "學歷",
      "work.school": "學校、學位",
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
