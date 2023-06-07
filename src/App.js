
import React from 'react';
import Dashboard from './Dashboard';
import { ThemeProvider } from './ThemeContext';
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
