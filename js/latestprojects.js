const latestProjectsContainer = document.getElementById("latest-projects");

const latestProjects = projects.slice(0, 3);

latestProjects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title} screenshot">

        <div class="project-content">
            <p class="project-status">${project.status}</p>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="project-date">Started: ${project.startDate}</p>

            <a href="${project.file}" class="project-button">View Project</a>
        </div>
    `;

    latestProjectsContainer.appendChild(card);
});