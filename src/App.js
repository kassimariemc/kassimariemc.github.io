import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import FigureWrapper from "./components/FigureWrapper";
import Jumbotron from "./components/Jumbotron";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <FigureWrapper>
        <Jumbotron />
        <Portfolio />
        <Contact />
      </FigureWrapper>
      <Footer />
    </div>
  );
}

export default App;
