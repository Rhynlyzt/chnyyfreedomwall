document.getElementById('send-button').addEventListener('click', async () => {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (!message) return;

    // Display user message
    appendMessage(`User: ${message}`);
    input.value = '';

    try {
        // Call the API
        const response = await fetch(`https://joshweb.click/new/gpt-3_5-turbo?prompt=${encodeURIComponent(message)}`);
        const data = await response.json();

        // Display ChatGPT response
        appendMessage(`ChatGPT: ${data}`);
    } catch (error) {
        console.error('Error:', error);
        appendMessage('ChatGPT: Sorry, something went wrong.');
    }
});

function appendMessage(msg) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}
