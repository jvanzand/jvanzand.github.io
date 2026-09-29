# Judah Van Zandt: research website

A static site (HTML, CSS, a little JavaScript) with no build step.

```
index.html          About: introduction, research highlights, education
research.html       Research summaries, one section per topic (#architectures,
                    #true-masses, #stellar-mass), each with papers and a figure
publications.html   Selected publications with ADS / arXiv / DOI links
style.css           All styling; colors and fonts are set as variables at the top
script.js           CV link (CV_URL), footer year, current-page highlight in the nav
cv.pdf              Compiled CV (built from the Overleaf CV project)
images/             Headshot; research figures in images/research/
.github/workflows/  build-cv.yml: rebuilds cv.pdf from Overleaf daily
```

## Common edits

- **CV:** edit it in Overleaf. Once the site is on GitHub Pages, the
  "Build CV from Overleaf" Action recompiles `cv.pdf` daily (or on demand from the
  Actions tab) when the Overleaf project has changed. It needs a repository secret
  `OVERLEAF_TOKEN` (an Overleaf Git token). Until then, replace `cv.pdf` by hand.
- **Research figures:** replace the PNG in `images/research/` (keep the filename,
  or update the `<img>` in `research.html`) and edit its `<figcaption>`. Current
  figures come from the papers' arXiv source files, resized to about 1000 px wide.
- **New paper:** copy an `<li>` in `publications.html`. Numbering is automatic.
  Give it an `id` so other pages can link to it (`publications.html#pub-…`).
- **Linking to a research topic:** use `research.html#architectures`,
  `#true-masses`, or `#stellar-mass`.

## Preview locally

```
python3 -m http.server 8765
```

Then open http://localhost:8765.
