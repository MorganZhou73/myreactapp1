import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Sender({ onSend }) {
  const [inputText, setInputText] = useState('hello');
  const [selectedColor, setSelectedColor] = useState('#0000ff'); // Default red

  const handleSubmit = () => {
    onSend(inputText, selectedColor);  // Pass both text and color to parent
    setInputText('');
  };

  return (
    <div  >
      <h3>Sender Component</h3>
      <input type="text" value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type a message" 
      />
      
      <label style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
        <span>Choose color:&nbsp;</span>
        <input type="color" value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
      </label>
      
      <button  onClick={handleSubmit} > Send Message </button>
    </div>
  );
}

Sender.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default Sender;
