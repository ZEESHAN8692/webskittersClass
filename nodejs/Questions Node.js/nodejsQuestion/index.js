const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json());

//store the value
let users =[];


// --------------- Question 1 Statrt -------------------------------------
app.post('/users', (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) return res.send("All fields are required");
    
    users.push({ name, email, phone });
    res.json({ name, email, phone })
});

app.get('/users', (req, res) => {
    res.json(users);
});

// --------------- Question 1 end -------------------------------------


// --------------- Question 2 Start -----------------------------------

let data = [
  { id: 1, name: "zeeshan", email: "zeeshan@gmail.com" },
  { id: 2, name: "raju sir", email: "rajusir@gmail.com" }
];
// What is the difference between GET and POST?
// GET is used to get the data from the server
// POST is used to send data to the server
// GET is for getting the data
// POST is for creating the data

// GET Method
// GET is used to get the data from the server
// http://localhost:3000/data
// http://localhost:3000/data?name=John&email=john@example.com&phone=1234567890
// we can send data with GET method but it is not recommended
// because GET method is for getting the data

app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.find(u => u.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});


// POST Method
// POST is used to send data to the server
// http://localhost:3000/data
// we send the data with body
// Content-Type: application/json

app.post('/data', (req, res) => {
  const { name, email } = req.body;
  const newId = data.length + 1;
  const newUser = { id: newId, name, email };
  data.push(newUser);
  res.status(201).json(newUser);
});


// PUT and PATCH Method
// PUT is used to update the data
// PATCH is used to update the data partially
// PUT is used to update the data completely
// PATCH is used to update the data partially

app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  let user = data.find(u => u.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user = { id, name, email };
  data = data.map(u => (u.id === id ? user : u));
  res.json(user);
});


app.patch('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = data.find(u => u.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  if (name) user.name = name;
  if (email) user.email = email;
  res.json(user);
});

// DELETE Method
// DELETE is used to delete the data
// http://localhost:3000/data/1

app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = data.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }
  data.splice(userIndex, 1);
  res.status(204).send(); // No content response
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// --------------- Question 2 End -------------------------------------



// --------------- Question 3 Statrt -------------------------------------
// can we create or submit data with GET Method
// yes we can but we should not because GET method is for getting the data
// and POST method is for creating the data but we can send data with GET method
// like this
// http://localhost:3000/data?name=John&email=john@example.com&phone=1234567890

// Send Data by GET Method
app.get("/data", (req, res)=>{
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) return res.send("All fields are required");
    res.json({ name, email, phone })
})

// --------------- Question 3 end -------------------------------------



//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));