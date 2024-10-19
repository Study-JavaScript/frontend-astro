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


