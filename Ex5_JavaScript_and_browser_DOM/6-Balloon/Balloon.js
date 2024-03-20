const balloon = document.querySelector('.balloon');
const inflateButton = document.getElementById('inflateButton');
const deflateButton = document.getElementById('deflateButton');

let balloonSize = 20; // Initial font size in pixels
const maxBalloonSize = 150; // Maximum font size before explosion

// Function to update balloon size
function updateBalloonSize() {
  balloon.style.fontSize = `${balloonSize}px`;
  if (balloonSize >= maxBalloonSize) {
    // Explode the balloon
    balloon.textContent = '💥';
    inflateButton.disabled = true;
    deflateButton.disabled = true;
  }
}

// Event handler for inflating the balloon
inflateButton.addEventListener('click', () => {
  balloonSize += 2; // Increase size by 2 pixels
  updateBalloonSize();
});

// Event handler for deflating the balloon
deflateButton.addEventListener('click', () => {
  if (balloon.textContent !== '💥') { // Check if balloon has exploded
    balloonSize -= 2; // Decrease size by 2 pixels
    updateBalloonSize();
  }
});

