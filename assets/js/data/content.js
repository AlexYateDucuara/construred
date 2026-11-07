/**
 * Contenido de los bloques repetitivos de la landing.
 * Para cambiar un texto, un ícono o agregar un servicio, edita solo este archivo.
 * Íconos: nombres de Bootstrap Icons sin el prefijo "bi-" (https://icons.getbootstrap.com).
 */

/** Enlaces del menú superior y del pie de página. */
export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios', icon: 'tools' },
  { href: '#como-funciona', label: 'Cómo funciona', icon: 'signpost-split' },
  { href: '#beneficios', label: 'Beneficios', icon: 'award' },
  { href: '#confianza', label: 'Confianza', icon: 'shield-check' },
  { href: '#resenas', label: 'Reseñas', icon: 'star' },
  { href: '#maestros', label: 'Soy maestro', icon: 'person-badge' },
  { href: '#preguntas', label: 'Preguntas', icon: 'question-circle' },
];

export const HERO_HIGHLIGHTS = [
  { icon: 'gift', text: '100% gratis para los hogares' },
  { icon: 'phone', text: 'Sin descargar aplicaciones' },
  { icon: 'people', text: 'Trato directo con el maestro' },
];

/** Tarjetas flotantes sobre la foto principal. position: top | bottom */
export const HERO_CHIPS = [
  {
    position: 'top',
    icon: 'shield-check',
    iconClass: 'bg-yellow',
    title: 'Maestro verificado',
    subtitle: 'Antecedentes y referencias SENA',
  },
  {
    position: 'bottom',
    icon: 'whatsapp',
    iconClass: 'bg-wa',
    title: 'Respuesta en < 1 min',
    subtitle: 'Chat directo, sin intermediarios',
  },
];

export const STATS = [
  { icon: 'hand-index-thumb', value: '3', label: 'toques para contactar a tu maestro' },
  { icon: 'stopwatch', value: '<1', unit: 'min', label: 'para iniciar el chat por WhatsApp' },
  { icon: 'piggy-bank', value: '$0', label: 'costo de la plataforma para hogares' },
  { icon: 'patch-check', value: '100', unit: '%', label: 'perfiles revisados y verificados' },
];

export const SERVICES = [
  {
    title: 'Albañilería',
    icon: 'bricks',
    description: 'Muros, pisos, pañetes, enchapes y reparaciones estructurales.',
    image: 'assets/img/servicio-albanileria.jpg',
    alt: 'Maestro de obra sonriente con casco amarillo',
    message: 'Hola CONSTRURED, necesito un maestro de albañilería',
  },
  {
    title: 'Plomería',
    icon: 'droplet-half',
    description: 'Fugas, tuberías, baños, lavaplatos y desagües.',
    image: 'assets/img/servicio-plomeria.jpg',
    alt: 'Plomero ajustando la tubería bajo un lavamanos',
    message: 'Hola CONSTRURED, necesito un plomero',
  },
  {
    title: 'Pintura',
    icon: 'paint-bucket',
    description: 'Interiores, fachadas, estuco y acabados que renuevan tu casa.',
    image: 'assets/img/servicio-pintura.jpg',
    alt: 'Pintor sobre una escalera pintando una pared de azul',
    message: 'Hola CONSTRURED, necesito un pintor',
  },
  {
    title: 'Electricidad',
    icon: 'lightning-charge-fill',
    description: 'Instalaciones, tomas, tableros y cortos de forma segura.',
    image: 'assets/img/servicio-electricidad.jpg',
    alt: 'Electricista trabajando en un tablero eléctrico',
    message: 'Hola CONSTRURED, necesito un electricista',
  },
  {
    title: 'Remodelación',
    icon: 'house-gear',
    description: 'Cocinas, baños y adecuaciones completas a tu medida.',
    image: 'assets/img/servicio-remodelacion.jpg',
    alt: 'Cocina remodelada con isla blanca y lámparas colgantes',
    message: 'Hola CONSTRURED, quiero cotizar una remodelación',
  },
];

export const COMPARISON = {
  without: {
    icon: 'x-circle-fill',
    items: [
      'Cobros injustos y presupuestos que cambian',
      'Riesgo de estafas y trabajos mal hechos',
      'Días buscando recomendaciones en la calle',
      'Sin referencias ni respaldo',
    ],
  },
  with: {
    icon: 'check-circle-fill',
    items: [
      'Tarifas de referencia justas y claras',
      'Maestros con antecedentes revisados',
      'Contacto en menos de un minuto',
      'Opiniones y calificaciones reales',
    ],
  },
};

export const STEPS = [
  {
    icon: 'search',
    title: 'Busca la especialidad',
    text: 'Albañil, plomero, pintor o electricista. Desde cualquier celular, sin instalar nada.',
  },
  {
    icon: 'person-check',
    title: 'Elige un perfil verificado',
    text: 'Revisa opiniones de otros vecinos, calificación por estrellas y trabajos anteriores.',
  },
  {
    icon: 'whatsapp',
    title: 'Escríbele por WhatsApp',
    text: 'Acuerda directamente el precio, el alcance y los tiempos. Sin intermediarios.',
  },
];

/** tone: color del ícono (navy | blue | yellow | orange | green) */
export const FEATURES = [
  {
    icon: 'cash-coin',
    tone: 'navy',
    title: 'Precio justo',
    text: 'Plataforma 100% gratuita para los hogares y tarifas de referencia acordadas directamente con el maestro.',
  },
  {
    icon: 'lightning-charge-fill',
    tone: 'blue',
    title: 'Rapidez',
    text: 'Conexión inmediata en 3 clics y chat directo por WhatsApp en menos de un minuto.',
  },
  {
    icon: 'star-fill',
    tone: 'yellow',
    title: 'Calidad comprobada',
    text: 'Perfiles con opiniones reales, calificación por estrellas y respaldo de trabajos bien hechos.',
  },
  {
    icon: 'phone',
    tone: 'orange',
    title: 'Ultraliviana',
    text: 'Funciona al instante en cualquier celular, sin descargar aplicaciones pesadas ni crear contraseñas.',
  },
  {
    icon: 'recycle',
    tone: 'green',
    title: 'Sostenible',
    text: 'Generamos empleo digno en la región y promovemos el manejo responsable de los residuos de obra.',
  },
  {
    icon: 'shield-lock-fill',
    tone: 'navy',
    title: 'Seguridad',
    text: 'Tranquilidad para tu familia gracias al sello “Maestro Verificado”.',
  },
];

export const VERIFICATION_CHECKS = [
  { icon: 'file-earmark-check', text: 'Revisión de antecedentes judiciales' },
  { icon: 'mortarboard', text: 'Validación de referencias y certificaciones (como el SENA)' },
  { icon: 'star-half', text: 'Opiniones y calificaciones de otros vecinos' },
  { icon: 'headset', text: 'Seguimiento después del servicio para confirmar tu satisfacción' },
];

export const PRO_BENEFITS = [
  { icon: 'people-fill', text: 'Más clientes cerca de ti' },
  { icon: 'calendar-check-fill', text: 'Trabajo más estable' },
  { icon: 'globe2', text: 'Visibilidad digital' },
  { icon: 'award-fill', text: 'Formaliza tu oficio' },
];

export const FAQS = [
  {
    icon: 'cash-coin',
    question: '¿Cuánto cuesta usar CONSTRURED?',
    answer: 'Para los hogares la plataforma es 100% gratuita. El valor del trabajo lo acuerdas directamente con el maestro, guiado por tarifas de referencia justas.',
  },
  {
    icon: 'shield-check',
    question: '¿Cómo verifican a los maestros?',
    answer: 'Revisamos antecedentes judiciales, validamos referencias y certificaciones (como las del SENA) y tenemos en cuenta las opiniones de otros clientes.',
  },
  {
    icon: 'phone',
    question: '¿Necesito descargar una aplicación?',
    answer: 'No. CONSTRURED es una página web liviana que funciona desde cualquier celular. Todo el contacto se hace por WhatsApp.',
  },
  {
    icon: 'credit-card',
    question: '¿Cómo puedo pagar?',
    answer: 'Por transferencia bancaria, consignación, efectivo o pagos parciales según el avance del trabajo. Las condiciones quedan claras en la cotización.',
  },
  {
    icon: 'emoji-smile',
    question: '¿Qué pasa si no quedo satisfecho?',
    answer: 'Después de cada servicio te contactamos por WhatsApp para confirmar que todo quedó bien. Atendemos tus observaciones y ofrecemos soporte o garantía cuando corresponde.',
  },
];

/**
 * Reseñas que se muestran en la página (el promedio de estrellas se calcula solo).
 * Nota: son de demostración para el proyecto de aula. Si el negocio se lanza,
 * reemplázalas por reseñas reales de clientes.
 */
export const REVIEWS = [
  {
    name: 'María G.',
    role: 'Cliente',
    service: 'Plomería',
    icon: 'droplet-half',
    rating: 5,
    text: 'Tenía una fuga en el baño hace semanas. Por WhatsApp hablé en minutos con un plomero verificado y quedó arreglada el mismo día, a un precio justo.',
  },
  {
    name: 'Carlos R.',
    role: 'Cliente',
    service: 'Pintura',
    icon: 'paint-bucket',
    rating: 5,
    text: 'Me dio confianza ver el sello de verificado y las opiniones de otros vecinos. El maestro cumplió con lo acordado y dejó todo limpio.',
  },
  {
    name: 'Luz Marina P.',
    role: 'Cliente',
    service: 'Albañilería',
    icon: 'bricks',
    rating: 4,
    text: 'Arreglaron una pared agrietada de mi casa. Me explicaron el trabajo antes de empezar y no hubo cobros sorpresa.',
  },
  {
    name: 'Andrés M.',
    role: 'Cliente',
    service: 'Electricidad',
    icon: 'lightning-charge-fill',
    rating: 5,
    text: 'Revisaron los tomas y el tablero de la casa. Fue muy fácil contactarlos y no tuve que descargar ninguna aplicación.',
  },
  {
    name: 'Diana C.',
    role: 'Cliente',
    service: 'Remodelación',
    icon: 'house-gear',
    rating: 5,
    text: 'Remodelamos la cocina con un presupuesto ajustado. Acordamos pagos por avance y entregaron en el tiempo prometido.',
  },
  {
    name: 'Jorge T.',
    role: 'Maestro de obra',
    service: 'Albañil',
    icon: 'hammer',
    rating: 5,
    text: 'Antes dependía del día a día. Ahora me escriben familias de mi barrio por WhatsApp y tengo trabajo más estable.',
  },
];

/** Medios de pago (diapositiva 7 del plan de negocio). */
export const PAYMENT_METHODS = [
  { icon: 'bank', label: 'Transferencia' },
  { icon: 'receipt', label: 'Consignación' },
  { icon: 'cash-stack', label: 'Efectivo' },
  { icon: 'pie-chart', label: 'Pagos por avance' },
];
