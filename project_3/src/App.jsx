import { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import PlayPage from './components/PlayPage/PlayPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {
        currentPage === 'landing' ? (
          <LandingPage onPlayClick={() => setCurrentPage('play')}/>
        ) : (
          <PlayPage />
        )
      }
    </div>
  );
};

export default App
