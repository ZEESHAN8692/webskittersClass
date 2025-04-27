## React Note

Install Reacte for Vite
npm create vite@latest my-react-app -- --template react

# Install Bootstarp in react

# React Router

1. Install React Rourt Dom -- npm install react-router-dom
2. import {BrouserRouter} from ' react-router-dom '
3. go to main.jsx > wrap ScrictMode

```javascript
<BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
</BrowserRouter>
```

4. create folder Rounting and create file Routing.jsx
   import Route and import Routes

```javascript
<Rautes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<Home />} />
  <Route path="/contact" element={<Countact />} />
</Rautes>
```

5. go to App.js

```javascript
  import Routing from 'Routing.jsx'
  return(
    <>
      <Routing.js>
    </>
  )
```

6. You can create Layout file and Header and Footer then use in Routing File
