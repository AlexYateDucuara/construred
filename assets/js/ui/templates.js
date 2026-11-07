/**
 * Plantillas HTML de los bloques repetitivos.
 * Todo texto proveniente de los datos pasa por escapeHtml (e).
 */
import { escapeHtml as e, icon } from '../utils/dom.js';

export const navLinkTemplate = ({ href, label, icon: name }) => `
  <li class="nav-item"><a class="nav-link" href="${e(href)}">${icon(name)} ${e(label)}</a></li>`;

export const footerLinkTemplate = ({ href, label, icon: name }) => `
  <li><a href="${e(href)}">${icon(name)} ${e(label)}</a></li>`;

/** Elemento de lista con ícono: portada, comparación y sello verificado. */
export const iconItemTemplate = ({ icon: name, text }) => `
  <li>${icon(name)} <span>${e(text)}</span></li>`;

export const heroChipTemplate = ({ position, icon: name, iconClass, title, subtitle }) => `
  <div class="hero-chip hero-chip--${e(position)}">
    <span class="chip-icon ${e(iconClass)}" aria-hidden="true">${icon(name)}</span>
    <div><strong>${e(title)}</strong><small>${e(subtitle)}</small></div>
  </div>`;

export const statTemplate = ({ icon: name, value, unit, label }) => `
  <div class="col-6 col-md-3 stat">
    <span class="stat-icon">${icon(name)}</span>
    <span class="stat-num">${e(value)}${unit ? `<small>${e(unit)}</small>` : ''}</span>
    <span class="stat-label">${e(label)}</span>
  </div>`;

export const serviceTemplate = ({ title, icon: name, description, image, alt, message }) => `
  <div class="col reveal">
    <article class="service">
      <div class="service-media">
        <img src="${e(image)}" alt="${e(alt)}" width="400" height="400" loading="lazy">
        <span class="service-badge">${icon(name)}</span>
      </div>
      <h3>${e(title)}</h3>
      <p>${e(description)}</p>
      <a class="service-link" data-wa="${e(message)}" target="_blank" rel="noopener">
        ${icon('whatsapp')} Cotizar ${icon('arrow-right')}
      </a>
    </article>
  </div>`;

export const stepTemplate = ({ icon: name, title, text }, index) => `
  <li class="step reveal">
    <span class="step-num" aria-hidden="true">${index + 1}</span>
    <div>
      <h3>${icon(name)} ${e(title)}</h3>
      <p>${e(text)}</p>
    </div>
  </li>`;

export const featureTemplate = ({ icon: name, tone, title, text }) => `
  <div class="col-md-6 col-lg-4 reveal">
    <div class="feature">
      <span class="feature-icon fi-${e(tone)}">${icon(name)}</span>
      <div>
        <h3>${e(title)}</h3>
        <p>${e(text)}</p>
      </div>
    </div>
  </div>`;

export const proBenefitTemplate = ({ icon: name, text }) => `
  <div class="col-sm-6">
    <div class="pro-benefit">${icon(name)} ${e(text)}</div>
  </div>`;

/** Todas las preguntas empiezan cerradas para que la sección quepa en pantalla. */
export const faqTemplate = ({ icon: name, question, answer }, index) => {
  const id = `faq-${index + 1}`;
  return `
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button"
        data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
        <span class="faq-icon">${icon(name)}</span> ${e(question)}
      </button>
    </h3>
    <div id="${id}" class="accordion-collapse collapse" data-bs-parent="#faq">
      <div class="accordion-body">${e(answer)}</div>
    </div>
  </div>`;
};

/* ---------- Reseñas ---------- */
const formatRating = (value) => value.toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const initials = (fullName) => fullName.split(/\s+/).filter(Boolean)
  .map((word) => word[0]).join('').slice(0, 2).toUpperCase();

/** Cinco estrellas redondeadas a la media estrella más cercana. */
export const starsTemplate = (rating) => {
  const stars = [1, 2, 3, 4, 5].map((position) => {
    if (rating >= position - 0.25) return icon('star-fill');
    if (rating >= position - 0.75) return icon('star-half');
    return icon('star');
  }).join('');
  return `<span class="stars" role="img" aria-label="${formatRating(rating)} de 5 estrellas">${stars}</span>`;
};

export const reviewSummaryTemplate = ({ average, count }) => `
  <div class="review-summary">
    <span class="review-avg">${formatRating(average)}</span>
    <div>
      ${starsTemplate(average)}
      <small>Promedio de ${count} reseñas</small>
    </div>
  </div>`;

export const reviewTemplate = ({ name, role, service, icon: serviceIcon, rating, text }) => `
  <div class="col-md-6 col-lg-4 reveal">
    <article class="review-card">
      <span class="review-quote">${icon('quote')}</span>
      ${starsTemplate(rating)}
      <blockquote class="review-text"><p>${e(text)}</p></blockquote>
      <footer class="review-author">
        <span class="review-avatar" aria-hidden="true">${e(initials(name))}</span>
        <div>
          <strong>${e(name)}</strong>
          <small>${icon(serviceIcon)} ${e(role)} · ${e(service)}</small>
        </div>
      </footer>
    </article>
  </div>`;

export const paymentTemplate = ({ icon: name, label }) => `
  <span class="pay-chip">${icon(name)} ${e(label)}</span>`;
