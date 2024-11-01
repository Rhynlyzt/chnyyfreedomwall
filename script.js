const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user-message');
    userInput.value = '';

    try {
        const response = await fetch('https://appjonellccapis.zapto.org/api/gpt4o-v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: userMessage }) // Adjust based on API requirements
        });

        const data = await response.json();
        const botMessage = data.reply; // Change this based on the actual API response structure
        appendMessage(botMessage, 'api-message');
    } catch (error) {
        console.error('Error:', error);
        appendMessage("Sorry, there was an error processing your request.", 'api-message');
    }
}

function appendMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
