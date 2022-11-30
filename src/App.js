import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = (
    <div className="App">
      <header className="App-header">
        <h1>Tu hora local es:</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </header>
    </div>
  );
  root.render(element);
};



export default App;
