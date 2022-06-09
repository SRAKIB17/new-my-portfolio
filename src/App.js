import React, { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/Intro/Intro';

const App = () => {
  const [dark, setDark]= useState('light')
  return (
    <div data-theme={dark}  style={{height:'100vh'}}>
      <Header dark={setDark}/>
      <Intro/>
      
    </div>
  );
};

export default App;