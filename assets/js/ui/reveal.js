/**
 * Aparición suave de los bloques con clase .reveal al entrar en pantalla.
 * Los elementos hermanos aparecen escalonados.
 */
import { REVEAL } from '../config.js';

const VISIBLE_CLASS = 'is-visible';

export function setupReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add(VISIBLE_CLASS));
    return;
  }

  items.forEach(applyStaggerDelay);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(VISIBLE_CLASS);
      observer.unobserve(entry.target);
    });
  }, { threshold: REVEAL.threshold, rootMargin: REVEAL.rootMargin });

  items.forEach((item) => observer.observe(item));
}

function applyStaggerDelay(item) {
  const siblings = Array.from(item.parentElement.children).filter((el) => el.classList.contains('reveal'));
  const step = Math.min(siblings.indexOf(item), REVEAL.maxStaggerSteps);
  item.style.transitionDelay = `${step * REVEAL.staggerMs}ms`;
}
