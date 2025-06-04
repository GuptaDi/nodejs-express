import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

/**
 * Get all todos
 */
export const getTodos = async () => {
  return await prisma.todos.findMany();
};

/**
 * Get a single todo by ID
 */
export const getTodo = async (id: number) => {
  return await prisma.todos.findFirst({
    where: {
      todoId: id,
    },
  });
};

/**
 * Delete a todo by ID
 */
export const deleteTodo = async (id: number) => {
  try {
    return await prisma.todos.delete({
      where: { todoId: id },
    });
  } catch (error) {
    return null; // Todo not found
  }
};

/**
 * Add a new todo
 */
export const addTodo = async (todoName = "", todoDescription = "") => {
  return await prisma.todos.create({
    data: { todoName, todoDescription },
  });
};

/**
 * Update an existing todo by ID
 */
export const updateTodo = async (
  todoName = "",
  todoDescription = "",
  id: number
) => {
  try {
    return await prisma.todos.update({
      where: { todoId: id },
      data: { todoName, todoDescription },
    });
  } catch (error) {
    return null; // Todo not found
  }
};
