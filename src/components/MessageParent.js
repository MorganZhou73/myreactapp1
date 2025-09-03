import { useState } from 'react';
import Sender from './Sender';
import Receiver from './Receiver';

function MessageParent() {
    const [messageData, setMessageData] = useState({
        text: '',
        color: '#000000' // Default black
    });

    // Handler for message submissions
    const handleMessageSubmit = (text, color) => {
        setMessageData({ text, color });
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <Sender onSend={handleMessageSubmit} />
            <Receiver
                message={messageData.text}
                color={messageData.color}  // Pass color to Receiver
            />
        </div>
    );
}

export default MessageParent;
