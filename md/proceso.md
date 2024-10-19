# Proceso
## 1. Instalación de Astro
### Objetivo principal
Crear el proyecto de Astro en la carpeta `frontend-astro`.
### Detalles
#### Instalar Astro 5
- Instalar Astro usando la terminal, podemos utilizar npm o pnpm, etc..
    ```bash
    pnpm create astro@latest
    ## or
    npm create astro@latest
    ```	

    Una vez ejecutado, se nos abrirá una serie de preguntas, la cuales podemos responder de la siguiente manera:

    - Project name: `frontend-astro` or `./` (para instalar en el directorio actual)
    - Starter: `sample files`
    - Add TypeScript?: `Yes`
    - How Strict?: `Strict`
    - Dependencies: `Yes`
    - Github: `Yes` or `No`(Si estas usando submodulos de Github y ya lo has configurado como submodulo)

- Actualizar a Astro 5
    ```bash
    pnpx @astrojs/upgrade beta
    ## or
    npx @astrojs/upgrade beta
    ```

    Nos preguntara si queremos actualizar el `package.json`, `pnpm-lock.yaml` y `astro.config.mjs`, responder `Yes`.

#### Instalar librerías
##### Tailwind
- Usar el comando `pnpx astro add tailwind` o `npx astro add tailwind` para instalar tailwind y hacer las configuraciones necesarias en el proyecto.
- En las preguntas que se desplieguen, responder a todo con `Yes`.
##### React
- Usar el comando `pnpx astro add react` o `npx astro add react` para instalar react y hacer las configuraciones necesarias en el proyecto.
##### ShadcnUI
- Usar el CLI de Shadcn para iniciar Shadcn `pnpx shadcnui@latest init` o `npx shadcn-ui@latest init`
- Puedes encontrar una guía para instalar shadcn en el siguiente [link](https://ui.shadcn.com/docs/installation/astro)

#### Levantar el proyecto
- Usar el comando `pnpm dev` o `npm run dev` para levantar el proyecto en `http://localhost:4321/`
## 2. Desarrollo 
### Objetivo principal
Desarrollo de los requerimientos para el frontend teniendo en cuenta intentando hacer uso de la arquitectura de Clean Architecture y las mejores prácticas de Astro.
### Requisitos
La aplicación debe tener un `frontend` básico con al menos las siguientes páginas:
- Formulario register y login.
- Home/Inicio donde se muestran las publicaciones de todos los usuarios ordenadas por fecha de creación (las más nuevas al principio).
- Perfil de usuario en el que se pueden completar/editar datos personales.
- Las publicaciones en el `frontend` deben mostrar:
    - Contenido/descripción.
    - Nombre del Autor.
    - Fecha de creación/edición.
- Porcentaje de popularidad (cantidad de likes/(cantidad de usuarios existentes - 1))
- Añade la posibilidad a la página de inicio de ordenar las publicaciones por porcentaje de popularidad ascendente, descendente, y por autor alfabéticamente (AZ y ZA).
- Añade a tu página de inicio una barra de búsqueda que implemente la posibilidad de buscar publicaciones que contengan el texto introducido en su contenido. Implementa la función debounce para limitar las búsquedas.
### Detalles
#### Server Actions & Rendering
- Usar server actions para las peticiones al backend.
- Tratar de minimizar el uso del cliente, para que sea el servidor el que represente el frontend y se encargue de la lógica de la aplicación.
- Utilizar las cookies del servidor para el manejo de sesiones y autenticación.



