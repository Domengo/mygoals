function displayTimeAndDate() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
}

displayTimeAndDate();
setInterval(displayTimeAndDate, 1000);

const goalsList = [
    "<strong>Master Frontend Development:</strong> I aim to become proficient in HTML, CSS, and JavaScript, along with popular libraries and frameworks such as ReactJS, NextJS, and Vite.",
    "<strong>Backend Development:</strong> I plan to gain practical experience and knowledge in NodeJS and Django for backend development.",
    "<strong>Full Stack Development:</strong> By combining my frontend and backend skills, I want to be able to build complete full stack web applications.",
    "<strong>Mobile Application Development:</strong> Within the next two years, I hope to familiarize myself with React Native and Flutter to develop high-quality, cross-platform mobile applications.",
    "<strong>UI/UX Design:</strong> I want to learn how to design user-friendly interfaces and improve user experience by mastering tools like Figma and Adobe XD.",
    "<strong>Version Control:</strong> I aim to become proficient in using Git and GitHub for version control and collaboration on projects.",
    "<strong>Problem-Solving Skills:</strong> I plan to improve my problem-solving skills by participating in coding challenges and competitive programming.",
    "<strong>Open Source Contribution:</strong> I want to contribute to open source projects to learn from others, improve my coding skills, and give back to the community.",
    "<strong>Continuous Learning:</strong> I aim to stay updated with the latest technologies and trends in the tech industry through online courses, tutorials, and reading tech blogs."
  ];

  const goalsContainer = document.querySelector("#goals ul");

  goalsList.forEach((goal) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = goal;
    goalsContainer.appendChild(listItem);
  });