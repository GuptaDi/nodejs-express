import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

/**
 * Fetch all users
 */
export const getUsers = async () => {
  return await prisma.testUser.findMany();
};

/**
 * Create a new user
 * @param name - Name of the new user
 */
export const createUser = async (name: string) => {
  return await prisma.testUser.create({
    data: { name },
  });
};

/**
 * Delete a user by ID
 * @param id - User ID
 * @returns The deleted user object or null if not found
 */
export const deleteUser = async (id: number) => {
  try {
    return await prisma.testUser.delete({
      where: { id },
    });
  } catch (error) {
    // Most likely: user not found
    return null;
  }
};

/**
 * Update a user's name by ID
 * @param name - New name
 * @param id - User ID
 * @returns The updated user or null if not found
 */
export const updateUser = async (name: string, id: number) => {
  try {
    return await prisma.testUser.update({
      where: { id },
      data: { name },
    });
  } catch (error) {
    // Most likely: user not found
    return null;
  }
};
