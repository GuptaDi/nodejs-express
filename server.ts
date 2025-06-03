import express from "express";
import routes from "./src/todos/todosRouter.js";

const app = express();
const port = process.env.PORT || 5004;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(routes);

// Root route
app.get("/", (req, res) => {
  res.json("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
