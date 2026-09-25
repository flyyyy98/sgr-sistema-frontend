/**
 * ==============================================================================
 * TUTORIAL GUIADO PASO A PASO • ILUSTRE MUNICIPALIDAD DE LA SERENA
 * Basado en la librería open source Driver.js (kamranahmedse/driver.js)
 * ==============================================================================
 */

(function () {
    'use strict';

    // Función principal para lanzar el Tour Guiado
    window.iniciarTutorialSGR = function () {
        // Verificar si Driver.js está cargado
        if (typeof window.driver === 'undefined' || typeof window.driver.js === 'undefined') {
            console.warn('Driver.js no está disponible aún. Cargando alternativo...');
            // Fallback al modal si Driver.js no estuviese cargado
            const modalEl = document.getElementById('modalTutorialSGR');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
                modal.show();
            }
            return;
        }

        const driver = window.driver.js.driver;

        // Pasos del tour guiado interactivo
        const steps = [
            {
                element: '#tour-brand',
                popover: {
                    title: '🏛️ Plataforma Territorial La Serena',
                    description: 'Bienvenido(a) al Sistema de Gestión Territorial de la Ilustre Municipalidad de La Serena. Centraliza la atención ciudadana en las 6 delegaciones comunales.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#tour-kpis',
                popover: {
                    title: '📊 Indicadores y Métricas en Tiempo Real',
                    description: 'Monitorea instantáneamente el total de vecinos en el padrón, delegaciones activas, personal comunal, roles, metas y atenciones registradas.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#tour-vecinos-link',
                popover: {
                    title: '👥 Padrón Comunal de Vecinos (Módulo 11)',
                    description: 'Aquí gestionas a los vecinos de La Serena con búsqueda rápida por RUT, registro de solicitudes, historial de atenciones y borrado lógico seguro.',
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '#tour-mantenedores',
                popover: {
                    title: '⚙️ Mantenedores del Sistema',
                    description: 'Administración estructural: Delegaciones (Centro, Las Compañías, Pampa, Antena, Rural, Costanera), 10 Roles oficiales, Cuentas de usuarios y Tipos/Sub-atenciones.',
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '#tour-reportes',
                popover: {
                    title: '📑 Reportería Oficial y Excel (.xlsx)',
                    description: 'Genera y descarga en un clic las nóminas comunales oficiales en formato Microsoft Excel con membrete municipal y timestamp de auditoría.',
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '#tour-user-dropdown',
                popover: {
                    title: '👤 Perfil y Seguridad de Sesión',
                    description: 'Consulta tu usuario activo, rol institucional asignado y gestiona tu sesión de forma segura conforme a los estándares municipales.',
                    side: 'bottom',
                    align: 'end'
                }
            },
            {
                element: '#tour-tutorial-btn',
                popover: {
                    title: '🎓 Acceso al Tutorial en Cualquier Momento',
                    description: '¡Listo! Puedes reactivar este recorrido interactivo o consultar el manual del sistema siempre que lo necesites desde este botón.',
                    side: 'bottom',
                    align: 'end'
                }
            }
        ];

        // Filtrar pasos cuyo elemento exista en el DOM actual
        const availableSteps = steps.filter(step => {
            const el = document.querySelector(step.element);
            return el !== null && el.offsetParent !== null; // elemento visible
        });

        // Configuración oficial de Driver.js adaptada a la identidad de La Serena
        const driverObj = driver({
            showProgress: true,
            animate: true,
            allowClose: true,
            overlayColor: 'rgba(11, 17, 32, 0.78)',
            stagePadding: 6,
            stageRadius: 10,
            nextBtnText: 'Siguiente →',
            prevBtnText: '← Anterior',
            doneBtnText: '¡Finalizar Guía!',
            progressText: 'Paso {{current}} de {{total}}',
            steps: availableSteps.length > 0 ? availableSteps : steps,
            onDestroyStarted: () => {
                driverObj.destroy();
            }
        });

        driverObj.drive();
    };

    // Auto-activación si se añade el parámetro ?tutorial=1 a la URL
    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tutorial') === '1') {
            setTimeout(window.iniciarTutorialSGR, 600);
        }
    });

})();
