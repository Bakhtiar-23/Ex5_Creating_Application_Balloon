document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const addMessageBtn = document.getElementById('addMessageBtn');
    const clearMessagesBtn = document.getElementById('clearMessagesBtn');
    const messageContainer = document.getElementById('messageContainer');
  
    // Enable the add message button only if there is text in the input field
    messageInput.addEventListener('input', () => {
      addMessageBtn.disabled = messageInput.value.trim() === '';
    });
  
    // Add a new message
    addMessageBtn.addEventListener('click', () => {
      const messageText = messageInput.value.trim();
  
      if (messageText) {
        const messageParagraph = document.createElement('p');
        messageParagraph.classList.add('message');
        messageParagraph.textContent = messageText;
  
        messageContainer.appendChild(messageParagraph);
        messageInput.value = '';
        addMessageBtn.disabled = true; // Disable button after adding message
      }
    });
  
    // Clear messages with confirmation
    clearMessagesBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all messages?')) {
        messageContainer.innerHTML = ''; // Clear all messages
      }
    });
  });
  