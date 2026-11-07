/**
 * Convierte cada elemento con [data-wa] en un enlace de WhatsApp.
 *   data-wa=""           -> usa el mensaje por defecto de config.js
 *   data-wa="Hola, ..."  -> usa ese mensaje
 */
import { buildWhatsAppUrl } from '../config.js';

export function setupWhatsAppLinks(root = document) {
  root.querySelectorAll('[data-wa]').forEach((link) => {
    link.href = buildWhatsAppUrl(link.dataset.wa || undefined);
  });
}
