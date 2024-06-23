import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header.js';
import HomePage from './homepage.js';
import JobPage from './jobpage.js';
import Vacancy from './components/vacancy';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:jobId" element={<JobPage />} />
        <Route path="/vacancy" element={<Vacancy />} />
      </Routes>
    </Router>
  );
}

export default App;
