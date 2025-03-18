// ### Assignment 4: Async/Await
// Create an `async` function that:
// - Fetches data from `https://jsonplaceholder.typicode.com/posts/1`.
// - Waits for the response and converts it to JSON.
// - Returns the title of the post.

// 1.

async function callAPI() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let Data = await response.json();
  return Data;
}

callAPI().then((data) => {
  console.log(data);
});

// 2.
