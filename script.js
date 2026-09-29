/* ============================================
   Site settings
   ============================================ */

// Link used by every "CV" link on the site (elements with a data-cv attribute).
// cv.pdf is compiled from the Overleaf CV by .github/workflows/build-cv.yml, which also
// updates the ?v= tag below to the Overleaf commit so browsers fetch each new version.
const CV_URL = "cv.pdf?v=7c78354";

document.addEventListener('DOMContentLoaded', function () {
    // CV links
    document.querySelectorAll('a[data-cv]').forEach(function (link) {
        link.href = CV_URL;
    });

    // Footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
});
