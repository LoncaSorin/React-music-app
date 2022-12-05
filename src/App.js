import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppData from './AppData';

function App() {
  return (
    <BrowserRouter>
      <AppData />
    </BrowserRouter>
  );
}

export default App;
