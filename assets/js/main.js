/**
 * CONSTRURED – punto de entrada.
 * El orden importa: primero se pinta el contenido y luego se le agrega comportamiento.
 */
import { renderSections } from './ui/sections.js';
import { setupWhatsAppLinks } from './ui/whatsapp-links.js';
import { setupNavbar } from './ui/navbar.js';
import { setupReveal } from './ui/reveal.js';

function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

renderSections();
setupWhatsAppLinks();
setupNavbar();
setupReveal();
setCurrentYear();
