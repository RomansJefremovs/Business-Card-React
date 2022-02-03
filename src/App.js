import React from "react";
import './App.css';
import Photo from "./Components/Photo"
import MainInfo from "./Components/MainInfo";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Interests from "./Components/Interests";
export default function App() {
  return (
    <div className="App">
        <Photo/>
        <MainInfo/>
        <About/>
        <Interests/>
        <Footer/>
    </div>
  );
}


