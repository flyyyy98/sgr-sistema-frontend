# 🏛️ SGR La Serena • Frontend & Design System (Stitch Ready)
**Ilustre Municipalidad de La Serena • Plataforma Territorial y Gestión Ciudadana**

Este repositorio contiene exclusivamente el **Front-End completo y las vistas visuales pre-renderizadas** del Sistema de Gestión y Resultados Territoriales (SGR) de la Municipalidad de La Serena, preparado específicamente para su inspección, análisis y **rediseño mediante Google Stitch** y herramientas modernas de UI/UX.

---

## 🎨 Vistas Disponibles para Previsualización y Rediseño en Stitch

Cada pantalla ha sido compilada con datos de demostración reales del municipio y rutas relativas autónomas (HTML5 + CSS + JavaScript vanilla / Bootstrap 5 + SweetAlert2 + Driver.js), permitiendo abrirse directamente en cualquier navegador o cargarse en Google Stitch:

| Pantalla / Módulo | Archivo HTML | Descripción UI/UX |
| :--- | :--- | :--- |
| 📊 **Dashboard Principal** | [`index.html`](index.html) | Panel ejecutivo con KPIs comunales, tarjetas métricas de delegaciones, gráficos y tutorial guiado interactivo. |
| 📈 **Reportes y Analítica** | [`reportes.html`](reportes.html) | Filtros de atenciones por delegación, rango de fechas y generación de reportes operativos. |
| 👥 **Padrón de Vecinos (CRUD)** | [`vecinos.html`](vecinos.html) | Tabla interactiva de vecinos, modales de registro/edición, validación de RUT chileno y búsqueda reactiva. |
| 🛡️ **Gestión de Funcionarios** | [`usuarios.html`](usuarios.html) | Mantenedor de cuentas de usuario, asignación de roles y delegaciones territoriales. |
| 📍 **Delegaciones Comunales** | [`delegaciones.html`](delegaciones.html) | Catálogo de sectores territoriales (Centro, Las Compañías, La Antena, Rural, etc.). |
| 🔑 **Roles y Permisos** | [`roles.html`](roles.html) | Matriz de perfiles de acceso (Administrador, Delegado, Gestor Territorial). |
| 🎯 **Metas Territoriales** | [`metas.html`](metas.html) | Indicadores de cumplimiento trimestral y metas de atención ciudadana. |
| 📋 **Tipos de Atención** | [`tipos_atencion.html`](tipos_atencion.html) | Clasificación de solicitudes de vecinos (Social, Operativo, Aseo, Alumbrado). |
| 📑 **Sub-Atenciones** | [`sub_atenciones.html`](sub_atenciones.html) | Desglose específico de solicitudes por departamento municipal. |
| 🔐 **Inicio de Sesión** | [`login.html`](login.html) | Pantalla de autenticación con carrusel fotográfico patrimonial de La Serena (Faro Monumental, Plaza de Armas, Catedral). |
| 🔑 **Recuperación de Contraseña** | [`recuperar_password.html`](recuperar_password.html) | Formulario de envío de código de verificación por correo municipal. |
| 🔢 **Validación de Código** | [`validar_codigo.html`](validar_codigo.html) | Inputs tipo PIN de 6 dígitos con cuenta regresiva para validación de seguridad. |
| 🔒 **Cambio de Contraseña** | [`cambiar_password.html`](cambiar_password.html) | Formulario de nueva contraseña con medidor de seguridad y requisitos mínimos. |

---

## 🏛️ Identidad Visual & Tokens de Diseño (Normas Gráficas)

* **Rojo Carmín Municipal:** `#B80003` (Color primario institucional)
* **Oro Heráldico:** `#D4AF37` / `#B45309` (Acentos y franja superior bicentenaria)
* **Gris Neutro / Fondo:** `#F8FAFC` y `#F1F5F9`
* **Texto Principal:** `#0F172A`
* **Bordes & Contenedores:** `#E2E8F0` con radios `12px` / `16px` / `24px`
* **Sombras (Soft Elevation):** `0 1px 3px rgba(0,0,0,0.06)`, `0 10px 25px -5px rgba(0,0,0,0.08)`
* **Tipografía:** Inter / SF Pro Display / Segoe UI (-apple-system)

---

## 📁 Estructura del Repositorio

```text
├── index.html                   # Dashboard Principal (Entrada GitHub Pages / Stitch)
├── reportes.html                # Módulo de Reportes
├── vecinos.html                 # CRUD Vecinos
├── usuarios.html                # CRUD Usuarios
├── delegaciones.html            # Mantenedor Delegaciones
├── roles.html                   # Mantenedor Roles
├── metas.html                   # Mantenedor Metas
├── tipos_atencion.html          # Mantenedor Tipos de Atención
├── sub_atenciones.html          # Mantenedor Sub-Atenciones
├── login.html                   # Autenticación + Carrusel Patrimonial
├── recuperar_password.html      # Recuperación
├── validar_codigo.html          # Código PIN 6 dígitos
├── cambiar_password.html        # Actualización de clave
├── static/                      # Activos estáticos completos
│   ├── css/
│   │   ├── muni-laserena.css    # Estilos oficiales SGR + UI Stitch
│   │   └── apple-design.css     # Estilos complementarios
│   ├── js/
│   │   └── tutorial-guiado.js   # Script Driver.js para onboarding interactivo
│   ├── img/                     # Escudos SVG oficiales, logos y fotos patrimoniales
│   └── vendor/
│       └── driverjs/            # Kamranahmedse Driver.js
└── templates/                   # Plantillas modulares originales Django (referencia técnica)
```

---

## 🚀 Uso en Google Stitch & GitHub Pages

1. **Para rediseñar en Google Stitch:**
   * Importa este repositorio o sube las pantallas HTML correspondientes.
   * Utiliza la barra superior interactiva (*Stitch Preview Bar*) para alternar entre pantallas rápidamente.
2. **Para activar GitHub Pages:**
   * En GitHub ve a **Settings** > **Pages**.
   * En *Source*, selecciona la rama `main` y la carpeta `/ (root)`.
   * Presiona **Save**. En 1 minuto tendrás la URL pública en vivo lista para compartir con Stitch.
