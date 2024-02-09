import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Score from "./pages/assignment/Score";
import Academics from "./pages/academics/Academics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/assignment" element={<Score/>}/>
        <Route path="/academics" element={<Academics/>}/>
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
