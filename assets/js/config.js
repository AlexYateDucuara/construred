/**
 * Configuración general del sitio.
 * Todo valor que pueda cambiar (número, mensajes, tiempos) vive aquí.
 */

export const WHATSAPP = Object.freeze({
  // Indicativo de país (Colombia +57) + número, sin espacios ni "+"
  number: '573108234634',
  defaultMessage: 'Hola CONSTRURED, quiero cotizar un trabajo',
});

export const NAVBAR = Object.freeze({
  // Píxeles de scroll a partir de los cuales la barra se vuelve blanca
  scrolledOffset: 40,
});

export const REVEAL = Object.freeze({
  staggerMs: 80,
  maxStaggerSteps: 5,
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

/**
 * Construye el enlace de WhatsApp con el mensaje ya escrito.
 * @param {string} [message] Texto que verá el usuario en el chat.
 * @returns {string} URL de wa.me
 */
export function buildWhatsAppUrl(message = WHATSAPP.defaultMessage) {
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP.number}${query}`;
}
