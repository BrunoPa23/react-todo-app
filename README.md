# React Todo App

![CI](https://github.com/BrunoPa23/react-todo-app/actions/workflows/ci.yml/badge.svg)

Aplicacion de lista de tareas (To Do) construida con React 18. Permite crear, completar, editar, eliminar y filtrar tareas, con busqueda y persistencia local en el navegador.

## Funcionalidades

- Agregar nuevas tareas.
- Marcar tareas como completadas o pendientes.
- Editar el texto de una tarea existente.
- Eliminar tareas.
- Buscar tareas por texto.
- Filtrar tareas (todas, pendientes, completadas).
- Contador de tareas completadas sobre el total.
- Mensajes de estado vacio cuando no hay tareas o no hay resultados de busqueda.
- Persistencia en localStorage (las tareas sobreviven al recargar la pagina).

## Como instalar y correr

Requisitos: Node.js y npm instalados.

```bash
npm install
npm start
```

La app queda disponible en `http://localhost:5173` (puerto por defecto de Vite).

Para generar el build de produccion:

```bash
npm run build
```

Para previsualizar el build de produccion:

```bash
npm run preview
```

## Tests

El proyecto usa Vitest y React Testing Library. Incluye tests del hook `useTodos` (agregar, completar, eliminar tareas) y del componente `TodoItem` (render y eventos).

```bash
npm test
```

Los tests tambien se ejecutan automaticamente en cada push y pull request mediante el workflow de GitHub Actions (`.github/workflows/ci.yml`), junto con el build de produccion.

## Estructura de carpetas

```
react-todo-app/
├── .github/workflows/   workflow de CI (test y build)
├── public/              archivos estaticos (iconos, manifest)
├── src/
│   ├── hooks/           custom hooks (useLocalStorage, useTodos) y sus tests
│   ├── App.jsx          componente raiz
│   ├── TodoCounter.jsx  contador de tareas
│   ├── TodoSearch.jsx   input de busqueda
│   ├── TodoFilter.jsx   filtro de tareas
│   ├── TodoList.jsx     lista de tareas
│   ├── TodoItem.jsx     item individual de tarea (y su test)
│   ├── CreateTodoButton.jsx  boton para crear tareas
│   ├── setupTests.js    configuracion de Testing Library para Vitest
│   └── index.jsx        punto de entrada de React
├── index.html           punto de entrada de Vite
├── vite.config.js       configuracion de Vite y Vitest
├── package.json
└── README.md
```

## Stack

- React 18
- JavaScript (sin TypeScript)
- Vite (bundler y dev server)
- Vitest y React Testing Library (tests)
- GitHub Actions (CI)
- CSS plano por componente
- localStorage como persistencia local
