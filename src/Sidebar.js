import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Model</div>
      <span className="chat-model ">meta-llama/Llama-3-8b-chat-hf</span>
      <div className="sidebar-header">Modifications</div>
      <div className="sidebar-content">Parameters</div>
    </div>
  );
}

export default Sidebar;
