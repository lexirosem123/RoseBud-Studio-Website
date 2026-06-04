const latestArticlesContainer = document.getElementById("latest-articles");

const latestArticles = articles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

latestArticles.forEach(article => {
    const card = document.createElement("article");
    card.classList.add("news-card");

    card.innerHTML = `
        <p class="article-date">${article.displayDate}</p>
        <h4>${article.title}</h4>

        <div class="article-preview">
            <p>${article.summary}</p>
        </div>

        <a href="${article.file}">Read More</a>
    `;

    latestArticlesContainer.appendChild(card);
});