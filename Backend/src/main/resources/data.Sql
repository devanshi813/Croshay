// Inserting a single product document
db.products.insertOne({
  "_id": "1",
  "name": "Product A",
  "description": "This is Product A",
  "price": 29.99
});

// Inserting multiple product documents
db.products.insertMany([
  {
    "_id": "2",
    "name": "Product B",
    "description": "This is Product B",
    "price": 19.99
  },
  {
    "_id": "3",
    "name": "Product C",
    "description": "This is Product C",
    "price": 39.99
  }
]);

// Inserting documents for other collections if needed
// ...
