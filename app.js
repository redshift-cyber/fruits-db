const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Beautiful!"
});

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "Sweet Like you!!"
});

mango.save();

//fruit.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});


//Fruit.updateOne({_id: "6102a1d6f95f561404758055"}, {name: "Peach"}, function(err){
// if(err){
//   console.log(err);
// } else{
//   console.log("Successfully Updated document")
//  }
//});

//Fruit.deleteOne({
//name: "Peach",
//function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//   console.log("👍 Everythong going cool!");
// }
// }
//})

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

//const people = new People({
// name: "Amy",
//  age: 12,
//  favouriteFruit: Lemon
//})

//people.save();

People.updateOne({
  name: "Amy"
}, {
  favouriteFruit: mango
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Updated Document")
  }
});

People.deleteMany({
  name: "John"
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!")
  }
})