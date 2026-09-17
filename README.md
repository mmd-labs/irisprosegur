# Landing Page Comercial: Movistar Prosegur Alarmas - Iris Benítez

Sitio web y Landing Page orientada a conversión (**Lead Generation**) para la Agente Comercial Autorizada **Iris Benítez**. Desarrollada con **Astro 5+**, **Tailwind CSS v4** y optimizada para despliegue instantáneo en **Vercel** con rendimiento máximo (**Core Web Vitals**).

---

## 🚀 Características Principales

- **Segmentación Interactiva Hogar / Negocio**: Conmutador fluido en el Hero que adapta instantáneamente la propuesta de valor, textos persuasivos, kits de dispositivos y mensajes predefinidos de WhatsApp.
- **Canales de Conversión Directa**:
  - Botón de llamada rápida `639 26 85 26` en Cabecera, Hero y Perfil.
  - **Barra fija inferior de llamada (Sticky Call Bar)** para dispositivos móviles.
  - **Botón flotante permanente de WhatsApp (FAB)** con mensaje de apertura personalizado.
- **Escaparate de Equipamiento**: Desglose visual de los dispositivos con badges flotantes (*Cámara 360º de regalo*, *Aviso a Policía 24/7*, *Tecnología anti-inhibición*).
- **Cuadrícula de Garantías y Beneficios**: Vigilante de intervención inmediata (custodia de llaves 24 meses), sistema SOS ContiGo para hasta 6 usuarios, garantía antiocupación y doble garantía.
- **Perfil de Confianza y Social Proof**: Sección dedicada a la asesora de zona Iris Benítez y testimonios reales con 4.9/5 estrellas.
- **Acordeón de Preguntas Frecuentes (FAQ)**: Respuestas claras a las principales objeciones de compra (instalación sin obras, mascotas, coste del estudio de seguridad).
- **Cumplimiento Legal Íntegro (RGPD / LSSI-CE)**:
  - Página de **Aviso Legal** (`/aviso-legal`).
  - Página de **Política de Privacidad** (`/politica-de-privacidad`).
  - Página de **Política de Cookies** (`/politica-de-cookies`).
  - **Banner interactivo de consentimiento de cookies** con persistencia en `localStorage`.
- **SEO Técnico & Local**: Metadatos OpenGraph, Twitter Cards y marcado estructurado Schema.org (`LocalBusiness` / `SecurityService`).

---

## 🎨 Sistema de Diseño (Branding)

| Color | Hexadecimal | Uso en UI |
| :--- | :--- | :--- |
| **Azul Movistar Oscuro** | `#0B2739` | Encabezados principales, footer, tarjetas clave |
| **Azul Movistar Claro** | `#00A9E0` | Subtítulos, enlaces, acentos de interfaz, divisores |
| **Amarillo Prosegur** | `#FFD100` | Botones de llamada a la acción (CTA) y badges |
| **Blanco / Gris Claro** | `#FFFFFF` / `#F8F9FA` | Fondos de tarjetas y contraste de lectura |
| **Verde WhatsApp** | `#25D366` | Acciones directas de chat comercial |
| **Tipografía** | Montserrat & Roboto | Títulos de alto impacto y texto optimizado para lectura |

---

## 🛠️ Instalación y Desarrollo Local

### Requisitos
- Node.js 18+ o superior
- Gestor de paquetes `pnpm`

### Pasos
```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar servidor de desarrollo
pnpm dev
# Acceder a http://localhost:4321

# 3. Compilar para producción
pnpm build

# 4. Previsualizar la versión de producción
pnpm preview
```

---

## ☁️ Despliegue en Vercel

El proyecto incluye el archivo `vercel.json` con cabeceras de seguridad y optimización de caché para assets estáticos.

### Opción 1: Conectar repositorio en Vercel Dashboard (Recomendada)
1. Sube el código a tu repositorio en GitHub o GitLab.
2. Entra en [vercel.com](https://vercel.com) y pulsa **Add New... > Project**.
3. Importa el repositorio. Vercel detectará automáticamente **Astro**.
4. Pulsa **Deploy**.

### Opción 2: Despliegue mediante Vercel CLI
```bash
# Instalar vercel cli si no lo tienes
npm i -g vercel

# Desplegar
vercel
```

---

## 📝 Personalización de Datos Legales
Antes del lanzamiento comercial final, revisa los archivos en `src/pages/aviso-legal.astro`, `src/pages/politica-de-privacidad.astro` y `src/pages/politica-de-cookies.astro` para sustituir los campos entre corchetes (`[NIF]`, `[DIRECCIÓN]`, etc.) por los datos fiscales definitivos.
