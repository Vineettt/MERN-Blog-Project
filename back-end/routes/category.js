const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

route.get("/categories", (req, res) => {
  Category.find()
    .then((categories) => {
      res.json({
        categories,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

route.get("/category-num", (req, res) => {
  Category.count({})
    .then((categories) => {
      res.json({
        categories,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

route.post("/new-category", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.json({ message: "All fields are required" });
  }
  const category = new Category({
    name,
  });
  category
    .save()
    .then(() => {
      res.json({ message: "Category Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
