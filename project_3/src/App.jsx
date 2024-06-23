import { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import PlayPage from './components/PlayPage/PlayPage';
import './App.css';

const App = () => {
  return (
    <div>
      <LandingPage />
      <PlayPage />
    </div>
  );
};

export default App
