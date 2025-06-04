-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "todoName" TEXT NOT NULL,
    "todoDescription" TEXT NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
