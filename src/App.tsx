import React, { useEffect } from 'react';
import './App.css';
import Logger from './Logger';

const App: React.FC = () => {
  useEffect(() => {
    const logger = Logger.getInstance();
    logger.log("App component has mounted!");
    logger.error("This is an error log.");
  }, []);

  return (
    <div className="App">
      <h1>React with TypeScript and Singleton Pattern</h1>
    </div>
  );
}

export default App;
