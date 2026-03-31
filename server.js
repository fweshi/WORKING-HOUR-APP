const express = require("express");
const path = require("path");
const timeCheck = require("./middleware/timeCheck");

const app = express();

// Set EJS
app.set("view engine", "ejs");

// Static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware
app.use(timeCheck);

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});