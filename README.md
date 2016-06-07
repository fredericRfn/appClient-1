UNIZAR - Tecnologías y Modelos para el Desarrollo de Aplicaciones Distribuidas
==============================================================================

App Cliente para el proyecto de TMDAD.

Características principales:

- Se conecta con el WebService primero para obtener el id de la petición
- Tras esto, ejecuta peticiones periódicas en las que el WebService le devuelve el status de su petición
- Finalmente, se procesa el libro y nos devuelve el JSON con los datos (titulo, autor, personajes) que procesamos y mostramos por pantalla.
