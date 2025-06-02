# 📝 Express TODO API

A simple RESTful API built with **Node.js** and **Express** that allows basic operations on a todo list — such as creating, reading, and deleting todos.

## 📦 Features

- Get all todos
- Get a single todo by ID
- Create a new todo
- Delete a todo by ID

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository or download the project files.

2. Navigate to the project directory:

   ```bash
   git clone https://github.com/your-username/express-todo-api.git
   cd express-todo-api
   ```

3. Install dependencies:

   ```bash
   npm install express
   ```

4. Start the server:

   ```bash
   node server.js
   ```

> If you are using ES modules, ensure `"type": "module"` is set in your `package.json`.

The server will start on [http://localhost:5004](http://localhost:5004)

### Output

Visiting the root URL (`/`) will return:

```html
<h2>Hello World</h2>
```

## 📬 API Endpoints

### `GET /`

Returns a simple "Hello World" message.

---

### `GET /todos`

Returns a list of all todos.

**Example Response:**

```json
[
  {
    "todoId": 1,
    "todoName": "Sports",
    "todoDescription": "Go to the gym"
  }
]
```

---

### `GET /todo/:id`

Returns a single todo by ID.

**Response (if found):**

```json
{
  "todoId": 2,
  "todoName": "Study",
  "todoDescription": "Study for exam"
}
```

**If not found:**

```json
{
  "message": "Todo not found"
}
```

---

### `POST /todo`

Adds a new todo item.

**Request Body:**

```json
{
  "todoName": "Read",
  "todoDescription": "Read a book"
}
```

**Response:**
Returns the newly created todo with a generated ID.

---

### `DELETE /todo/:id`

Deletes a todo by ID.

**Success Response:**

```json
{
  "message": "Todo deleted successfully"
}
```

**If not found:**

```json
{
  "message": "Todo not found"
}
```

---

## 🔧 Notes

- This app uses an **in-memory array** to store todos, which means data will reset when the server restarts.
- Unique IDs are generated using a simple random number for demonstration purposes.

### License

This project is open-source and free to use.
