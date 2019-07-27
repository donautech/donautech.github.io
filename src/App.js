import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import MastHead from "./components/MastHead";
import IconsGrid from "./components/IconsGrid";
import Showcase from "./components/ShowCase";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navigation/>
        <MastHead/>
        <IconsGrid/>
        <Showcase/>
        <Footer/>
      </div>
  );
}

export default App;
