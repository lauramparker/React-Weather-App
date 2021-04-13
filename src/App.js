import React from 'react';
import WeatherProvider from '../providers/WeatherProvider';
import './components/Dashboard';


function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  );
}

export default App;
