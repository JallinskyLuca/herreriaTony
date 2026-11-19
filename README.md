# Herrería Tony — Identidad Visual y Landing Page de Alta Conversión

Sitio web estático ultra rápido para **Herrería Tony**, taller de herrería artesanal y de obra con más de 45 años de oficio (Desde 1980 en Buenos Aires).

Diseñado bajo la premisa de **Cero Fotos Reales / Estética de Plano Técnico (CAD & Blueprint)**, proyectando máxima autoridad, transparencia técnica y conversión directa a WhatsApp (`11 5564-5199`).

---

## 🛠️ Stack Tecnológico (100% Free Cost / Static Deploy)

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation / 0 KB JS por defecto)
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS 3 con sistema de diseño personalizado
- **Gráficos & Planos:** SVGs puros vectoriales interactivos (Logotipo, Planos de Conjunto y Despiece Técnico CAD)
- **Tipografías (Google Fonts):**
  - Títulos y Logo: `Bebas Neue` & `Oswald`
  - Textos de Cuerpo: `Plus Jakarta Sans`
  - Cotas y Anotaciones Técnicas: `JetBrains Mono`
- **Iconografía:** Lucide Icons + SVGs artesanales

---

## 🎨 Sistema de Diseño y Paleta de Colores

- **Fondo Principal (Hierro Forjado):** `#121215` (Zinc oscuro con textura de plano milimetrado)
- **Fondo Secundario / Tarjetas:** `#1C1C21` con bordes `#2E2E36`
- **Acento Fragua:** `#EA580C` (Naranja intenso) y `#F97316` (Hover / Brillo)
- **Acento CAD Blueprint:** `#38BDF8` (Cian técnico para cotas y ejes)
- **Texto Principal:** `#F4F4F5` (Acero claro)
- **Texto Secundario:** `#A1A1AA`

---

## 📐 Estructura de Secciones

1. **Top Status Bar & Navbar:**
   - Indicador en vivo de taller abierto, zona de cobertura y botón de presupuesto directo a WhatsApp.
   - Logotipo vectorial oficial con isotipo de yunque/monograma `T` en hierro macizo y chispa naranja.
2. **Hero Section (Primera Pantalla):**
   - Badge de taller: `// TALLER DE HERRERÍA GENERAL Y ARTESANAL • +45 AÑOS`
   - Título de alto impacto: *"Más de 45 años domando el hierro. Trabajos a medida hechos para durar."*
   - CTA Principal WhatsApp (`#EA580C`) con mensaje prearmado.
   - **Plano Técnico CAD Interactivo:** Plano en SVG de alta precisión de una Parrilla Patagónica con mecanismo de elevación lateral, volante de fundición con trinquete, paños en ángulo V enlozados desmontables, brasero uruguayo suspendido y líneas de cota milimétricas (`1400mm x 1180mm`).
3. **Barra de Métricas y Autoridad:**
   - `+45 Años de Trayectoria`
   - `100% Fabricación a Medida`
   - `Materiales de Espesor Real`
   - `Presupuesto Sin Cargo en el Día`
4. **Catálogo Técnico de Soluciones (Sin fotos de stock, con planos vectoriales dedicados):**
   - **A. Herrería Artesanal y Mobiliario:**
     - *Parrillas & Asadores de Alta Gama*
     - *Mesas & Muebles Industriales (Hierro estructural y madera maciza)*
     - *Proyectos Especiales a Pedido (Pérgolas, iluminación y piezas de autor)*
   - **B. Herrería de Obra y Seguridad:**
     - *Portones Corredizos & Levadizos (Con ruedas de acero y rulemanes blindados)*
     - *Rejas de Seguridad & Frentes Integrales (Barrotes pasantes de 1/2" y anclaje empotrado)*
     - *Estructuras, Techos & Reparaciones (Vigas UPN/IPN, escaleras y soldaduras MIG en sitio)*
   - Cada tarjeta incluye su propio diagrama CAD acotado y botón *"Cotizar este trabajo →"* preconfigurado para WhatsApp.
5. **Diferencial "Traé tu boceto o idea":**
   - Diagrama comparativo: Papel con boceto a mano alzada -> Interpretación técnica de Tony -> Hierro real terminado.
6. **Proceso de Taller en 4 Pasos:**
   - `01. Nos contás tu idea` -> `02. Asesoramiento y medidas` -> `03. Fabricación artesanal en taller` -> `04. Entrega y colocación`.
7. **Cotizador Rápido de Taller:**
   - Selector interactivo donde el cliente elije servicio, medidas y zona, y genera un mensaje de WhatsApp perfectamente estructurado.
8. **Footer & Botón Flotante:**
   - Sello oficial de forja (`EST. 1980`), horarios, zonas de atención y botón flotante de WhatsApp con pulso continuo.

---

## ⚙️ Configuración Fácil (`src/config/site.ts`)

Todos los datos de contacto, textos y servicios son configurables en un único archivo:

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Herrería Tony",
  phone: "11 5564-5199",
  whatsappNumber: "5491155645199",
  coverageArea: "CABA, Zona Norte, Zona Oeste y Gran Buenos Aires...",
  workshopHours: "Lunes a Viernes: 08:00 a 18:00 hs | Sábados: 08:00 a 13:00 hs",
  // ...
};
```

---

## 🚀 Comandos de Desarrollo y Producción

```bash
# Iniciar servidor de desarrollo en localhost:4321
npm run dev

# Verificar tipado y compilar para producción (carpeta /dist)
npm run build

# Previsualizar la versión de producción
npm run preview
```

---

## ☁️ Despliegue 100% Gratuito

El proyecto genera una carpeta `dist/` con HTML, CSS y JS estáticos, compatible con:
- **Vercel** (`vercel --prod`)
- **Netlify** (arrastrar la carpeta `dist`)
- **Cloudflare Pages**
- **GitHub Pages**
