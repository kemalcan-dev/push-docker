// app.js
const express = require("express");
const app = express();
const port = 3000;

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World! ----");
});

app.get("/hello", (req, res) => {
  res.send("Hello from the API!");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye from the API!");
});

// Handle 404 (Not Found) route
app.use((req, res) => {
  res.status(404).send("API doesn't exist");
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});