import express from "express";

const app = express();
const port = 5004;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory data store for todos
const allTodos = [
  { todoId: 1, todoName: "Sports", todoDescription: "Go to the gym" },
  { todoId: 2, todoName: "Study", todoDescription: "Study for exam" },
  { todoId: 3, todoName: "Groceries Shopping", todoDescription: "Buy Milk" },
  { todoId: 4, todoName: "Meditate", todoDescription: "Meditate 20 mins" },
];

// Root route
app.get("/", (req, res) => {
  res.json("Hello World");
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json(allTodos);
});

// Get a single todo by ID
app.get("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const foundTodo = allTodos.find((todo) => todo.todoId === todoId);

  if (foundTodo) {
    return res.json(foundTodo);
  }

  return res.status(404).json({ message: "Todo not found" });
});

// Delete a todo by ID
app.delete("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = allTodos.findIndex((todo) => todo.todoId === todoId);

  if (index !== -1) {
    allTodos.splice(index, 1);
    return res.json({ message: "Todo deleted successfully" });
  }

  return res.status(404).json({ message: "Todo not found" });
});

// Add a new todo
app.post("/todo", (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
