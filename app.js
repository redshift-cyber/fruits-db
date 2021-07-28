const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty Solid as a Fruit."
});

const Kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The Best Fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too Sour For me"
})

const banana = new Fruit({
  name: "Banna",
  score: 3,
  review: "Wierd Texture"
})

//fruit.save();

Fruit.insertMany([Kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
})

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "John",
  age: 37
})

people.save();