import express from "express";
import routes from "./todos/todosRouter.ts";
import usersRoutes from "./users/usersRouter.ts";

const app = express();
const port = process.env.PORT || 5004;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(routes);
app.use(usersRoutes);

// Root route
app.get("/", (req, res) => {
  res.json("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
