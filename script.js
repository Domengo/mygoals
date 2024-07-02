document.querySelector('[data-testid="currentTimeUTC"]').textContent = new Date().toUTCString();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = days[new Date().getUTCDay()]
document.querySelector('[data-testid="currentDay"]').textContent = dayName;