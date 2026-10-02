
const projects = [
    {
        title: "Calm Click",
        description: "Mental-health awareness Android application designed to help users reflect on emotions and discover simple wellness activities.",
        image: "images/calm-click.png",
        technologies: ["Java", "Android Studio", "Material Design"],
        category: "Mobile Application",
        projectLink: "#",
        githubLink: "#"
    },
    {
        title: "3D Asset Library",
        description: "Web-based system concept for managing 3D assets, versions, reviews, projects, and render jobs in a production workflow.",
        image: "images/3d-asset-system.png",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        category: "Web System",
        projectLink: "#",
        githubLink: "#"
    },
    {
        title: "TransitEase",
        description: "Commuter-focused web project designed to provide transportation information and nearby transit options.",
        image: "images/transit-ease.png",
        technologies: ["HTML", "CSS", "JavaScript", "Leaflet"],
        category: "Web Development",
        projectLink: "https://nasuyyehh.github.io/WebSys-Final-Project-TRANSITEASE-/",
        githubLink: "#"
    },
    {
        title: "Student E-Wallet",
        description: "Java desktop application for managing student wallet balances and transaction records.",
        image: "images/student-ewallet.png",
        technologies: ["Java", "OOP", "Swing"],
        category: "Desktop Application",
        projectLink: "#",
        githubLink: "#"
    }
];

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects() {
    projectsGrid.innerHTML = projects.map((project, index) => `
        <article class="project-card reveal">
            <div class="project-image">
                <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
                <img src="${project.image}" alt="${project.title} preview"
                     onerror="this.src='images/project-placeholder.svg'">
            </div>
            <div class="project-body">
                <span class="project-category">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-list">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.projectLink}" target="_blank" rel="noopener">View Project ↗</a>
                    ${project.githubLink !== "#" ? `<a href="${project.githubLink}" target="_blank" rel="noopener">Source Code ↗</a>` : ""}
                </div>
            </div>
        </article>
    `).join("");
}

renderProjects();

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Contact form demo
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks! This demo form is ready to connect to your email service or backend.";
    contactForm.reset();
});
