const gallery = document.getElementById("tools-gallery");

if (gallery) {
    const originalItems = Array.from(
        gallery.querySelectorAll(".gallery-item")
    );

    const visibleItems = 4;
    let currentIndex = 0;
    let autoScrollTimer;

    /*
      Duplicate the first four items at the end. These copies allow
      the carousel to visually continue before jumping back to the start.
    */
    originalItems
        .slice(0, visibleItems)
        .forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            gallery.appendChild(clone);
        });

    function getStepSize() {
        const firstItem = gallery.querySelector(".gallery-item");

        if (!firstItem) {
            return 0;
        }

        const galleryStyles = window.getComputedStyle(gallery);
        const gap = parseFloat(galleryStyles.columnGap) || 0;

        return firstItem.getBoundingClientRect().width + gap;
    }

    function moveGallery() {
        currentIndex++;

        gallery.scrollTo({
            left: currentIndex * getStepSize(),
            behavior: "smooth"
        });

        /*
          Once the carousel reaches the cloned items, wait for the
          animation to finish and silently return to the beginning.
        */
        if (currentIndex >= originalItems.length) {
            window.setTimeout(() => {
                gallery.style.scrollBehavior = "auto";
                currentIndex = 0;
                gallery.scrollLeft = 0;

                requestAnimationFrame(() => {
                    gallery.style.scrollBehavior = "smooth";
                });
            }, 600);
        }
    }

    function startAutoScroll() {
        stopAutoScroll();

        autoScrollTimer = window.setInterval(
            moveGallery,
            1500
        );
    }

    function stopAutoScroll() {
        window.clearInterval(autoScrollTimer);
    }

    startAutoScroll();

    /*
      Pause while the visitor is interacting with the gallery.
    */
    gallery.addEventListener("mouseenter", stopAutoScroll);
    gallery.addEventListener("mouseleave", startAutoScroll);
    gallery.addEventListener("touchstart", stopAutoScroll, {
        passive: true
    });
    gallery.addEventListener("touchend", startAutoScroll);

    /*
      Keep alignment correct if the browser window changes size.
    */
    window.addEventListener("resize", () => {
        gallery.style.scrollBehavior = "auto";
        gallery.scrollLeft = currentIndex * getStepSize();

        requestAnimationFrame(() => {
            gallery.style.scrollBehavior = "smooth";
        });
    });
}