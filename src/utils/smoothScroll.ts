import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export default function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToElement(selector: string, offset = 64) {
  const element = document.querySelector(selector);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  if (lenis) {
    lenis.scrollTo(top, { duration: 1.1 });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.1 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
