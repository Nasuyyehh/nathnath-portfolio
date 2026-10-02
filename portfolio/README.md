# Nathaniel Merilles — Personal Portfolio

A modern, minimalist black-and-white personal portfolio built with:

- HTML5
- CSS3
- Vanilla JavaScript

## Folder Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.jpg
│   ├── calm-click.png
│   ├── transit-ease.png
│   ├── 3d-asset-system.png
│   └── student-ewallet.png
└── README.md
```

## How to Add Your Real Images

Replace these placeholder files in `images/` with your own images:

- `profile.jpg`
- `calm-click.png`
- `transit-ease.png`
- `3d-asset-system.png`
- `student-ewallet.png`

Recommended:
- Profile: square or portrait image
- Projects: 16:9 screenshots/thumbnails
- Use clear, high-quality images

## How to Add Project Links

Open:

`js/script.js`

Find the `projects` array. Each project has:

```javascript
projectLink: "#",
githubLink: "#"
```

Replace `#` with your actual URL.

Example:

```javascript
projectLink: "https://your-demo-link.com",
githubLink: "https://github.com/yourusername/project"
```

If you do not have a GitHub link, leave it as `"#"` and the Source Code button stays hidden.

## How to Change Contact Information

Open `index.html` and replace:

- `your.email@example.com`
- GitHub link
- LinkedIn link
- Facebook link

## How to Run

No server or framework is required.

Simply open `index.html` in a browser.

For the best development experience, you can use VS Code with a local live-server extension, but it is optional.

## Notes

The contact form is currently a front-end demo. It does not send email by itself. You can later connect it to a backend or an email service.

The website uses a monochrome visual system and is responsive for desktop, tablet, and mobile.
