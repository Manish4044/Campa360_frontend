import React, { useEffect, useRef, useState } from "react";
import {  Route, Routes} from "react-router-dom";
import './App.css';
import VR from "./components/vr/";
import College from "./components/college/College";
import Home from "./components/homepage/Home";

function App() {
  console.log("APP Started");
  return (
    <div className="app">
    <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/college/:college_id" element={<College/>} /> 
      <Route exact path="/vr/:college_id" element={<VR/>} /> 
    </Routes>
    </div>
  );
}

export default App;
