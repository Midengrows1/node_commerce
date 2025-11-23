const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const cardRoutes = require("./routes/card");
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
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/courses", coursesRoutes);
app.use("/add", addRoutes);
app.use("/card", cardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application started at http://localhost:${PORT}`);
});
