import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Journey from "./components/Journey/Journey"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from "./components/Project/Project";
import Skills from "./components/Skil/Skil";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
 
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
     <div className="bg-black min-h-screen text-white">
      <Navbar/>
     <Home/>
     <Journey/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
     
    </div>
  )
}

export default App
