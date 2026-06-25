import Lenis from "lenis";

let lenis: Lenis | null = null;
let rafId: number | null = null;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t));

export default function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.1,
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
    syncTouch: false,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);
  document.documentElement.classList.add("lenis");

  return lenis;
}

export function getLenis() {
  return lenis;
}

export function destroySmoothScroll() {
  if (rafId !== null) cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
  rafId = null;
  document.documentElement.classList.remove("lenis");
}

export function setScrollLocked(locked: boolean) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}

export function scrollToElement(selector: string, offset = 80) {
  const element = document.querySelector(selector);
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element as HTMLElement, {
      offset: -offset,
      duration: 1.15,
      easing: easeOutExpo,
    });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.15, easing: easeOutExpo });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
