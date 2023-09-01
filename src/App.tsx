import React from 'react';
import{BrowserRouter as Router, Routes,Route,Link}from "react-router-dom"
import{ useState } from 'react'
import { Home } from './componenets/Main/Home';
import { Login } from "./componenets/Login";
import { Nav } from './componenets/Nav';
import { Create } from './create-posts/Create';
import './CSS/App.css';
import { About } from './componenets/About';



function App() {
  return (
    <div className="App">
     
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/About" element={<About/>}/>
           

            
          </Routes>
        </Router>
      
      
     
    </div>
  );
}








export default App;
