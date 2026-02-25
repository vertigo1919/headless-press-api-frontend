// import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { getTopics, getArticles, getUsers } from './api';

function App() {
  useEffect(() => {
    getTopics();
  }, []);

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  return <h1>PressIt</h1>;
}

export default App;
