# TypeScript training course - Frontend

<img src="https://img.shields.io/badge/Version-1.0.0-yellow" /> <img src="https://img.shields.io/badge/TypeScript-4.1.2-blue" /> <img src="https://img.shields.io/badge/Create%20React%20App-4.0.3-blue" />

[🇪🇸 Version](https://github.com/ddialar/typescript.workshop.frontend/blob/master/docs/README_ES.md)

## 📖 Index

-   [Description](https://github.com/ddialar/typescript.workshop.frontend#description)
-   [System requirements](https://github.com/ddialar/typescript.workshop.frontend#requirements)
-   [Repository overview](https://github.com/ddialar/typescript.workshop.frontend#repository-overview)
    -   [Environment variables](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-environment-variables)
    -   [Architecture](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture)
        -   [view](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view)
            -   [common](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-common)
            -   [components](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-components)
            -   [context](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-context)
            -   [navigation](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-navigation)
            -   [pages](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-pages)
            -   [Other possible sections](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-view-other-elements)
        -   [domain](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-domain)
        -   [infrastructure](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-infrastructure)
        -   [test](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-test) [TBD]
        -   [types](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-architecture-types)
    -   [Execution environments](https://github.com/ddialar/typescript.workshop.frontend#repository-overview-environments) [TBD]
-   [Commands guide](https://github.com/ddialar/typescript.workshop.frontend#commands)
    -   [Switch Node version](https://github.com/ddialar/typescript.workshop.frontend#commands-switch-node)
    -   [Modules installation process](https://github.com/ddialar/typescript.workshop.frontend#commands-installation)
    -   [Run tests](https://github.com/ddialar/typescript.workshop.frontend#commands-tests) [TBD]
    -   [Run development mode](https://github.com/ddialar/typescript.workshop.frontend#commands-dev-mode)
    -   [Build application](https://github.com/ddialar/typescript.workshop.frontend#commands-pro-mode)
-   [Credits and thanks](https://github.com/ddialar/typescript.workshop.frontend#credits-and-thanks)
-   [TODO list](https://github.com/ddialar/typescript.workshop.frontend#todo-list)
-   [Researching list](https://github.com/ddialar/typescript.workshop.frontend#research-list)

## <a id="description"></a>🔍 Description

This repository is aimed to provide the frontend support for the TypeScript training course which it belongs to.

In this case, we are implementing the frontend side of a social media application that allows to register new users and authenticate them, create and delete posts, create and delete comments on posts and like/dislike posts.

The original idea of this application is taken by this really interesting workshop named [Build a Social Media App (MERNG stack)](https://morioh.com/p/07b0be424b5f?f=5ece1a68f0e6056e36305f65), created by [Classsed](https://www.youtube.com/c/classsed) and published by [freecodecamp.org](https://www.freecodecamp.org/).

In opposite to the original version, this code run their requests against an API REST in order to access the backend features.

This whole code is created following the **functional programming** paradigm.

Some tools used on this repository are next:

-   ⚛️ `Create React App` for application scaffolding.
-   🔀 `React Router Dom` for routing management.
-   ⚙️ `.env` files for environment variables.
-   💅 `Semantic UI` as styling framework.
-   🤝 `Axios` for API communication.
-   📦 `Webpack` for transpiling and bundling the TypeScript code.
-   🔒 `JWT` as token service.
-   🐶 `Husky` for managing the Git Hooks.
-   🔍 `ESLint` for code linting and formating.

Therefore this repository is defined to work with `NodeJS 14.15.0 LTS`.

If you are running differente versions of NodeJS in your system, just run `nvm use` and it will be switched to the version defined in the `.nvmrc` file.

## <a id="requirements"></a>💻 System requirements

To run this code in your system, it must satisfy the next minimum requirements:

-   NodeJS 14.15.0
-   npm 6.14.11
-   npx 6.14.11
-   Docker 20.10.2
-   docker-compose 1.27.4

In addition, it's advisable to have next:

-   nvm 0.33.0
-   Web browser (recomended Google Chrome 88.0)
-   Code editor (recomended VScode 1.52.1)

In order to make this application works successfully, it's needed to run the development server located in this repository: [TypeScript Workshop Backend](https://github.com/ddialar/typescript.workshop.backend).

## <a id="repository-overview"></a>👀 Repository overview

### <a id="repository-overview-environment-variables"></a>⚙️ Environment variables

Due to this repository is built under the Create React App umbrella, the base code scafollding includes `dotenv` as environmet variables handler. However, in order to use customized `.env` files, we need to follow the instructions provided by the [official documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).

Based on that, for this project we are going to have three different environment files, located at the root of the project. These files are next:

-   `.env` for production.
-   `.env.development` for development.
-   `.env.test` for testing.

Feel free to remove some of them or including additional ones depending on your application needs. Just keep in mind that you will have to follow the official documentation rules.

The most basic fields we must include on these files are next:

```sh
# Set the base URL where the application will aims its requests.
BASE_URL="http://localhost:3600"

# Rest of the environment variables here.
```

### <a id="repository-overview-architecture"></a>🏗 Architecture

The code defined in this repository follows the `container-view` pattern (a.k.a. `container and presentational components`) widelly used in React based on applications.

Besides that and in order to provide a real decoupling between the web application and their data sources, the connections with the external world as well as the most basic business logic that this application could contain, have been placed in independent sections, following the most basic Layered Architecture, it mena, **domain** and **infrastructure**.

In summary, this source code will be organized in three different layer:

-   `view`
-   `domain`
-   `infrastructure`

The full folders structure is next:

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

On this layer we implement the set of elements that are horizontaly common to the whole application.

In this case, the only common code are the routing paths used in the application and it's done via `routes.ts` file.

##### <a id="repository-overview-architecture-view-components"></a>🧩 components

Here we have to differentiate between two kind of components:

-   📦 `containers` this kind of components contain the most basic business logic in order to provide functionality to the component, as well as to include `presentational` components.
-   ⛵️ `presentationals` are really simple components in charge to represent visual information and they are populated by `container` components.

Every component is defined as an independent module, exporting its funciontalities via its specific `index.ts` file, in order to be imported there where it's needed.

##### <a id="repository-overview-architecture-view-context"></a>🗺 context

The code defined in this folder provides access to global data into the application, at `view` level.

In this case there is only defined code focused on managing the authenticated user data, in order to handle some components behavior.

##### <a id="repository-overview-architecture-view-navigation"></a>🔀 navigation

Here is where there is defined the application routing elements, whose are defined based on [React Router DOM](https://reactrouter.com/).

In this case, it has not been needed to differentiate between public and private routes due to, there where it's needed, the same route can be used independently both for authenticated users and not authenticated.

The different elements that are shown or hidden depending on whether the user is authenticated or not, are managed in the same component code and its complexity doesn't require to implement specific routes to be handled.

##### <a id="repository-overview-architecture-view-pages"></a>📄 pages

This folder contains the definitions of the whole pages used in the application.

Every page is defined as an independent module, exporting its funciontalities via its specific `index.ts` file, in order to be importer there where it's needed.

##### <a id="repository-overview-architecture-view-other-elements"></a>Other possible sections

Other possible sections, that could be included in this structure but have not been defined in this project because they are not needed, are next:

-   `assets` where we could place any static resource used in the application.
-   `i18n` where we could define the internacionalization or multi-lingual support for our application.
-   `state` where we could define any kind of state management sucha as Redux.
-   `styles` where we could define different visual themes and/or application behaviors.

#### <a id="repository-overview-architecture-domain"></a>🎯 domain

This layer is also known as `entities` or `core` in different architecture approaches.

This layer has two main goals:

1.  To define application own data structures.

    It's done into the `models` folder where we can find several definitions about how our application manages the information.

2.  To implement specific business logic strongly bound with the application use.

    [tbd - validators via Joi]

    A quick rule to know whether a pice of code belongs to the `domain` layer is to ask ourself _"my application is the same if I extract this code from the domain?"_ If the answer is **NO**, then this code must be placed into the `domain` layer.

**⚠️ NOTE:** Due to the low complexity of this application at data-structure level, the first point won't be covered in this case because all the structure definitions will be placed in the `types` folder.

#### <a id="repository-overview-architecture-infrastructure"></a>🧩 infrastructure

On this layer we implement the needed tools strongly coupled for any kind of technology and which is not directly bound with the UI layer.

The strategy to follow for this layer is to keep in mind that if during the development process or for future refactors, some element in this layer must be replaced by another one that provides the same or better results, our application can not be affected and even whether it happens, the side effects in our application are really shallow.

To reach that goal, the code included into this layer is divided like that:

-   `api`

    This folder contains the code used to communicate direcly with the external world.

-   `dataSources`

    This section contains the whole elements focused on provide a successful data communication.

    The target of the code included into this folder is to decouple the domain and UI code from the different data access that we could consume in our application.

    Once exposed the context of this folder content, it will be invoked domain services as well as UI components.

    In the same way, this code will only invoke functions defined into the differente data access tools.

-   `mappers`

    When it's needed to move data from the data sources to the application and viceversa, the data structure must be parsed from external data structures to inner application ones (when our application consumes data) and from inner structures to external ones (when our application generates data).

    These operations are performed via specific functions whose implement the `mapper` pattern.

-   `utils`

    This folder contains auxiliar resources like localstorage access.

#### <a id="repository-overview-architecture-test"></a>🧪 test [TBD]

#### <a id="repository-overview-architecture-types"></a>🪢 types

This folder is specifically bound to the use of TypeScript on this project.

On this case, the `types` folder, which contains different custom types and interfaces definitions, is defined as independent layer because it contains data structures used in the whole application.

If there were other types and interfaces definitions that were exclusively used in differente layers, it would be possible to create a new `types` folder into different levels, for example, into the `domain`, `infrastructure` or `view` folder.

### <a id="repository-overview-environments"></a>🛠 Execution environments [TBD]

## <a id="commands"></a>🔥 Commands guide

### <a id="commands-switch-node"></a>✅ Switch Node version

```sh
nvm use
```

### <a id="commands-installation"></a>⬇️ Modules installation process

```sh
npm i
```

### <a id="commands-tests"></a>🧪 Run tests [TBD]

### <a id="commands-dev-mode"></a>🏭 Run application in development mode

```sh
npm start
```

### <a id="commands-pro-mode"></a>🚀 Build application

```sh
npm build
```

## <a id="credits-and-thanks"></a>🙏 Credits and thanks

Thank you so much to the content creator:

-   [Classsed](https://www.youtube.com/c/classsed) as original author.
-   [freecodecamp.org](https://www.freecodecamp.org/) as content publisher.

Thanks a lot for a so incredible support to:

-   [Lissette Luis](https://www.linkedin.com/in/lissetteibnz/)
-   [Iván B. Trujillo](https://www.linkedin.com/in/ivanbtrujillo/)
-   [Adrián Ferrera](https://www.linkedin.com/in/afergon/)
-   [Iru Hernández](https://www.linkedin.com/in/iru-hernandez/)

## <a id="todo-list"></a>📝 TODO list

-   Include [Jest](https://jestjs.io/) for unit tests.
-   Include [Cypress](https://www.cypress.io/) as integration and E2E tests.
-   Include [Joi](https://joi.dev/) as validation patterns tool.
-   Include multi-lingual internationalizaton support.
-   Include production configuration to compile and generate Docker container ready to deploy.
-   Include the `manifest.json` file.

## <a id="research-list"></a>🔬 Researching list

No researching goals defined.
