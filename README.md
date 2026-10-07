# 🛻 Theo Remolques

Sitio web institucional para un servicio de **remolque y auxilio vial 24 hs** en Buenos Aires. Una *landing page* de estilo oscuro, enfocada en **rendimiento** y en que el cliente pueda escribir por WhatsApp con un solo toque.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sin dependencias](https://img.shields.io/badge/dependencias-0-success)



## 📋 Sobre el proyecto

Quien necesita una grúa suele estar en la calle, apurado y con el celular en la mano. Por eso el sitio prioriza tres cosas: **cargar rápido**, **leerse bien en pantallas chicas** y **tener siempre a mano el botón de contacto**.

Es un sitio estático, sin frameworks ni proceso de compilación.

## ✨ Características

- **Diseño oscuro responsive** con acentos naranja y turquesa, pensado para mobile primero.
- **Contacto por WhatsApp** con mensaje prellenado, desde la barra de navegación, un botón flotante y la portada.
- **Navbar dinámica**: transparente arriba y sólida al hacer scroll; el menú móvil con animación a "X" se cierra solo al elegir una opción.
- **Animaciones de entrada** al hacer scroll con `IntersectionObserver`.
- **Galería de trabajos realizados** y secciones de **zonas de cobertura** y **medios de pago**.
- **Año del footer dinámico**.

## ⚡ Rendimiento

El proyecto se trabajó con foco en métricas web (Core Web Vitals):

- **Fuentes autoalojadas** (Roboto en `.woff2`) con `font-display: swap`, sin depender de servidores externos.
- **Imágenes en formato WebP** y carga diferida (`loading="lazy"`) en las que están fuera de la primera pantalla.
- **Atributos `width` y `height`** en las imágenes para evitar saltos de diseño (CLS).
- **Precarga de la imagen principal** (`preload`) para mejorar el LCP.
- **Carga de CSS no bloqueante** para acelerar el primer renderizado.
- **Sin librerías de terceros**: solo HTML, CSS y JavaScript vanilla.

## 🧱 Secciones

| Sección | Descripción |
| --- | --- |
| **Inicio** | Portada con logo, propuesta de valor y botón de contacto. |
| **Nuestros servicios** | Traslados de vehículos, traslados de maquinaria y auxilio mecánico 24 hs. |
| **Trabajos realizados** | Galería de fotos de servicios. |
| **Zonas de cobertura** | Áreas donde se presta el servicio. |
| **Medios de pago** | Formas de pago disponibles. |

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3**: variables CSS, Flexbox, Grid, transiciones y media queries
- **JavaScript** vanilla (ES6+)

## 📁 Estructura

```
.
├── index.html
├── style.css
├── script.js
├── fonts/        # Roboto (woff2) autoalojada
├── image/        # Imágenes en WebP + íconos
└── README.md
```



## 🌐 Despliegue en GitHub Pages

1. Entrá a **Settings → Pages** del repositorio.
2. En *Source* elegí **Deploy from a branch**.
3. Seleccioná la rama `main` y la carpeta `/ (root)`.
4. Guardá. En un par de minutos el sitio queda publicado.

## ℹ️ Sobre esta versión de demostración

Este repositorio es una **versión de portfolio** de un sitio real desarrollado para un cliente.

- Los **datos de contacto fueron reemplazados por datos de ejemplo** (el teléfono y el enlace de WhatsApp no son reales).
- Se eliminaron las herramientas de seguimiento y las referencias al dominio original, para que la demo no genere estadísticas ni se confunda con el sitio del cliente.
- Las marcas, el logotipo y las fotografías pertenecen a sus titulares y se muestran únicamente con fines de portfolio.

## 👤 Autor

**Tomás Occhiuto**
Diseño y desarrollo web

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tomas-occhiuto/)

---

<sub>El código es de mi autoría. Los contenidos de marca (nombre comercial, logo e imágenes) son propiedad del cliente.</sub>
