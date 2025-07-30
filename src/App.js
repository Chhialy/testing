import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to React!');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Web App</h1>
        <p>{message}</p>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={handleIncrement} className="btn btn-primary">
              +
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary">
              -
            </button>
            <button onClick={handleReset} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>

        <div className="message-section">
          <h3>Custom Message</h3>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message..."
            className="message-input"
          />
        </div>

        <div className="info-section">
          <p>This is a simple React application with:</p>
          <ul>
            <li>State management with useState hook</li>
            <li>Event handling</li>
            <li>Interactive counter</li>
            <li>Dynamic message display</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
