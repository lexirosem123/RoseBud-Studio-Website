const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title} project image">

        <div class="project-content">
            <p class="project-status">${project.status}</p>

            <h2>${project.title}</h2>

            <div class="project-tags">
                ${project.tags
                    .map(tag => `<span>${tag}</span>`)
                    .join("")}
            </div>

            <p>${project.summary}</p>

            <p class="project-date">
                ${project.startDate}
            </p>

            <a href="${project.file}" class="project-button">
                View Project
            </a>
        </div>
    `;

    projectsContainer.appendChild(card);
});