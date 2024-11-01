document.getElementById('send-button').addEventListener('click', async () => {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (!message) return;

    // Display user message
    appendMessage(`User: ${message}`);
    input.value = '';

    try {
        // Call the API using POST method
        const response = await fetch('https://joshweb.click/new/gpt-3_5-turbo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: message })
        });

        // Check if response is okay (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

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
