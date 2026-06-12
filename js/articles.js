const articles = [
    {
        title: "Website Launched!",
        date: "2026-06-03",
        displayDate: "June 3, 2026",
        summary: "I finally stepped into the world of HTML and CSS and launched my first development website.",
        file: "news/websitelauncharticle.html",
        tags: ["post"]
    },
    {
        title: "LiftedInvoice Progress Update",
        date: "2026-06-03",
        displayDate: "June 3, 2026",
        summary: "Learning how to connect Google Calendar API for a scheduling system.",
        file: "news/liftedinvoiceupdatearticle.html",
        tags: ["liftedinvoice"]
    },
    {
        title: "LiftedInvoice Progress Update 2",
        date: "2026-06-12",
        displayDate: "June 12, 2026",
        summary: "Collecting feedback from the client.",
        file: "news/liftedinvoiceupdatearticle2.html",
        tags: ["liftedinvoice"]
    }
];

const glowkeeperArticles = articles.filter(article =>
    article.tags.includes("glowkeeper")
);

const liftedinvoiceArticles = articles.filter(article =>
    article.tags.includes("liftedinvoice")
);

const gardentopcafeArticles = articles.filter(article =>
    article.tags.includes("gardentopcafe")
);

const garbagedashArticles = articles.filter(article =>
    article.tags.includes("garbagedash")
);