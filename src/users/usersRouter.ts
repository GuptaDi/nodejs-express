import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./usersController.ts";

const usersRoutes = Router();

/**
 * GET /users
 * Fetch all users
 */
usersRoutes.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * POST /user
 * Create a new user
 */
usersRoutes.post("/user", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Name is required" });
  }

  try {
    const user = await createUser(name);
    res.status(201).json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * PATCH /user/:id
 * Update a user by ID
 */
usersRoutes.patch("/user/:id", async (req, res) => {
  const { name } = req.body;
  const id = parseInt(req.params.id, 10);

  if (!name || isNaN(id)) {
    res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const updatedUser = await updateUser(name, id);

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated!", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * DELETE /user/:id
 * Delete a user by ID
 */
usersRoutes.delete("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deleted = await deleteUser(id);

    if (!deleted) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default usersRoutes;
