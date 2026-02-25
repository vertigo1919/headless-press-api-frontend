// import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { getTopics } from './api';

function App() {
  useEffect(() => {
    getTopics();
  }, []);
  return <h1>PressIt</h1>;
}

export default App;
