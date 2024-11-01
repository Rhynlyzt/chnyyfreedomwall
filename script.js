const chatBox = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', async () => {
    const userText = userInput.value;
    if (!userText) return;

    // Append user input to the chat
    appendMessage('user', userText);
    userInput.value = ''; // Clear input box

    // Call the API
    try {
        const response = await fetch('https://appjonellccapis.zapto.org/api/gpt4o-v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();
        const reply = data.response || 'No response from the API.';

        // Append the response to the chat
        appendMessage('response', reply);
    } catch (error) {
        appendMessage('response', 'Error: ' + error.message);
    }
});

function appendMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(type);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
