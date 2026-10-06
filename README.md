# React Todo App

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

La app queda disponible en `http://localhost:3000`.

Para generar el build de produccion:

```bash
npm run build
```

## Estructura de carpetas

```
react-todo-app/
├── public/              archivos estaticos (index.html, iconos, manifest)
├── src/
│   ├── hooks/           custom hooks (useLocalStorage, useTodos)
│   ├── App.js           componente raiz
│   ├── TodoCounter.js    contador de tareas
│   ├── TodoSearch.js     input de busqueda
│   ├── TodoFilter.js     filtro de tareas
│   ├── TodoList.js       lista de tareas
│   ├── TodoItem.js       item individual de tarea
│   ├── CreateTodoButton.js  boton para crear tareas
│   └── index.js         punto de entrada de React
├── package.json
└── README.md
```

## Stack

- React 18
- JavaScript (sin TypeScript)
- Create React App (react-scripts)
- CSS plano por componente
- localStorage como persistencia local
