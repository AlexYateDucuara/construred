/**
 * Pinta en el HTML los bloques que salen de data/content.js.
 */
import {
  NAV_LINKS, HERO_HIGHLIGHTS, HERO_CHIPS, STATS, SERVICES, COMPARISON, STEPS,
  FEATURES, VERIFICATION_CHECKS, REVIEWS, PRO_BENEFITS, FAQS, PAYMENT_METHODS,
} from '../data/content.js';
import { renderList } from '../utils/dom.js';
import {
  navLinkTemplate, footerLinkTemplate, iconItemTemplate, heroChipTemplate,
  statTemplate, serviceTemplate, stepTemplate, featureTemplate, reviewTemplate,
  reviewSummaryTemplate, proBenefitTemplate, faqTemplate, paymentTemplate,
} from './templates.js';

/** Convierte una lista de textos que comparten ícono en elementos { icon, text }. */
const withIcon = ({ icon, items }) => items.map((text) => ({ icon, text }));

/** Promedio y total de reseñas; lista vacía si no hay ninguna. */
const summarizeReviews = (reviews) => (reviews.length ? [{
  average: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
  count: reviews.length,
}] : []);

export function renderSections() {
  renderList('#nav-links', NAV_LINKS, navLinkTemplate);
  renderList('#footer-links', NAV_LINKS, footerLinkTemplate);
  renderList('#hero-highlights', HERO_HIGHLIGHTS, iconItemTemplate);
  renderList('#hero-chips', HERO_CHIPS, heroChipTemplate);
  renderList('#stats-list', STATS, statTemplate);
  renderList('#services-list', SERVICES, serviceTemplate);
  renderList('#compare-without', withIcon(COMPARISON.without), iconItemTemplate);
  renderList('#compare-with', withIcon(COMPARISON.with), iconItemTemplate);
  renderList('#steps-list', STEPS, stepTemplate);
  renderList('#features-list', FEATURES, featureTemplate);
  renderList('#verified-list', VERIFICATION_CHECKS, iconItemTemplate);
  renderList('#reviews-summary', summarizeReviews(REVIEWS), reviewSummaryTemplate);
  renderList('#reviews-list', REVIEWS, reviewTemplate);
  renderList('#pro-benefits', PRO_BENEFITS, proBenefitTemplate);
  renderList('#faq', FAQS, faqTemplate);
  renderList('#payment-methods', PAYMENT_METHODS, paymentTemplate);
}
