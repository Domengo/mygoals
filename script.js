function displayTimeAndDate() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
}

displayTimeAndDate();
setInterval(updateTimeAndDate, 1000);
