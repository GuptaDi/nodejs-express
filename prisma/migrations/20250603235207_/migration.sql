/*
  Warnings:

  - The primary key for the `todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todos" DROP CONSTRAINT "todos_pkey",
DROP COLUMN "id",
ADD COLUMN     "todoId" SERIAL NOT NULL,
ADD CONSTRAINT "todos_pkey" PRIMARY KEY ("todoId");
