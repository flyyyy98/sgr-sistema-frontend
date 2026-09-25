# 🏛️ Plataforma Territorial SGR • Ilustre Municipalidad de La Serena
**Sistema de Gestión de Reportes Ciudadanos y Coordinación Territorial (Segunda Entrega 2026)**

Plataforma oficial de atención y seguimiento territorial de la Municipalidad de La Serena. Diseñada con la identidad cívica y heráldica oficial comunal (Rojo Heráldico `#B80003`, Azul Marino `#0B1120`, Oro `#D97706`), accesible bajo estándares WCAG AAA para adultos mayores y optimizada para cuadrillas en terreno y vecinos de las 6 delegaciones.

🌐 **Demo en Vivo (GitHub Pages):** [https://flyyyy98.github.io/sgr-sistema-frontend/](https://flyyyy98.github.io/sgr-sistema-frontend/)

---

## 🎨 Módulos y Vistas de la Plataforma

| Vista / Módulo | Archivo | Descripción Operativa |
| :--- | :--- | :--- |
| 🔍 **Mi Reporte (Seguimiento)** | [`index.html#seguimiento`](index.html) | Portal ciudadano 24/7 con búsqueda por Folio/RUT, barra de progreso adaptativa multi-parada y fotos de antes/después. |
| 👷‍♂️ **Terreno (Cuadrilla)** | [`index.html#terreno`](index.html) | Semáforo de desempeño operativo, velocímetro interactivo de cumplimiento con simulación de tareas adicionales. |
| 📋 **Tubo de Trabajo (Kanban)** | [`index.html#tubo`](index.html) | Tablero Kanban con los 4 estados oficiales del municipio (Ingresado, Asignado, En Proceso, Finalizado). |
| 🛡️ **Coordinación (Check=1)** | [`index.html#coordinacion`](index.html) | Módulo de auditoría de actas, supervisores territoriales y matriz de calidad. |
| 🏛️ **Alcaldía (Mando)** | [`index.html#alcaldia`](index.html) | Mando estratégico con KPIs comunales de las 6 delegaciones territoriales. |
| 👥 **Padrón de Vecinos (CRUD)** | [`vecinos.html`](vecinos.html) | Catastro ciudadano comunal con validación algorítmica de RUT chileno (Módulo 11) y georreferenciación. |
| 📈 **Reportes y Excel** | [`reportes.html`](reportes.html) | Centro analítico y generación de reportes oficiales exportables a `.xlsx`. |
| 👤 **Usuarios y Funcionarios** | [`usuarios.html`](usuarios.html) | Gestión de personal municipal, cuadrillas operativas y coordinadores territoriales. |
| 📍 **6 Delegaciones** | [`delegaciones.html`](delegaciones.html) | Catálogo de sedes: Centro, Las Compañías, La Pampa, La Antena, Rural Oriente y Rural Costero. |
| 🎯 **Metas de Atención** | [`metas.html`](metas.html) | Configuración de metas mensuales adaptativas con tope de 150% y bonificaciones. |
| 🔑 **Roles y Permisos** | [`roles.html`](roles.html) | Matriz RBAC para Alcaldía, Administradores, Cuadrillas Operativas y Vecinos. |
| 🏷️ **Tipos & Sub-Atenciones** | [`tipos_atencion.html`](tipos_atencion.html) | Catálogo de DISERCO, DIDECO, Tránsito, Seguridad y Medio Ambiente con tiempos SLA. |
| 🔐 **Acceso Municipal** | [`login.html`](login.html) | Pantalla de autenticación y recuperación de credenciales municipales. |

---

## 🏛️ Identidad Visual & Normas Gráficas

* **Azul Marino Institucional:** `#0B1120` y `#151F33` (Cabecera oficial y status bar `#070D1E`)
* **Rojo Heráldico Oficial:** `#B80003` (Acentos de alta jerarquía, botones primarios y borde distintivo)
* **Oro Heráldico:** `#D97706` y `#F59E0B` (Insignia de escudo y alertas operativas)
* **Superficie Limpia:** `#F8FAFC` con tarjetas GovTech `.muni-card` (`#FFFFFF`) y bordes accesibles `#E2E8F0`
* **Accesibilidad:** Selector dinámico de tipografía (A / A+), modo de alto contraste para baja visión y soporte de impresión oficial.
