let isBlinking = false;
let blinkInterval;

document.getElementById('blink-btn').addEventListener('click', () => {
  const textElement = document.getElementById('blinking-text');

  if (isBlinking) {
    clearInterval(blinkInterval);
    textElement.style.visibility = 'hidden';
    isBlinking = false;
    document.getElementById('blink-btn').textContent = 'Click Here';
  } else {
    blinkInterval = setInterval(() => {
      textElement.style.visibility =
        textElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500); // Blinking interval
    isBlinking = true;
    document.getElementById('blink-btn').textContent = 'Stop Blinking';
  }
});