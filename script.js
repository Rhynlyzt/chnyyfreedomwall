document.getElementById('sendButton').addEventListener('click', async function() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    // Display user message
    displayMessage('User: ' + userInput);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Call AI API
    const response = await fetch(`https://joshweb.click/gptweb?prompt=${encodeURIComponent(userInput)}`);
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
