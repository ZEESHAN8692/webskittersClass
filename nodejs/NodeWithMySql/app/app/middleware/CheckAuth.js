// Middleware 1: Logging Request
function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Call the next middleware function
}

// Middleware 2: Check if the user is authenticated
function isAuthenticated(req, res, next) {
  const isLoggedIn = req.headers['x-authenticated']; // Simulating authentication check
  if (!isLoggedIn) {
    return res.status(401).json({ error: 'User not authenticated' });
  }
  next(); // Proceed if authenticated
}

// Middleware 3: Validate request body
function validateBody(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  next(); // Proceed if valid
}

// Final route handler
function handleRequest(req, res) {
  res.status(200).json({ message: 'Request handled successfully' });
}


module.exports = {
  logRequest,
  isAuthenticated,
  validateBody,
  handleRequest
};// Final route handler
