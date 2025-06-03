import { Router } from "express";
import {
  getTodos,
  getTodo,
  updateTodo,
  addTodo,
  deleteTodo,
} from "./todosController.js";

const routes = Router();

/**
 * GET /todos
 * Fetch all todo items
 */
routes.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

/**
 * GET /todo/:id
 * Fetch a single todo item by ID
 */
routes.get("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = getTodo(todoId);

  if (todo) {
    return res.json(todo);
  }

  return res.status(404).json({ message: "Todo not found" });
});

/**
 * DELETE /todo/:id
 * Delete a todo by ID
 */
routes.delete("/todo/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = deleteTodo(todoId);

  if (todo) {
    return res.json({ message: "Todo deleted successfully" });
  }

  return res.status(404).json({ message: "Todo not found" });
});

/**
 * POST /todo
 * Add a new todo
 */
routes.post("/todo", (req, res) => {
  const { todoName, todoDescription } = req.body;

  if (!todoName || !todoDescription) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const addedTodo = addTodo(todoName, todoDescription);
  return res.status(201).json(addedTodo);
});

/**
 * PATCH /todo/:id
 * Update a todo by ID
 */
routes.patch("/todo/:id", (req, res) => {
  const { todoName, todoDescription } = req.body;

  if (!todoName || !todoDescription) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const updatedTodo = updateTodo(todoName, todoDescription, +req.params.id);

  if (!updatedTodo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  return res.json({ status: 200, message: "Todo updated!", todo: updatedTodo });
});

export default routes;
