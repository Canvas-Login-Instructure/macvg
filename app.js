// Add JavaScript for time, date, and FPS here
function updateTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString();

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }

  setInterval(updateTimeAndDate, 1000);
  updateTimeAndDate();

  let lastFrameTime = performance.now();
  let fpsDisplay = document.getElementById('fps');

  function updateFPS() {
    const currentFrameTime = performance.now();
    const delta = currentFrameTime - lastFrameTime;
    const fps = Math.round(1000 / delta);

    fpsDisplay.textContent = fps;
    lastFrameTime = currentFrameTime;
    requestAnimationFrame(updateFPS);
  }

  updateFPS();
  // Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  
  // Function to add animation class when element enters the viewport
  function handleScroll() {
    const scrollElements = document.querySelectorAll('.scroll-hidden');
    
    scrollElements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('scroll-visible');
      }
    });
  }
  
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check on page load
  handleScroll();
  // Update the width of the progress bar based on the scroll position
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    const scrollTop = window.scrollY; // Pixels scrolled vertically
    const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercent = (scrollTop / docHeight) * 100; // Calculate percentage
    progressBar.style.width = scrollPercent + "%"; // Update the width of the bar
  });
  
  // Array of Quotes
const quotes = [
  "\"The best way to predict the future is to create it.\" - Abraham Lincoln",
  "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
  "\"The only way to do great work is to love what you do.\" - Steve Jobs",
  "\"The secret of getting ahead is getting started.\" - Mark Twain",
];

// Array of Fun Facts
const trivia = [
  "The longest videogame marathon playing a single game is over 35 hours!",
  "The first-ever video game was created in 1958 by William Higinbotham, and it was a game called 'Tennis for Two.'",
  "In 1980, 'Pac-Man' became the first game to feature cut scenes, which are now a standard in many games.",
];

// Array of Tips
const tips = [
  "Use game mods to enhance your gaming experience! Mods can add new content, fix bugs, and improve graphics.",
  "In battle royales, always keep an eye on the shrinking play zone. It can often be more dangerous than enemies.",
  "When playing an RPG, talk to NPCs! They often give you useful information and side quests.",
];

// Randomly select a quote, trivia, and tip
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("trivia").innerText = trivia[Math.floor(Math.random() * trivia.length)];
document.getElementById("tip").innerText = tips[Math.floor(Math.random() * tips.length)];


// Particle.js Configurations for Left Sidebar
particlesJS("particles-js2", {
  "particles": {
    "number": {
      "value": 50,   // Number of particles
      "density": {
        "enable": true,
        "value_area": 800  // Area where particles will be scattered
      }
    },
    "color": {
      "value": "#00aaff"  // Particle color (light blue)
    },
    "shape": {
      "type": "circle",  // Shape of the particles
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,   // Particle opacity
      "random": true,  // Random opacity
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    },
    "size": {
      "value": 5,    // Particle size
      "random": true,  // Random size
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 1
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00aaff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "random",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});
