import React from 'react';
import WeatherProvider from './providers/WeatherProvider';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  );
}

export default App;
