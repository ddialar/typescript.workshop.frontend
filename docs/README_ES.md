# TypeScript curso de formación - Frontend

<img src="https://img.shields.io/badge/Version-1.0.0-yellow" /> <img src="https://img.shields.io/badge/TypeScript-4.1.2-blue" /> <img src="https://img.shields.io/badge/Create%20React%20App-4.0.3-blue" />

[🇬🇧 Version](https://github.com/ddialar/typescript.workshop.frontend/blob/master/README.md)

## 📖 Index

-   [Description](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#description)
-   [Requisitos del sistema](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#requirements)
-   [Visión general del repositorio](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview)
    -   [Variables de entorno](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-environment-variables)
    -   [Arquitectura](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture)
        -   [view](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view)
            -   [common](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-common)
            -   [components](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-components)
            -   [context](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-context)
            -   [navigation](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-navigation)
            -   [pages](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-pages)
            -   [Otras posibles secciones](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-view-other-elements)
        -   [domain](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-domain)
        -   [infrastructure](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-infrastructure)
        -   [test](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-test)
        -   [types](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-architecture-types)
    -   [Entornos de ejecución](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#repository-overview-environments) [TBD]
-   [Listado de comandos](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands)
    -   [Cambiando la versión de NodeJS](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands-switch-node)
    -   [Proceso de instalación de módulos](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands-installation)
    -   [Ejecución de los tests](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands-tests)
    -   [Ejecución de la aplicación en modo desarrollo](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands-dev-mode)
    -   [Compilación de la aplicación](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#commands-pro-mode)
-   [Reconocimientos y agradecimientos](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#credits-and-thanks)
-   [TODO list](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#todo-list)
-   [Elementos a investigar](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md#research-list)

## <a id="description"></a>🔍 Descripción

Este repositorio está orientado a proporcionar el frontend para el taller de TypeScript al que pertenece.

En esta caso, estamos implementando el frontend de una aplicación de Social Media que permite registrar usuarios y que se autentiquen, crear y eliminar posts, crear y eliminar comentarios de posts y dar o quitar 'me gusta' a los posts.

La idea original de esta aplicación está tomada de este interesantísimo taller llamado [Build a Social Media App (MERNG stack)](https://morioh.com/p/07b0be424b5f?f=5ece1a68f0e6056e36305f65), creado por [Classsed](https://www.youtube.com/c/classsed) y publicado por [freecodecamp.org](https://www.freecodecamp.org/).

A diferencia de la versión original, este códigio envía sus peticiones a una API REST para acceder a las funcionalidades del backend.

La mayor parte del código está creada siguiendo el paradigma de la **programación funcional**.

Algunas de las herramientas usadas en este repositorio son las siguientes:

-   ⚛️ `Create React App` para la implementación base de la aplicación.
-   🔀 `React Router Dom` para la gestión de rutas.
-   ⚙️ `.env` para las variables de entorno.
-   💅 `Semantic UI` como framework de estilos.
-   🤝 `Axios` para las comunicaciones con la API.
-   📦 `Webpack` para transpilar y empaquetar el código TypeScript.
-   🔒 `JWT` como servicio de tokens.
-   ✅ `Joi` para la validación de datos.
-   🧪 `Jest` para los tests unitarios.
-   🐶 `Husky` para la gestión de los Git Hooks.
-   🔍 `ESLint` para la revisión y formateado del código.

Además este repositorio está diseñado para trabajar con `NodeJS 14.15.0 LTS`.

Si estás ejecutando versiones diferentes de NodeJS en tu sistema, simplemente ejecuta `nvm use` y éste se cambiará a la versión indicada en el archivo `.nvmrc`.

## <a id="requirements"></a>💻 Requisitos del sistema

Para ejecutar el código en su sistema, necesitas tener cubiertos los siguientes requisitos mínimos:

-   NodeJS 14.15.0
-   npm 6.14.11
-   npx 6.14.11
-   Docker 20.10.2
-   docker-compose 1.27.4

Además de esto, es recomendable que cuentes con lo siguiente:

-   nvm 0.33.0
-   Navegador web (recomendado Google Chrome 88.0)
-   Editor de código (recomendado VScode 1.52.1)

⚠️ Para hacer que esta aplicación funcione correctamente, se necesita ejecutar el servidor de desarrollo ubicado en este repositorio: [TypeScript Workshop Backend](https://github.com/ddialar/typescript.workshop.backend).

## <a id="repository-overview"></a>👀 Visión general del repositorio

### <a id="repository-overview-environment-variables"></a>⚙️ Variables de entorno

Dado que este repositorio está construido bajo el paraguas de Create React App, el código base incluye `dotenv` como gestor de variables de entorno. No obstante, para utilizar archivos `.env` personalizados, necesitamos seguir las instruciones dadas en la [documentación oficial](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).

En base a esto, para este proyecto vamos a tener tres archivos de entorno diferentes, ubicados en la raíz del proyecto. Estos archivos son:

-   `.env` para producción.
-   `.env.development` para desarrollo.
-   `.env.test` para testing.

Siéntete totalmente libre de eliminar alguno de ellos o incluir otros dependiendo de las necesidades de tu aplicación. Tan sólo ten en cuenta que deberás seguir las indicaciones de la documentación oficial.

Los principales campos que incluirán estos archivos son los siguientes:

```sh
# Set the base URL where the application will aims its requests.
BASE_URL="http://localhost:3600"

# Rest of the environment variables here.
```

### <a id="repository-overview-architecture"></a>🏗 Arquitectura

Este repositorio está implementado siguiendo el patrón `container-view` (también conocido como `componentes contenedores y presentacionales`), aplicamente usado en aplicaciones basadas en React.

Además de esto y para proporcionar un desacople real entre la aplicación web y sus fuentes de datos, las conexiones con el mundo exterior así como con la mayoría de la lógica de negocio básica que esta aplicación podría contener, ha sido colocada en secciones diferentes, siguiendo la arquitectura por Capas más sencilla, es decir, **dominio** e **infraestructure**.

En resumen, este código fuente estará organizado en tres capas diferentes:

-   `view`
-   `domain`
-   `infrastructure`

La estructura completa de directorios es la siguiente:

```
src/
 +- view/
 |   +- common/
 |   +- components/
 |   |   +- containers/
 |   |   +- presentationals/
 |   +- context/
 |   +- navigation/
 |   +- pages/
 +- domain/ [tbd]
 +- infrastructure/
 |   +- api/
 |   +- dataSources/
 |   +- mappers/
 |   +- utils/
 +- types/
 +- test
     +- fixtures
```

#### <a id="repository-overview-architecture-view"></a>🖼 view

##### <a id="repository-overview-architecture-view-common"></a>🔄 common

En esta capa vamos a implementar el conjunto de elementos que son comunes al resto de la aplicación.

En este caso, el único código en común son las rutas de navegación en la aplicación y está hecho mediante el archivo `routes.ts`.

##### <a id="repository-overview-architecture-view-components"></a>🧩 components

Aquí tenemos que diferenciar entre dos tipos de componentes:

-   📦 `containers` este tipo de componentes incluyen la lógica de negocio más básica para proporcionar funcionalidad al componente, así como contener otros componentes representacionales.
-   ⛵️ `presentationals` son componentes realmente simples encargados de representar información visual, la cual es proporcionada por los contenedores de tipo contenedor donde son utilizados.

Cada componentes está definido como un módulo independiente, exportando sus funcionalidades a través de su archivo `index.ts` específicos, para ser importados allí donde sean necesarios.

##### <a id="repository-overview-architecture-view-context"></a>🗺 context

El código definido en este directorio proporcionamos acceso a los datos globales dentro de la aplicación, a nivel de la capa `view`.

En este caso, sólo hemos defindo el código dirigido a gestionar los datos del usuario autenticado, para manejar el comportamiento de algunos componentes.

##### <a id="repository-overview-architecture-view-navigation"></a>🔀 navigation

Aquí es donde definimos los elementos en enrutamiento de la aplicación, los cuales están definidos en base a [React Router DOM](https://reactrouter.com/).

En este caso, no ha sido necesario diferenciar entre rutas de acceso público o privado dado que, allí donde es necesario, la misma ruta puede ser empleada tanto por usuarios autenticados como por los que no lo están.

Los diferentes elementos que se mostrarán u ocultarán dependiendo de su el usuario está autenticado o no, son gestionados por el código del propio componente y su complejidad no require implementar rutas específicas para ser gestionados.

##### <a id="repository-overview-architecture-view-pages"></a>📄 pages

Este directorio contiene las definiciones de todas las páginas usadas en la aplicación.

Cada página está definida como un módulo independiente, exportarndo sus funcionalidades a través de archivos `index.ts` específicos, para ser importadas allí donde seán requeridos.

##### <a id="repository-overview-architecture-view-other-elements"></a>Otras posibles secciones

Otras posibles secciones que podrían ser incluidas en esta estructura, pero que no han sido definidas en este proyecto porque no son necesarias, son:

-   `assets` donde podríamos colocar cualquier recurso estático utilizado en la aplicación.
-   `i18n` donde podríamos definiir el soporte de internacionalización o multi-idioma para nuestra aplicación.
-   `state` donde podríamos definido cualquier tipo de gestión de estado como por ejemplo, Redux.
-   `styles` donde podríamos definir diferentes temas o comportamientos de la apliación.

#### <a id="repository-overview-architecture-domain"></a>🎯 domain

Esta capa también es conocida como `entities` o `core` en diferentes arquitecturas.

Esta capa tiene dos funciones principales:

1.  Definir la estructura de datos propia de la aplicación.

    Esto lo hace dentro del directorio `models` donde podemos encontrar varias definiciones acerca de cómo la aplicación maneja la información.

2.  Para implemenar la lógica de negocio espeífica y altamente acoplada a la propia aplicación.

    En este ejemplo tan básico de Arquitectura por Capas, la lógica de negocio está definida dentro de múltiples serivios agrupados por funcionalidad, dentro del directorio `services`.

    Una regla rápida para saber si un código pertenece a la capa `domain` es preguntarnos _"¿mi aplicación es la misma si saco este código del dominio?"_ Si la respuesta es **NO**, entonces ese código debe estar localizado dentro de la capa `domain`.

**⚠️ NOTA:** Dada la baja complejidad de esta aplicación a nivel de estructura de datos, el primer punto no será cubierto en este caso, porque todas las definciones de estructuras serál ubicada en el directorion `types`.

#### <a id="repository-overview-architecture-infrastructure"></a>🧩 infrastructure

En esta capa implementamos las herramientas necesarias que están fuertemente acopladas a cualquier tipo de tecnología y las cuales, no están directamente relacionadas con la capa de interfaz de usuario.

La estrategia a seguir para esta capa es tener en mente que si durante el proceso de desarrollo o debido a refactorizaciones futuras, algún elemento de esta capa debe ser reemplazado por otro que proporcione las mismas funcionalidades, nuestra aplicación no debe verse afectada y si esto sucediera eventualmente, los efectos sobre nuestra aplicación serían relativamente insignificantes.

Para alcanzar este objetivo, esta capa se divide en diferentes secciones:

-   `api`

    Este directorio contiene el código utilizado para comunicar directamente con el mundo exterior.

-   `dataSources`

    Esta sección contiene todos los elementos orientados a proporcionar una comunicación de datos satisfactoria.

    El objetvo del código incluido en este directorio es desacoplar tanto al dominio como a la interfaz gráfica, de los diferentes accesos a datos que podría llegar a consumir nuestra aplicación.

    Una vez expuesto el contexto del contenido de este directorio, éste será invocado por servicios del dominio así como por componentes de la interfaz gráfica.

    De esta manera, este código sólo invocará funciones definidas dentro de las distintas herramientas de acceso a datos.

-   `mappers`

    Cuando necesitamos mover datos desde las fuentes de información hacia la aplicación y viceversa, la estructura de datos de estar verificada desde las estructuras de datos externas hacia las internas de nuestra aplicación (cuando es ésta la que consume los datos) y desde la aplicación hacia los destinos externos (cuando es la aplicación la que genera los datos).

    Estas operaciones son realizadas mediante funciones específicas que implementan el patrón `mapper`.

-   `utils`

    Este directorio contiene recursos auxiliares como el acceso al localstorage.

#### <a id="repository-overview-architecture-test"></a>🧪 test

La estrategia de testing seleccionada en este repositorio, para ambos casos, tests unitarios y de integración, es mantenerlos tan cerca como sea posible del códigio que intentan comprobar.

Por esta razón verás que hay varios directorios `test` dentro de las diferentes secciones de este repositorio.

Webpack está configurado para ignorar estos archivos cuando el códigio es compilado para producción.

Una vez dicho esto, el contenido de este directorio es un conjunto de herramientas comunes usadas a lo largo de todo el código y la parte principal está compuesta por las `fixtures` que nos permiten emular condiciones de funcionamiento reales.

#### <a id="repository-overview-architecture-types"></a>🪢 types

Este directorion está directamente relacionado con el uso de TypeScript en este proyecto.

En este caso, el directorio `types`, el cual contiene diferentes definiciones de tipos personalizados e interfaces, está definido como una capa independiente porque contiene estructurdas de datos empleadas en toda la aplicación.

Si hubiera otras definidiones de tipos personalizados o interfaces que fuesen empleados exclusivamente en capas diferentes, sería posible crear un nuevo directorio `types` dentro de dichos niveles, por ejemplo, dentro de dominio, infraestructura o interfaz de usuario.

### <a id="repository-overview-environments"></a>🛠 Entornos de ejecución [TBD]

## <a id="commands"></a>🔥 Listado de comandos

### <a id="commands-switch-node"></a>✅ Cambiando la versión de NodeJS

```sh
nvm use
```

### <a id="commands-installation"></a>⬇️ Proceso de instalación de módulos

```sh
npm i
```

### <a id="commands-tests"></a>🧪 Ejecución de los tests

```sh
# Tests unitarios .
npm test
```

### <a id="commands-dev-mode"></a>🏭 Ejecución de la aplicación en modo desarrollo

```sh
npm start
```

### <a id="commands-pro-mode"></a>🚀 Compilación de la aplicación

```sh
npm build
```

Una vez se haya completado este proceos, el código comprimido estará disponible para ser icluído en la imagen de Docker, desde el directorio `dist`.

## <a id="credits-and-thanks"></a>🙏 Reconocimientos y agradecimientos

Gracias al creador del contenido original:

-   [Classsed](https://www.youtube.com/c/classsed) autor original.
-   [freecodecamp.org](https://www.freecodecamp.org/) publicación del contenido.

Muchísimas gracias por el incalculable apoyo prestado por:

-   [Lissette Luis](https://www.linkedin.com/in/lissetteibnz/)
-   [Iván B. Trujillo](https://www.linkedin.com/in/ivanbtrujillo/)
-   [Adrián Ferrera](https://www.linkedin.com/in/afergon/)
-   [Iru Hernández](https://www.linkedin.com/in/iru-hernandez/)

## <a id="todo-list"></a>📝 TODO list

-   Incluir [Cypress](https://www.cypress.io/) para tests de integración y E2E.
-   Incluir soporte internacional multi-idioma.
-   Incluir la configuración para 'producción' para compilar y generar el conenedor de Docker listo para ser desplegado.
-   Incluir el archivo `manifest.json`.

## <a id="research-list"></a>🔬 Elementos a investigar

No hay ningún elemento de investigación definido.
