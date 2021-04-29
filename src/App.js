import React from 'react';
import WeatherProvider from './providers/WeatherProvider';
import Dashboard from './pages/Dashboard';

require('dotenv').config();

function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  );
}

export default App;
