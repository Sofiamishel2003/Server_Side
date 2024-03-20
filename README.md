# Blog API

Este proyecto es una API REST para un sistema de blogs, diseñado para permitir a los usuarios interactuar con posts en un blog. Utiliza tecnologías como Node.js, Express, y MySQL, y demuestra buenas prácticas en el desarrollo de APIs RESTful.
Link: https://api.tiburoncin.lat/22049/posts
## Características

- Listado de todos los posts.
- Detalle de un post específico.
- Creación de nuevos posts.
- Edición de posts existentes.
- Eliminación de posts.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- Swagger para documentación de API
- CORS para permitir solicitudes de origen cruzado
- ESLint para asegurar la calidad del código

## Empezando

### Pre-requisitos

- Node.js instalado en tu sistema.
- MySQL instalado y corriendo en tu sistema.

### Instalación

1. Clona este repositorio a tu máquina local usando:
    ```bash
    git clone URL_DEL_REPOSITORIO
    ```

2. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

3. Configura tu base de datos MySQL utilizando el archivo `schema.sql` proporcionado en el repositorio.

4. Inicia el servidor:
    ```bash
    npm start
    ```

## Uso

Una vez que el servidor esté corriendo, puedes acceder a los endpoints definidos a través de herramientas como Postman o directamente desde tu aplicación cliente. Para más detalles sobre los endpoints disponibles y cómo utilizarlos, consulta la documentación de Swagger incluida en `/api_doc`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, revisa las contribuciones para obtener información sobre cómo contribuir al proyecto.

## Requisitos Cumplidos

- **Comando npm lint con ESLint (30 puntos)**: Implementado en `package.json` y `.eslintrc.json`, utilizando las reglas de estilo de Airbnb y una regla personalizada para prohibir los puntos y coma.
- **Manejo de errores 500 (15 puntos)**: Gestionado en los endpoints a través de bloques `try-catch` en `main.js`.
- **Soporte para CORS (10 puntos)**: Habilitado mediante el uso del paquete `cors` en `main.js`.
- **Implementar estados de error 400 para endpoints no existentes o datos con formato incorrecto (15 puntos)**: Se implementó correctamente al igual que 404 en los endpoints.
- **Escribir a un archivo de log.txt un detalle de cada endpoint llamado (10 puntos):**: Se implementó una función middleware que registra en un archivo log.txt los detalles de cada solicitud y respuesta, cumpliendo con este requisito​ `main.js`.
- **Documentación de endpoints con Swagger (20 puntos)**: Documentación disponible accediendo a `/api_doc` gracias a `swagger-ui-express` y la configuración en `main.js`.
- **Logging de solicitudes y respuestas (10 puntos)**: Implementado un middleware en `main.js` que registra detalles en `log.txt`.

**Puntuación Total**: 110/130 + Subjetivo(ReadMe y commits 20 puntos)
