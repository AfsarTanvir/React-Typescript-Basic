import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./App.css";
import Button from "./models/Buttons";
import About from "./models/About";
import {Route} from 'react-router-dom';
import Layout from "./models/Layout";
import Home from "./models/Home";
import Unions from "./models/Unions";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="button" element={<Button />} />
        <Route path="union" element={<Unions />} />
      </Route>
    )
  );
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
