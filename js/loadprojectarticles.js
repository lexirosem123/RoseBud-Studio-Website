function loadProjectArticles(projectTag, containerId) {
    const container = document.getElementById(containerId);

    const filteredArticles = articles.filter(article =>
        article.tags.includes(projectTag)
    );

    filteredArticles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
            <div class="article-content">
                <h3>${article.title}</h3>
                <p class="article-date">${article.displayDate}</p>

                <div class="article-preview">
                    <p>${article.summary}</p>
                </div>

                <a href="../${article.file}" class="project-button">Read Update</a>
            </div>
        `;

        container.appendChild(card);
    });
}