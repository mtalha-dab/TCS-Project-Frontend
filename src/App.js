import React from "react";

import { BrowserRouter ,Routes, Route } from "react-router-dom";

import NavBar from "./Pages/Navbar.js"
import Admin from "./Pages/Admin.js";
import Teacher from "./Pages/Teacher.js";
import Head from "./Pages/Head.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<NavBar/>}/>
      <Route path="/head" element={<Head />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<Teacher />} />
        
        
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
