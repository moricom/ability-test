import React from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import Preview from './components/Preview';
import Bar from './components/Header';

function App() {
  return (
    <div className="App">
      <Bar />
      <Preview />
    </div>
  );
}

export default App;
