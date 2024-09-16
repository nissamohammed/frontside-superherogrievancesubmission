import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

function Chatbot() {
    const [show, setShow] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hi there! How can I help you today?', className: 'incoming' }
    ]);
    const [loading, setLoading] = useState(false); // To show "Thinking..." during response generation
    const chatInputRef = useRef(null);
    const chatboxRef = useRef(null);

    // Function to create a message object
    const createChatMessage = (message, className) => {
        return { text: message, className: className };
    };

    const handleShow = () => setShow(true);
    const closeChat = () => setShow(false);

    // Function to fetch response from Gemini API
    const fetchBotResponse = async (userMessage) => {
        setLoading(true); // Show "Thinking..." while waiting for API response
        const apiKey = "AIzaSyABY0_zL8KthuV2GtzhA_kti3-Z5oDluZE"; // Replace with your actual Google API key
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

        /*const data = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": userMessage
                        }
                    ]
                }
            ]
        };*/

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    contents: [{ 
                      role: "user", 
                      parts: [{ text: userMessage }] 
                    }] 
                  }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
           // const botMessage = result.choices[0].text; // Adjust according to Gemini API response format
           const botMessage = result.candidates[0].content.parts[0].text;
            // Append the bot's message to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                createChatMessage(botMessage, 'incoming')
            ]);

        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                createChatMessage("Sorry, I couldn't fetch a response. Please try again.", 'incoming')
            ]);
            console.error("Error fetching response from Gemini API:", error);
        } finally {
            setLoading(false); 
        }
    };

    // Function to handle sending the chat message
    const handleChat = () => {
        const userMessage = chatInputRef.current.value.trim(); // Get user input
        if (!userMessage) return; // Do nothing if the input is empty

        // Append the user's message to the state
        setMessages((prevMessages) => [
            ...prevMessages,
            createChatMessage(userMessage, 'outgoing') // User's message
        ]);

        chatInputRef.current.value = ''; // Clear the input field after sending

        // Fetch bot response from Gemini API
        fetchBotResponse(userMessage);
    };

    // Use useEffect to scroll the chatbox to the bottom when messages change
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]); // Only run when messages change



    return (
        <>
         
         {/* Conditionally add the "show-chatbot" class when show is true */}
        <div className={show ? "show-chatbot" : ""}>
            <button className="chatbot-toggler" onClick={handleShow}>
                <FontAwesomeIcon icon={faMessage} />
            </button>

            {show && (
                <div className="chatbot">
                    <header>
                        <h2>Chatbot</h2>
                        <span className="close-btn " onClick={closeChat}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </header>
                    <ul className="chatbox" ref={chatboxRef}>
                        {messages.map((message, index) => (
                            <li key={index} className={`chat ${message.className}`}>
                                {message.className === 'incoming' && (
                                    <FontAwesomeIcon icon={faHeadset} className='p-2 mt-4'/>
                                )}
                                <p>{message.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="chat-input">
                        <textarea
                            ref={chatInputRef}
                            placeholder="Enter a message..."
                            required
                        ></textarea>
                        <span
                            id="send-btn"
                            className="send-btn"
                            onClick={handleChat}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                    </div>
                    {loading && (
                        <div className="loading">
                            <p>Thinking...</p>
                        </div>
                    )}
                </div>
            )}
        </div>
 
        </>
    );
}

export default Chatbot;


















          