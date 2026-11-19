# Preparación para publicación

Revisión realizada el 14 de noviembre de 2026.

## Implementado

- Sitio estático compilable con Astro.
- Aviso de privacidad enlazado desde el cotizador y el footer.
- Cotizador sin almacenamiento en el sitio. Los datos quedan en el navegador hasta que la persona decide abrir y enviar el mensaje en WhatsApp.
- Página 404.
- robots.txt y sitemap.xml generados según la variable PUBLIC_SITE_URL.
- Etiquetas canónicas, Open Graph y bloqueo de indexación mientras no exista un dominio configurado.
- Navegación adaptable a celulares y tablets.
- Enlace al trámite oficial de Defensa del Consumidor.
- Inventario actual sin analítica, publicidad, cuentas, localStorage ni cookies propias.

## Datos necesarios antes de publicar

El titular del negocio debe confirmar nombre y apellido o razón social, CUIT, domicilio comercial o legal, correo de contacto y dominio final. Estos datos no se incorporaron porque no fueron proporcionados.

También debe definirse quién atiende solicitudes sobre datos personales y reclamos de consumo, cómo registra su recepción y qué plazo operativo usa para conservar conversaciones de WhatsApp.

Debe revisarse con el titular o su contador si corresponde incorporar el Formulario 960/D de Data Fiscal. El código debe obtenerlo el titular con su acceso fiscal.

Si por WhatsApp se perfeccionan contrataciones a distancia, debe implementarse y operarse el canal aplicable para solicitudes de arrepentimiento. El sitio no muestra un enlace de recepción porque todavía no existe un canal confirmado que registre la solicitud y devuelva una identificación.

Antes de usar fotografías, marca o imágenes de personas en producción, el titular debe confirmar que cuenta con las autorizaciones y licencias correspondientes.

## Configuración del dominio

Crear un archivo .env a partir de .env.example y completar PUBLIC_SITE_URL con el dominio definitivo. Sin esa variable, la compilación incluye noindex y robots.txt bloquea el rastreo para evitar indexar una dirección provisoria.

## Base revisada

La Ley 25.326 regula la información previa, el uso de datos y los derechos de acceso, corrección y eliminación. [Texto actualizado de la Ley 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)

La Disposición 954/2025 regula canales visibles para arrepentimiento y baja en comercialización a distancia, además de información de atención al consumidor. Su aplicación concreta depende de cómo se cierre cada contratación. [Texto oficial de la Disposición 954/2025](https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-954-2025-417152/texto)

La Disposición 3/2026 complementa los mecanismos de identificación y seguridad para esas solicitudes. [Texto oficial de la Disposición 3/2026](https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-3-2026-423007/texto)

Esta revisión prepara el código y enumera pendientes operativos. La publicación final requiere completar los datos del titular y revisar cómo se concretan las ventas o contrataciones por WhatsApp.
