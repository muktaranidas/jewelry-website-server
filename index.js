const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;
const categories = require("./data/categories.json");
const product = require("./data/product.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("jewelry-website-server is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/product", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = product.find((course) => course._id === id);
  res.send(singleCourse);
});

app.get("/course-category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(product);
  } else {
    const courseDetails = product.filter((course) => course.category_id === id);
    res.send(courseDetails);
  }
});

app.listen(port, () => {
  console.log(`jewelry-website-server is runing ${port}`);
});
