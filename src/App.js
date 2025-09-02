import './App.css';
import React, { useState } from 'react';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import Todos from './features/todos/Todos';

function App() {
  const [messageData, setMessageData] = useState({
    text: '',
    color: '#000000' // Default black
  });


  // Handler for message submissions
  const handleMessageSubmit = (text, color) => {
    setMessageData({ text, color });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Parent Component</h2>
      <Sender onSend={handleMessageSubmit} />
      <Receiver 
        message={messageData.text} 
        color={messageData.color}  // Pass color to Receiver
      />
      <hr />
      <Header />
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
