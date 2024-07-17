
import React, { useState } from 'react';
import './Parameter.css';

function ParameterControls() {
  const [outputLength, setOutputLength] = useState(512);
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.7);
  const [topK, setTopK] = useState(50);
  const [repetitionPenalty, setRepetitionPenalty] = useState(1);

  return (
    <div className="parameter-controls">
      <div className="control">
        <span>Output Length</span>
        <input
          type="range"
          min="0"
          max="1024"
          value={outputLength}
          onChange={(e) => setOutputLength(e.target.value)}
        />
        <span className="value">{outputLength}</span>
      </div>
      <div className="control">
        <span>Temperature</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <span className="value">{temperature}</span>
      </div>
      <div className="control">
        <span>Top-P</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={topP}
          onChange={(e) => setTopP(e.target.value)}
        />
        <span className="value">{topP}</span>
      </div>
      <div className="control">
        <span>Top-K</span>
        <input
          type="range"
          min="0"
          max="100"
          value={topK}
          onChange={(e) => setTopK(e.target.value)}
        />
        <span className="value">{topK}</span>
      </div>
      <div className="control">
        <span>Repetition Penalty</span>
        <input
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={repetitionPenalty}
          onChange={(e) => setRepetitionPenalty(e.target.value)}
        />
        <span className="value">{repetitionPenalty}</span>
      </div>
    </div>
  );
}

export default ParameterControls;
