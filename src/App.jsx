// import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { getTopics, getArticles, getUsers, getArticleById } from './api';

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

  useEffect(() => {
    getArticleById('1');
  }, []);

  return <h1>PressIt</h1>;
}

export default App;
