function displayTimeAndDate() {
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = new Date().toUTCString();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[new Date().getUTCDay()]
    document.querySelector('[data-testid="currentDay"]').textContent = dayName;
  }
  
  // Call the function once to display the time immediately
  displayTimeAndDate();
  // call once every second (1000 milliseconds)
  setInterval(displayTimeAndDate, 1000);