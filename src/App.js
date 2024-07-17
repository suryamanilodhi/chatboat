
import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import ParameterControls from './Parameter';

function App() {
  return (
    <div className="app">
      <div className="chat-container">
        <Chat />
      </div>
      <div className="sidebar-container">
        <Sidebar />
        <ParameterControls />
      </div>
    </div>
  );
}

export default App;
