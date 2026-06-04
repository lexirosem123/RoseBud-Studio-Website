const articlesContainer = document.getElementById("articles-container");

const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

sortedArticles.forEach(article => {
    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    articleCard.innerHTML = `
        <div class="article-content">
            <h2>${article.title}</h2>
            <p class="article-date">${article.displayDate}</p>

            <div class="article-preview">
                <p>${article.summary}</p>
            </div>

            <div class="article-tags">
                ${article.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>

            <a href="${article.file}" class="project-button">View Article</a>
        </div>
    `;

    articlesContainer.appendChild(articleCard);
});