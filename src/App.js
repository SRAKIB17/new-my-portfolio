import React, { useEffect, useState } from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skills';

import Contact from './components/contact/Contact';
const App = () => {


  return (

    <div data-theme='dark' style={{ height: '100vh', overflow: 'auto' }}>
      <Header  />
      <Intro />
      <Skill />
      
      <About />
      <Contact/>
    </div>

  );
};

export default App;