import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

import Accueil from './pages/Accueil';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/:userId" element={<Accueil />} />
        {/* 
            <Route path="/:userId/activity" element={<Accueil />} />
            <Route path="/:userId/average-sessions" element={<Accueil />} /> 
        */}
      </Routes>
    </Router>
  </React.StrictMode>
);
