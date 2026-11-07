# CONSTRURED – Landing page

> *Construimos confianza, conectamos talento.*

Landing page de **CONSTRURED**, plataforma que conecta a familias de bajos recursos con
maestros de obra verificados (albañiles, plomeros, pintores y electricistas) por WhatsApp.

## Tecnologías

- **HTML5** semántico
- **CSS3** con variables (paleta tomada del logo)
- **Bootstrap 5.3** y **Bootstrap Icons** (por CDN)
- **JavaScript** moderno con módulos ES (`import` / `export`), sin dependencias

## Estructura

```
construred/
├── index.html              # Estructura de la página
├── assets/
│   ├── css/
│   │   ├── base.css        # Variables, tipografía, utilidades y animaciones
│   │   ├── components.css  # Botones y tarjetas reutilizables
│   │   ├── layout.css      # Navegación, pie de página y botón flotante
│   │   ├── hero.css        # Portada y franja de cifras
│   │   ├── sections.css    # Cómo funciona, sello, maestros, FAQ y contacto
│   │   └── reviews.css     # Reseñas de clientes
│   ├── js/
│   │   ├── main.js         # Punto de entrada
│   │   ├── config.js       # Número de WhatsApp y parámetros
│   │   ├── data/
│   │   │   └── content.js  # Textos de servicios, beneficios, FAQ, etc.
│   │   ├── ui/             # Plantillas y comportamiento (navbar, animaciones, enlaces)
│   │   └── utils/          # Funciones de DOM reutilizables
│   └── img/                # Logo, fotos, QR e íconos
└── recursos/               # Imágenes originales del PPTX (no se publican)
```

**Regla del proyecto:** ningún archivo de código supera las 300 líneas.

## Ver la página en tu computador

Como el JavaScript usa módulos, la página debe abrirse desde un servidor local
(al hacer doble clic en `index.html` los módulos no cargan).

- **VS Code:** instala la extensión *Live Server*, clic derecho en `index.html` → *Open with Live Server*.
- **Node.js:** en la carpeta del proyecto ejecuta `npx serve .` y abre la dirección que aparece.

## Cómo editar

| Quiero cambiar…                                  | Archivo                       |
|--------------------------------------------------|-------------------------------|
| El número o el mensaje de WhatsApp               | `assets/js/config.js`         |
| Servicios, pasos, beneficios, preguntas, cifras  | `assets/js/data/content.js`   |
| Íconos y medios de pago                          | `assets/js/data/content.js`   |
| Reseñas (nombre, servicio, estrellas, texto)     | `assets/js/data/content.js` (`REVIEWS`) |
| Colores, tipografías y escala general (tamaño)   | `assets/css/base.css` (`:root` y `html`) |
| Textos fijos (portada, títulos de sección)       | `index.html`                  |

Cualquier enlace con el atributo `data-wa` abre WhatsApp:

```html
<a data-wa>…</a>                         <!-- mensaje por defecto -->
<a data-wa="Hola, necesito un pintor">…</a> <!-- mensaje personalizado -->
```

> **Importante:** el código QR (`assets/img/qr-whatsapp.png`) es una imagen.
> Si cambias el número de WhatsApp, hay que generar un QR nuevo.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `construred`).
2. Sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Landing page CONSTRURED"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/construred.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/construred/`.
5. En `index.html`, cambia `og:image` por la URL completa
   (`https://TU-USUARIO.github.io/construred/assets/img/og-construred.jpg`)
   para que la imagen aparezca al compartir el enlace.

## Buenas prácticas aplicadas

- Separación de responsabilidades: estructura (HTML), estilos (CSS) y comportamiento (JS).
- Contenido separado de la presentación: los bloques repetitivos se generan desde `content.js`.
- Configuración centralizada, sin "números mágicos" en el código.
- Textos escapados antes de insertarlos en el HTML (prevención de inyección).
- Accesibilidad: textos alternativos, `aria-label`, contraste AA y soporte para `prefers-reduced-motion`.
- Rendimiento: imágenes optimizadas, `loading="lazy"`, dimensiones declaradas y scripts diferidos.
- Formato consistente definido en `.editorconfig`.
