/**
 * Utilidades de DOM reutilizables.
 */

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/**
 * Escapa un valor para insertarlo de forma segura dentro de HTML.
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

/**
 * Ícono decorativo de Bootstrap Icons (oculto para lectores de pantalla).
 * @param {string} name Nombre del ícono sin el prefijo "bi-".
 * @returns {string}
 */
export const icon = (name) => `<i class="bi bi-${escapeHtml(name)}" aria-hidden="true"></i>`;

/**
 * Pinta una lista de elementos dentro de un contenedor usando una plantilla.
 * @param {string} selector Selector CSS del contenedor.
 * @param {Array} items Datos a pintar.
 * @param {(item: any, index: number) => string} template Función que devuelve el HTML de cada elemento.
 */
export function renderList(selector, items, template) {
  const container = document.querySelector(selector);
  if (!container) {
    console.warn(`renderList: no se encontró el contenedor "${selector}"`);
    return;
  }
  container.innerHTML = items.map((item, index) => template(item, index)).join('');
}
