import React from 'react';
import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <span>CHAT</span>
        <span className="chat-model">meta-llama/Llama-3-8b-chat-hf</span>
      </div>
      <div className="chat-window">
        <div className="tabs">
          <button className="tab-button active">
            <i className="fa fa-desktop tab-icon"></i>
            <span>UI</span>
          </button>
          <button className="tab-button">
            <i className="fa fa-cogs tab-icon"></i>
            <span>API</span>
          </button>
        </div>
      </div>
      <div className="input-container">
        <input className="chat-input" type="text" placeholder="Enter text here" />
        <button className="upload-button">
          <i className="fa fa-upload"></i>
        </button>
      </div>
    </div>
  );
}

export default Chat;
