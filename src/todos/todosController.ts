const allTodos = [
  { todoId: 1, todoName: "Sports", todoDescription: "Go to the gym" },
  { todoId: 2, todoName: "Study", todoDescription: "Study for exam" },
  {
    todoId: 3,
    todoName: "Groceries Shopping",
    todoDescription: "Buy Milk",
  },
  { todoId: 4, todoName: "Meditate", todoDescription: "Meditate 20 mins" },
];

export const getTodos = () => {
  return allTodos;
};

export const getTodo = (id: number) => {
  const foundTodo = allTodos.find((todo) => todo.todoId === id);

  if (!foundTodo) {
    throw new Error("Todo not found");
  }
  return foundTodo;
};

export const deleteTodo = (id: number) => {
  const index = allTodos.findIndex((todo) => todo.todoId === id);

  if (index !== -1) {
    allTodos.splice(index, 1);
    return "Todo deleted";
  }
};

export const addTodo = (todoName = "", todoDescription = "") => {
  const newTodo = {
    todoId: Math.floor(Math.random() * 10000), // simplified ID generation
    todoName,
    todoDescription,
  };

  allTodos.push(newTodo);

  return newTodo;
};

export const updateTodo = (todoName = "", todoDescription = "", id: number) => {
  const todo = getTodo(id);
  if (todo) {
    todo.todoName = todoName;
    todo.todoDescription = todoDescription;
  }
  return todo;
};
