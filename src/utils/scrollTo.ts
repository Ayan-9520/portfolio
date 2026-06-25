import { scrollToElement, scrollToTop } from "@/utils/smoothScroll";

const NAVBAR_OFFSET = 64;

export function scrollToSection(id: string) {
  if (id === "#home") {
    scrollToTop();
    return;
  }
  scrollToElement(id, NAVBAR_OFFSET);
}
