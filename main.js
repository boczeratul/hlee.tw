// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Viewfinder cursor: follows the pointer, locks focus on links and photo frames
const vf = document.querySelector(".viewfinder");
if (vf && window.matchMedia("(hover: hover)").matches) {
  window.addEventListener("pointermove", (e) => {
    vf.classList.add("on");
    vf.style.setProperty("--x", e.clientX + "px");
    vf.style.setProperty("--y", e.clientY + "px");
    vf.classList.toggle("lock", !!e.target.closest("a, .frame, .facet, .btn"));
  });
  document.addEventListener("pointerleave", () => vf.classList.remove("on"));
}

// Reveal sections and timeline entries as they enter the viewport
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }),
  { threshold: 0.2 }
);
document.querySelectorAll(".lede, .facet, .big, .links").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
document.querySelectorAll(".entry").forEach((el, i) => {
  el.style.transitionDelay = i * 0.08 + "s";
  io.observe(el);
});

// Timeline line draws itself with scroll progress
const timeline = document.querySelector(".timeline");
const drawTimeline = () => {
  const r = timeline.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / r.height));
  timeline.style.setProperty("--progress", reduceMotion ? 1 : p.toFixed(3));
};
addEventListener("scroll", drawTimeline, { passive: true });
drawTimeline();

// Film strip: drag to scroll, vertical wheel advances film, tap develops a frame on touch
const strip = document.querySelector(".strip");
let dragX = null, startScroll = 0, moved = false;
strip.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") return;
  dragX = e.clientX; startScroll = strip.scrollLeft; moved = false;
  strip.classList.add("dragging");
});
addEventListener("pointermove", (e) => {
  if (dragX === null) return;
  const dx = e.clientX - dragX;
  if (Math.abs(dx) > 3) moved = true;
  strip.scrollLeft = startScroll - dx;
});
addEventListener("pointerup", () => { dragX = null; strip.classList.remove("dragging"); });
strip.addEventListener("click", (e) => {
  const f = e.target.closest(".frame");
  if (f && !moved) f.classList.toggle("dev");
});
