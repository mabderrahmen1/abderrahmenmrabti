# Abderrahmen Mrabti — Portfolio

My personal portfolio website.

**Live site:** [amrabti.com](https://amrabti.com)

## Features

- **Sections:** About, Resume, Projects, Blog
- **Bilingual:** English / French toggle
- **Project cards:** auto-scrolling slider with modal detail view (GitHub + live demo links)
- **No build step** — plain HTML, CSS, and vanilla JavaScript

## Structure

```
index.html      # markup and layout
style.css       # all styles
script.js       # content data, rendering logic, interactions
img/            # project and profile images
```

## Running locally

Just open `index.html` in a browser — no server or dependencies required.

## Adding a project

In `script.js`, add an entry to both `en.projects.items` and `fr.projects.items`:

```js
{
    title: "Project Name",
    desc: "Short description.",
    img: "img/yourimage.png",
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/...",   // optional
    live: "https://yoursite.com/"       // optional
}
```
