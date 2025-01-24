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
  
  