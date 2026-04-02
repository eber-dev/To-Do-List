# 📌 To-Do List App

A modular **To-Do List web application** built with **JavaScript (ES Modules)** and bundled using **Webpack**.  
This project allows users to manage tasks efficiently, including creating, updating, filtering, and persisting tasks using the browser's `localStorage`.

---

## 🚀 Features

- Add new tasks through a modal form
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by:
  - All
  - Pending
  - Completed
- Persistent storage using `localStorage`
- Fully dynamic UI generated with JavaScript (no static HTML structure)

---

## 🧠 Project Architecture

The application is structured using a modular approach, separating responsibilities into different files:

```bash
src/
│
├── index.js        # Entry point
├── display.js      # UI / DOM manipulation
├── controller.js   # Application logic
├── box.js          # Data storage
```

---

## 🔹 index.js (Entry Point)

This is the main entry of the application. It initializes and connects all modules.

### Responsibilities:

- Loads the main layout (`loadContainer`)
- Creates the modal (`crearModal`)
- Handles UI interactions:
  - Open modal button
  - Filter buttons
- Initializes:
  - Form processing
  - Initial rendering of tasks

---

## 🔹 display.js (View Layer)

Handles all DOM creation and UI rendering logic.

### Key Functions:

#### `loadContainer()`
- Builds the main structure of the application:
  - Header (title and subtitle)
  - Task container
  - Filter section

#### `crearModal()`
- Dynamically creates a `<dialog>` element
- Contains a form with inputs:
  - Title
  - Description
  - Due date
  - Priority (High, Medium, Low)
- Includes a close button

#### `añadirTarjeta(array, tarea)`
- Creates a visual card for each task
- Displays:
  - Checkbox (task status)
  - Title and description
  - Due date
  - Priority
  - Delete button
- Attaches event listeners by calling:
  - `cambiarestado`
  - `eliminarCarta`

---

## 🔹 controller.js (Logic Layer)

Manages the application logic and acts as a bridge between UI and data.

#### `procesaDatos(form)`
- Listens to form submission
- Extracts form data using `FormData`
- Creates a task object:
  - Generates unique `id`
  - Sets default state (`pending`)
- Updates:
  - Data storage
  - UI
  - `localStorage`

---

#### `cambiarestado(checkbox, card, array)`
- Toggles task state:
  - `pending` ↔ `completed`
- Updates:
  - UI (line-through effect)
  - Data array
  - `localStorage`
  - Task counters

---

#### `eliminarCarta(button, card, array)`
- Removes the task from the DOM
- Removes the task from the data array
- Updates `localStorage`

---

#### `renderizar()`
- Loads tasks from `localStorage`
- Renders all tasks on app startup

---

### Filtering Functions

- `filtrartodo()`
- `filtrarpendientes()`
- `filtrarcompletados()`

These functions filter tasks based on their state and render them accordingly.

---

#### `obtenerInformacion(array)`
- Counts:
  - Completed tasks
  - Pending tasks
- Updates the UI counters

---

## 🔹 box.js (Data Layer)

Handles data persistence and storage.

```js
export let almacen = JSON.parse(localStorage.getItem("local")) || [];
```

### Functions:

#### `agregarTarea(objeto)`
- Adds a new task to the global `almacen` array

---

## 💾 Data Persistence

The app uses `localStorage` to persist tasks:

```js
localStorage.setItem("local", JSON.stringify(array));
```

On app initialization:

```js
JSON.parse(localStorage.getItem("local"));
```

---

## 📦 Data Model

Each task follows this structure:

```js
{
  id: "abc123",
  titulo: "Study JavaScript",
  descripcion: "Review modules",
  fecha: "2026-04-02",
  prioridad: "High Priority",
  estado: "pending" // or "completed"
}
```

---

## 🔄 Application Flow

1. The app initializes (`index.js`)
2. Stored tasks are loaded (`renderizar`)
3. User opens modal and creates a task
4. Task is:
   - Stored in memory (`box.js`)
   - Saved to `localStorage`
   - Rendered in the UI
5. User can:
   - Toggle task status
   - Delete tasks
   - Filter tasks

---

## ⚠️ Technical Notes

- Uses `crypto.randomUUID()` for unique IDs
- UI is fully generated using JavaScript
- Uses `<dialog>` for modal implementation
- Follows a modular architecture similar to:
  - View (`display`)
  - Controller (`controller`)
  - Model/Data (`box`)

---

## 🧩 Possible Improvements

- Edit existing tasks
- Add advanced form validation
- Improve UI/UX with animations
- Refactor into a stricter MVC pattern
- Add unit testing

---

## 🛠️ Technologies Used

- JavaScript (ES Modules)
- Webpack
- HTML5 (`dialog`)
- CSS
