/**
 * Comportamiento de la barra de navegación:
 * - Fondo blanco al hacer scroll.
 * - En celular, cierra el menú al tocar un enlace.
 */
import { NAVBAR } from '../config.js';

export function setupNavbar() {
  const nav = document.getElementById('mainNav');
  const menu = document.getElementById('navMenu');
  if (!nav || !menu) return;

  const updateScrolledState = () => {
    nav.classList.toggle('scrolled', window.scrollY > NAVBAR.scrolledOffset);
  };
  updateScrolledState();
  window.addEventListener('scroll', updateScrolledState, { passive: true });

  menu.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('a');
    if (!clickedLink || !menu.classList.contains('show')) return;
    window.bootstrap?.Collapse.getOrCreateInstance(menu).hide();
  });
}
