import Lenis from "@studio-freight/lenis";

export default function initSmoothScroll() {

  const lenis = new Lenis({
    duration: 0.2,        // scroll speed
    smoothWheel: true,    // mouse wheel smooth
    smoothTouch: false,   // mobile lag avoid
    lerp: 0.1             // smoothness control
  });

  function raf(time:number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

}