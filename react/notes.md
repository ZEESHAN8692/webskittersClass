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

## Hooks

# useParams -- find the Url Value

1. Store Value in Link

```javascript
  const data  = "Hello"
  const data1  = "Zeeshan Khan"
  <Link to={`/about/:${data}/${data2}`}>
```

2. go to Routing Page

```javascript
   <Route Path="/about/:data1/:data2" element={<About/>}>
```

3. go to About.jsx page

```javascript
import { useParams } from "react-router-dom";

const { data1, data2 } = useParams();
return (
  <h1>
    {data1} {data2}
  </h1>
);
```

# useState
1. mounting
2. updating 
3. unmounting 
 
