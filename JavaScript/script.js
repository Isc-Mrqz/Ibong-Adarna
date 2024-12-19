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



// This plays the Ibong Adarna's chirp upon hovering the image.
const ibong_adarna_image = document.getElementById('ibong-adarna-image');
  const ibong_adarna_chirp_sound = document.getElementById('ibong-adarna-chirp');

  // This is the Event listener that plays the sound upon hover.
  ibong_adarna_image.addEventListener('mouseover', () => {
    ibong_adarna_chirp_sound.play();
  });

  // This pauses the sound when mouse leaves the image.
  ibong_adarna_image.addEventListener('mouseout', () => {
    ibong_adarna_chirp_sound.pause();
    // This resets the sound to the beginning.
    ibong_adarna_chirp_sound.currentTime = 0; 
  });



// Well Flashlight Feature
  
// This selects the torchlight and container elements from the DOM.
// This is the element that creates the torchlight effect
let torchlight = document.getElementById("torchlight");
// This is the container that stores both the image and the torchlight.
let wellContainer = document.querySelector(".well-main-container");

// I created this function to detect if the device support touch. 
function touchDetected() {
  // It returns true if touch events are confirmed to be supported.
  return 'ontouchstart' in window;
}

// This is another function to update the torchlight's position according to the user's cursor or touch event.
function updateTorchlightPosition(event) {
  // This gets the container's position relative to the screen to account for any scrolling or offset.
  const containerArea = wellContainer.getBoundingClientRect();

  // This gets the current position of the user's cursor or touch relative to the container.
  let cursorcoordinateX = touchDetected() ? event.touches[0].clientX - containerArea.left : event.clientX - containerArea.left;
  let cursorcoordinateY = touchDetected() ? event.touches[0].clientY - containerArea.top : event.clientY - containerArea.top;

  // This is to update the torchlight's position using CSS variables and controls where the flashlight effect is shown.
  torchlight.style.setProperty("--torchlight-X-coordinate", cursorcoordinateX + "px");
  torchlight.style.setProperty("--torchlight-Y-coordinate", cursorcoordinateY + "px");
}

// These are Event Listeners to update where the torchlight's position is.
document.addEventListener("mousemove", updateTorchlightPosition);
document.addEventListener("touchmove", updateTorchlightPosition);
