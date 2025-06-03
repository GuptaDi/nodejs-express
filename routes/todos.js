import { Router } from "express";

// In-memory data store for todos
const allTodos = [
  { todoId: 1, todoName: "Sports", todoDescription: "Go to the gym" },
  { todoId: 2, todoName: "Study", todoDescription: "Study for exam" },
  { todoId: 3, todoName: "Groceries Shopping", todoDescription: "Buy Milk" },
  { todoId: 4, todoName: "Meditate", todoDescription: "Meditate 20 mins" },
];

const routes = Router();

// Define the routes for this router
routes.get("/", (req, res) => {
  res.send("Home Page");
});

// Get all todos
routes.get("/todos", (req, res) => {
  res.json(allTodos);
});

// Get a single todo by ID
routes.get("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const foundTodo = allTodos.find((todo) => todo.todoId === todoId);

  if (foundTodo) {
    return res.json(foundTodo);
  }

  return res.status(404).json({ message: "Todo not found" });
});

// Delete a todo by ID
routes.delete("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = allTodos.findIndex((todo) => todo.todoId === todoId);

  if (index !== -1) {
    allTodos.splice(index, 1);
    return res.json({ message: "Todo deleted successfully" });
  }

  return res.status(404).json({ message: "Todo not found" });
});

// Add a new todo
routes.post("/todo", (req, res) => {
  const { todoName, todoDescription } = req.body;

  if (!todoName || !todoDescription) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const newTodo = {
    todoId: Math.floor(Math.random() * 10000), // simplified ID generation
    todoName,
    todoDescription,
  };

  allTodos.push(newTodo);
  return res.status(201).json(newTodo);
});

export default routes;
