import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = input;
    setMessages([...messages, { sender: 'user', text: userMessage }]);

    // Send the message to the backend and get the response
    const response = await axios.post('http://localhost:5000/chat', { message: userMessage });

    setMessages([...messages, { sender: 'user', text: userMessage }, { sender: 'bot', text: response.data.response }]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>AI Chatbot</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
