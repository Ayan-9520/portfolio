import { scrollToElement, scrollToTop } from "@/utils/smoothScroll";

const NAVBAR_OFFSET = 80;

export function scrollToSection(id: string) {
  if (id === "#home") {
    scrollToTop();
    return;
  }
  scrollToElement(id, NAVBAR_OFFSET);
}
