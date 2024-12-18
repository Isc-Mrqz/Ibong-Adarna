// This waits for the DOM content to fully load. 
document.addEventListener("DOMContentLoaded", function () {
  // This selects the important elements from the DOM.

  // This is the button to Start the Website.
  const startWebsiteButton = document.querySelector('.start-website-button');

  // This is the preloader container.
  const preloader = document.querySelector('.main-preloader-container');

  // This is the body element.
  const body = document.body;

  // This is the control panel for the background music, auto-scroll, and fullscreen features.
  const backgroundmusicAutoscrollFullscreenControlPanel = document.querySelector('.website-backgroundmusic-autoscroll-and-fullscreen-toggles');
  // This is the Background music audio element.
  const backgroundMusic = document.getElementById('background-music');
  // This is the toggle for the Background Music Feature.
  const backgroundmusicToggle = document.getElementById('background-music-toggle');
  // This is the toggle for the Auto Scroll Feature.
  const autoScrollToggle = document.getElementById('auto-scroll-toggle');
  // This is the toggle for the full screen Feature.
  const fullScreenToggle = document.getElementById('fullscreen-toggle');

  // This is the variable used to manage the auto-scroll interval.
  let autoScrollInterval;

  // This is the function I used to hide the preloader.
  function hidePreloader() {
    // This adds the class for the preloader exit animation.
    preloader.classList.add('unveilCurtain');
    // This is to synchronize the body class with the preloader.
    body.classList.add('unveilCurtain');
    setTimeout(() => {
      // This hides the preloader right after animation.
      preloader.style.display = 'none';
      // This is to show the control panel.
      backgroundmusicAutoscrollFullscreenControlPanel.style.display = 'block';
      if (backgroundmusicToggle.checked) {
        // This starts the music if the toggle is already checked.
        backgroundMusic.play();
      }
      // This waits for 2 seconds.
    }, 2000);
  }

  // This is the Event Listener for the start website button.
  startWebsiteButton.addEventListener('click', hidePreloader);

  // This is the Event Listener responsible for the background music toggle.
  backgroundmusicToggle.addEventListener('change', () => {
    if (backgroundmusicToggle.checked) {
      // This plays the background music when the toggle is checked.
      backgroundMusic.play();
    } else {
      // This pauses the background music if the toggle is unchecked.
      backgroundMusic.pause();
    }
  });

  // I created this Event Listener for the auto-scroll toggle.
  autoScrollToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      // This is to start the auto-scrolling.
      startAutoScroll();
    } else {
      // This is to stop the auto-scrolling.
      stopAutoScroll();
    }
  });

  // This is the function used to start the auto-scrolling feature.
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo();
      } else {
        // This scrolls down by 5 pixels.
        window.scrollBy({ top: 5, behavior: 'smooth' });
      }
      // It is executed every 10 miliseconds.
    }, 10);
  }

  // This is the function used to stop the auto-scrolling.
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // This ensures that the background music is paused or not playing if the toggle is initially unchecked.
  if (!backgroundmusicToggle.checked) {
    backgroundMusic.pause();
  }

  // This is to ensure that auto scroll is off when the page loads.
  stopAutoScroll();

  // This is the event listener for the Full-Screen Toggle.
  fullScreenToggle.addEventListener('change', () => {
    if (fullScreenToggle.checked) {
      // Enter Full Screen
      enterFullScreen();
    } else {
      // Exit Full Screen
      exitFullScreen();
    }
  });

  // This is the function I used to enter full screen.
  function enterFullScreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }

  // This is the function I created to exit full screen.
  function exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});