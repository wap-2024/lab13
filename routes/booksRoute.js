const express = require("express");
const Book = require("../model/Book");

var defaultBooks = [
  new Book(1, "1984", "978-0451524935", "1949-06-08", "George Orwell"),
  new Book(
    2,
    "To Kill a Mockingbird",
    "978-0060935467",
    "1960-07-11",
    "Harper Lee"
  ),
  new Book(
    3,
    "The Great Gatsby",
    "978-0743273565",
    "1925-04-10",
    "F. Scott Fitzgerald"
  ),
  new Book(
    4,
    "One Hundred Years of Solitude",
    "978-0060883287",
    "1967-06-05",
    "Gabriel Garcia Marquez"
  ),
  new Book(
    5,
    "Pride and Prejudice",
    "978-1503290563",
    "1813-01-28",
    "Jane Austen"
  ),
];

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(defaultBooks.find((item) => item.id.toString() === id));
});

router.post("/", (req, res) => {
  const nextId = Math.max(Math.max(...defaultBooks.map((item) => item.id))) + 1;
  const data = {
    ...req.body,
    id: nextId,
  };
  defaultBooks.push(data);
  res.json(data);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const pos = defaultBooks.findIndex((item) => item.id.toString() === id);
  if (pos === -1) {
    return res.json("Failed");
  }

  defaultBooks[pos] = {
    ...body,
    ...defaultBooks[pos],
  };

  res.json("Success");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const pos = defaultBooks.findIndex((item) => item.id.toString() === id);
  if (pos === -1) {
    return res.json("Not found!");
  }
  defaultBooks.splice(pos, 1);
  console.log(defaultBooks);
  res.json("Deleted!");
});

module.exports = router;
