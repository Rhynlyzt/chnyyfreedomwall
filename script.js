document.getElementById('sendButton').addEventListener('click', async function() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    // Display user message
    displayMessage('User: ' + userInput);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Call the new AI API
    const response = await fetch('https://appjonellccapis.zapto.org/api/gpt4o-v2', {
        method: 'POST', // Assuming you need to send a POST request
        headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ prompt: userInput }) // Send the user input as JSON
    });
    
    const data = await response.json();

    // Display AI response
    displayMessage('AI: ' + data.response);
});

function displayMessage(message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
