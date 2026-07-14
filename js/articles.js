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
        tags: ["liftedinvoice", "devlog"]
    },
    {
        title: "Meeting with the Client",
        date: "2026-06-12",
        displayDate: "June 12, 2026",
        summary: "Collecting feedback from the client. Learning how to work with the client whether than inspite of them. It was super helpful to get a new set of eyes on it.",
        file: "news/liftedinvoiceupdatearticle2.html",
        tags: ["liftedinvoice", "devlog"]
    },
    {
        title: "Deadlines are not my Specialty",
        date: "2026-06-27",
        displayDate: "June 27, 2026",
        summary: "I signed up for the JuniperDev Game Jam I believe 2 days late as I did not see it get posted until then; and I was determined to still complete a game and upload it to be judged. Unfortunately, I found out a few minutes ago that the late submission",
        file: "news/seriouslysillynews.html",
        tags: ["seriouslysilly"]
    },
    {
        title: "Finally Focusing on a Decent Itch.io Page",
        date: "2026-07-14",
        displayDate: "July 14, 2026",
        summary: "Working on a game is a process in itself... but I always struggle to make a good landing page for the work that I have put in on said game. Thankfully, Itch.io does make this a much easier process for developers, but that still requires me to put in some extra work to make the page look appealing.",
        file: "news/itchpageupload.html",
        tags: ["littlerescuesquad"]
    },
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

const SeriouslySillyArticles = articles.filter(article =>
    article.tags.includes("seriouslysilly")
);

const littlerescuesquadArticles = articles.filter(article =>
    article.tags.includes("littlerescuesquad")
);