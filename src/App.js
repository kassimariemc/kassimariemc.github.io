import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import FigureWrapper from "./components/FigureWrapper";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <FigureWrapper>
        <Jumbotron />
      </FigureWrapper>
      <Footer />
    </div>
  );
}

export default App;
