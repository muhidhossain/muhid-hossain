import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import LoveToDo from './Components/LoveToDo/LoveToDo';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className='my-portfolio'>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <LoveToDo></LoveToDo>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
