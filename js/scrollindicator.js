const scrollIndicator = document.getElementById("scroll-indicator");

if (scrollIndicator) {
    const hideAfter = 25;

    function updateScrollIndicator() {
        if (window.scrollY >= hideAfter) {
            scrollIndicator.classList.add("hidden");
        } else {
            scrollIndicator.classList.remove("hidden");
        }
    }

    window.addEventListener("scroll", updateScrollIndicator);

    updateScrollIndicator();
}