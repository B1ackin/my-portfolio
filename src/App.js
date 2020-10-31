import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Skill from "./skills/skill/Skill";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";



function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Skills />
        <Portfolio/>
        <Contacts />
        <Footer/>
    </div>
  );
}

export default App;
