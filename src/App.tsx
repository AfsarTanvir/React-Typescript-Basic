import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./App.css";
import Button from "./models/Buttons";
import About from "./models/About";
import {Route} from 'react-router-dom';
import Layout from "./models/Layout";
import Home from "./models/Home";
import Unions from "./models/Unions";
import NormalFunction from "./models/NormalFunction";
import InputField from "./models/InputField";
import Checkbox from "./models/Checkbox";
import RadioButton_and_Dropdown from "./models/RadioButton_and_Dropdown";
import MapFunction from "./models/MapFunction";
import UseRef from "./models/UseRef";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="button" element={<Button />} />
        <Route path="union" element={<Unions />} />
        <Route path="normalFunction" element={<NormalFunction />} />
        <Route path="inputField" element={<InputField />} />
        <Route path="checkbox" element={<Checkbox />} />
        <Route path="radio" element={<RadioButton_and_Dropdown />} />
        <Route path="mapFunction" element={<MapFunction />} />
        <Route path="useRef" element={<UseRef />} />
      </Route>
    )
  );
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
