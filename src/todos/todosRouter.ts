import { Router } from "express";
import {
  getTodos,
  getTodo,
  updateTodo,
  addTodo,
  deleteTodo,
} from "./todosController.ts";

const routes = Router();

/**
 * GET /todos
 * Fetch all todo items
 */
routes.get("/todos", async (req, res) => {
  try {
    const todos = await getTodos();
    res.status(200).json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * GET /todo/:id
 * Fetch a single todo item by ID
 */
routes.get("/todo/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid todo ID" });
  }

  try {
    const todo = await getTodo(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * DELETE /todo/:id
 * Delete a todo by ID
 */
routes.delete("/todo/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid todo ID" });
  }

  try {
    const deleted = await deleteTodo(id);
    if (!deleted) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * POST /todo
 * Add a new todo
 */
routes.post("/todo", async (req, res) => {
  const { todoName, todoDescription } = req.body;

  if (!todoName || !todoDescription) {
    res.status(400).json({ message: "Invalid request body" });
  }

  try {
    const addedTodo = await addTodo(todoName, todoDescription);
    res.status(201).json(addedTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * PATCH /todo/:id
 * Update a todo by ID
 */
routes.patch("/todo/:id", async (req, res) => {
  const { todoName, todoDescription } = req.body;
  const id = parseInt(req.params.id, 10);

  if (!todoName || !todoDescription || isNaN(id)) {
    res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const updatedTodo = await updateTodo(todoName, todoDescription, id);
    if (!updatedTodo) {
      res.status(404).json({ message: "Todo not found" });
    }

    res.json({
      status: 200,
      message: "Todo updated!",
      todo: updatedTodo,
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default routes;
