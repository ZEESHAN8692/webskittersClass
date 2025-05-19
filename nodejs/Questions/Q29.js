// 29.	 Write a JavaScript function to sort the following array of objects by title value.

function sortByTitle(arr) {
  return arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "Moby Dick", author: "Herman Melville" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

console.log(sortByTitle(books));
