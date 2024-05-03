import { useState } from 'react';

function ChatBot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        const userMessage = { text: input, from: 'user' };
        setMessages(messages => [...messages, userMessage]);
        const botResponse = await fetchChatGPTResponse(input);
        setMessages(messages => [...messages, botResponse]);
        setInput('');
    };

    const fetchChatGPTResponse = async (inputText) => {
        // Aquí se haría la llamada a la API 
        const response = await fetch('api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: inputText }),
        });
        const data = await response.json();
        return { text: data.message, from: 'bot' };
    };

    return (
        <div className="chat-bot">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.from}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Escribe un mensaje..."
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ChatBot;

