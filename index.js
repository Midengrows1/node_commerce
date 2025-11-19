const express = require("express");
const app = express();
const exhbs = require("express-handlebars");

const hbs = exhbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

//* Configuring Handlebars
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
//*
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "Главная ",
    isHome: true,
  });
});

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "Курсы",
    isCourses: true,
  });
});
app.get("/add", (req, res) => {
  res.render("add", {
    title: "Добавить Курсы",
    isAdd: true,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application started at https://localhost:${PORT}`);
});
