document.addEventListener('DOMContentLoaded', function() {
  const messageInput = document.getElementById('messageInput');
  const addMessageBtn = document.getElementById('addMessageBtn');
  const messageContainer = document.getElementById('messageContainer');

  addMessageBtn.addEventListener('click', function() {
    const messageText = messageInput.value.trim(); // Get message text and trim whitespace

    if (messageText !== '') { // Check if message is not empty
      const messageParagraph = document.createElement('p'); // Create a new paragraph element
      messageParagraph.classList.add('message'); // Add a CSS class to the paragraph
      messageParagraph.textContent = messageText; // Set the text content of the paragraph

      messageContainer.appendChild(messageParagraph); // Append the paragraph to the container

      messageInput.value = ''; // Clear the input field after adding the message
    } else {
      alert('Please enter a message.'); // Show an alert if the input is empty
    }
  });
});
