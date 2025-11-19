const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");
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

app.use("/", homeRoutes);
app.use("/courses", coursesRoutes);
app.use("/add", addRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application started at https://localhost:${PORT}`);
});
