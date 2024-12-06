import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

import Programming from "./components/programming";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Skills />
        <Education />
        <Programming />

        <PortFolio />

        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
