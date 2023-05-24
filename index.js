const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

const port = 3000;

app.get("/", (req, res) => {
  const welcomeMessage = "Welcome to My Website!";
  res.render("welcome", { welcomeMessage });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
