/* ============================================
   Site settings
   ============================================ */

// Link used by every "CV" link on the site (elements with a data-cv attribute).
// cv.pdf is compiled from the Overleaf CV; .github/workflows/build-cv.yml keeps it
// up to date automatically once the site is hosted on GitHub Pages.
const CV_URL = "cv.pdf";

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
