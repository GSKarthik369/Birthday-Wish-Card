// script.js
document.addEventListener('DOMContentLoaded', () => {
  const popperContainer = document.getElementById('poppers-container');

  function createPopper() {
    const popper = document.createElement('div');
    popper.classList.add('popper');

    const size = Math.random() * 20 + 10; // Random size between 10px and 30px
    popper.style.width = `${size}px`;
    popper.style.height = `${size}px`;

    const startX = Math.random() * window.innerWidth;
    popper.style.left = `${startX}px`;

    popperContainer.appendChild(popper);

    // Remove the popper after the animation ends
    setTimeout(() => {
      popper.remove();
    }, 5000);
  }

  // Create a new popper every 300ms
  setInterval(createPopper, 300);

  var audio = document.getElementById('birthdaySong');

  function playAudio() {
    audio.play().catch(function(error) {
      console.log('Autoplay prevented, waiting for user interaction.');
    });
  }

  // Try to play immediately
  playAudio();

  // Add a click event listener to the document to play the audio on first user interaction
  document.addEventListener('click', function() {
    playAudio();
  }, { once: true });

  // Also try to play on touchstart for mobile devices
  document.addEventListener('touchstart', function() {
    playAudio();
  }, { once: true });
});
