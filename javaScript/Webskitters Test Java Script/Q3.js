// ### Assignment 3: Object Handling
// Create a function that:
// - Accepts an object containing a person's name, age, and city.
// - Adds a new property called `isAdult`, which is `true` if age is 18 or above, otherwise `false`.
// - Returns the updated object.

// *Example Input:*
//  `{ name: "John", age: 17, city: "New York" }`
// *Example Output:*
//  `{ name: "John", age: 17, city: "New York", isAdult: false }`



const objectHandling = () => {
  let Input = {
    name: "John",
    age: 18,
    city: "New York",
  };

  if (Input.age >= 18) {
    console.log({ ...Input, isAdult: false });
  }
};
objectHandling();
