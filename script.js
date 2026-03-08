const data = {
    en: {
        nav: {
            about: "ABOUT",
            resume: "RESUME",
            projects: "PROJECTS",
            blog: "BLOG"
        },
        about: {
            occupation: "Software Developer | Web & Backend",
            contactBtn: "Let's Build Something",
            text: `
                <p>Hi, I’m Abderrahmen, a software developer focused on building high-quality, maintainable software. I also have strong skills in web development and enjoy creating efficient and well-structured applications.</p>
                <p>Outside of coding, I enjoy sleight of hand and card magic tricks, playing chess, and writing and reading fiction. I love creative hobbies that challenge the mind and spark curiosity.</p>
                <p>I enjoy connecting with fellow developers, designers, or anyone passionate about technology. Feel free to reach out if you’d like to collaborate, share ideas, or discuss interesting projects.</p>
            `
        },
        resume: {
            title: "Resume",
            eduTitle: "Education",
            expTitle: "Experience",
            skillsTitle: "Skills",
            edu: [
                { title: "Software Engineering Student", date: "2022 - Present", desc: "Focusing on advanced algorithms, software architecture, and full-stack development." }
            ],
            exp: [
                { title: "Freelance Developer", date: "2023 - Present", desc: "Developing custom web solutions and automation scripts for various clients." }
            ],
            skillsTitle: "Skills"
        },
        projects: {
            title: "Selected Projects",
            items: [
                { title: "Mycuisine WebSite", desc: "Website to manage and share recipes, with user roles, translation and adding recipes.", img: "img/mycuisine.png", tech: ["PHP", "MySQL", "HTML", "Javascript"], github: "https://github.com/mabderrahmen1/MyCuisine-Site-Web" },
                { title: "Loyalty Cards Manager", desc: "Saves loyalty cards so you don't have to physically carry them.", img: "img/cardsImg.png", tech: ["HTML", "PHP", "CSS", "Javascript"], github: "https://github.com/mabderrahmen1/Loyalty-Cards-Manager" },
                { title: "FureFeux Game", desc: "A top Down 2D game of a fireman escaping a maze with flames growing stronger!", img: "img/fureFeuxImg.png", tech: ["Java"], github: "https://github.com/mabderrahmen1/FureFeux" },
                { title: "3d Powerlines Terrain", desc: "A 3D visualization project built with Processing, featuring textured terrain, electrical pylons, and dynamic power lines.", img: "img/3dPowerline.jpg", tech: ["Processing", "GLSL"], github: "https://github.com/mabderrahmen1/3D-Terrain-Powerlines" },
                { title: "Tree Of Life", desc: "An interactive interface that allows users to explore a tree of life.", img: "img/Treeoflife.png", tech: ["C#", ".Net", "Javascript"], github: "https://github.com/mabderrahmen1/Tree-Of-Life" },
                { title: "Termite Simulation", desc: "Simulation of four termite colonies competing to collect the most sticks in a dynamic environment.", img: "img/genericProject.jpg", tech: ["C++", "MakeFile"], github: "https://github.com/mabderrahmen1/Termite-Simulation" },
                { title: "Rock Paper Scissors", desc: "Fun mobile game of Rock, Paper, Scissors with intuitive controls.", img: "img/genericProject.jpg", tech: ["Dart", "Flutter"], github: "https://github.com/mabderrahmen1/Rock-Paper-Scissors-Flutter" }
            ]
        },
        blog: {
            title: "Insights & Stories"
        }
    },
    fr: {
        nav: {
            about: "À PROPOS",
            resume: "PARCOURS",
            projects: "PROJETS",
            blog: "BLOG"
        },
        about: {
            occupation: "Développeur Logiciel | Web & Backend",
            contactBtn: "Travaillons Ensemble",
            text: `
                <p>Bonjour, je suis Abderrahmen, un développeur de logiciels axé sur la construction de logiciels de haute qualité et maintenables. J’ai également de solides compétences en développement web et j’aime créer des applications efficaces et bien structurées.</p>
                <p>En dehors du codage, j’apprécie les tours de magie à la main et aux cartes, jouer aux échecs, écrire et lire des romans. J’aime les loisirs créatifs qui défient l’esprit et suscitent la curiosité.</p>
                <p>J’aime me connecter avec d’autres développeurs, designers ou quiconque passionné par la technologie. N’hésitez pas à me contacter si vous souhaitez collaborer, partager des idées ou discuter de projets intéressants.</p>
            `
        },
        resume: {
            title: "Parcours",
            eduTitle: "Éducation",
            expTitle: "Expérience",
            skillsTitle: "Compétences",
            edu: [
                { title: "Étudiant en Génie Logiciel", date: "2022 - Présent", desc: "Spécialisation en algorithmes avancés, architecture logicielle et développement full-stack." }
            ],
            exp: [
                { title: "Développeur Freelance", date: "2023 - Présent", desc: "Développement de solutions web personnalisées et de scripts d'automatisation." }
            ],
            skillsTitle: "Compétences"
        },
        projects: {
            title: "Projets Sélectionnés",
            items: [
                { title: "Site Web Mycuisine", desc: "Site web pour gérer et partager des recettes, avec rôles utilisateurs, traduction et ajout de recettes.", img: "img/mycuisine.png", tech: ["PHP", "MySQL", "HTML", "Javascript"], github: "https://github.com/mabderrahmen1/MyCuisine-Site-Web" },
                { title: "Gestionnaire de cartes fidélité", desc: "Enregistre les cartes de fidélité pour ne pas les avoir à porter physiquement.", img: "img/cardsImg.png", tech: ["HTML", "PHP", "CSS", "Javascript"], github: "https://github.com/mabderrahmen1/Loyalty-Cards-Manager" },
                { title: "Jeu FureFeux", desc: "Jeu 2D en vue du dessus d’un pompier s’échappant d’un labyrinthe avec des flammes de plus en plus fortes !", img: "img/fureFeuxImg.png", tech: ["Java"], github: "https://github.com/mabderrahmen1/FureFeux" },
                { title: "Terrain 3D des Lignes Électriques", desc: "Projet de visualisation 3D construit avec Processing, comprenant un terrain texturé, des pylônes électriques et des lignes dynamiques.", img: "img/3dPowerline.jpg", tech: ["Processing", "GLSL"], github: "https://github.com/mabderrahmen1/3D-Terrain-Powerlines" },
                { title: "Arbre de Vie", desc: "Interface interactive permettant aux utilisateurs d’explorer un arbre de vie.", img: "img/Treeoflife.png", tech: ["C#", ".Net", "Javascript"], github: "https://github.com/mabderrahmen1/Tree-Of-Life" },
                { title: "Simulation de Termites", desc: "Simulation de quatre colonies de termites compétissant pour collecter le plus de brindilles dans un environnement dynamique.", img: "img/genericProject.jpg", tech: ["C++", "MakeFile"], github: "https://github.com/mabderrahmen1/Termite-Simulation" },
                { title: "Pierre Feuille Ciseaux", desc: "Jeu mobile amusant de Pierre, Feuille, Ciseaux avec des commandes intuitives.", img: "img/genericProject.jpg", tech: ["Dart", "Flutter"], github: "https://github.com/mabderrahmen1/Rock-Paper-Scissors-Flutter" }
            ]
        },
        blog: {
            title: "Réflexions & Histoires"
        }
    }
};

const fullBlogs = [
    { 
        id: 0,
        title: "My personal experience installing and using Arch Linux (dual boot with Windows 11)",
        date: "06-01-2026",
        author: "Mrabti Abderrahmen",
        preview: "I decided to install Arch Linux to understand my system instead of just using it. Here’s what I learned from the experience.",
        content: `
            <h2>Why did I change OS and why choose Arch Linux?</h2>
            <p>Arch is an open-source Linux distribution known for its lightweight, minimalist design and high level of customization. It is often considered one of the more advanced Linux distributions, primarily targeted at users who are comfortable working with the terminal. Arch follows a rolling-release model, meaning it provides continuous updates and access to the latest software, unlike fixed-release operating systems such as Windows or macOS, which receive major updates only periodically.</p>
            <p>Privacy was the most important factor for me. I wanted full control over my laptop and my data, especially when it comes to storing important files. Using an operating system that does not provide full transparency or control made me uncomfortable, particularly given the amount of background services and data collection present in proprietary systems. In contrast, most Linux distributions are open source, meaning their code can be viewed and modified, which contributes to better transparency and security.</p>
            <p>Despite valuing privacy, I did not want to completely abandon Windows. I chose to keep it alongside Linux for other use cases such as gaming and general entertainment. Additionally, switching fully to Linux felt like a significant change, as it required learning new tools and software.</p>
            <h2>My experience installing Arch</h2>
            <p>Arch Linux is very well documented, which made the installation process relatively straightforward. The most challenging part was disk partitioning. This was my first time working with root privileges and manually partitioning a disk for an operating system installation, including allocating space for user data and system partitions such as the EFI partition.</p>
            <p>Despite this being a new experience, the partitioning process went smoothly. I then proceeded with the installation using the archinstall script, which provides a terminal-based interface to guide the configuration process, including setting up drivers, languages, packages, and user accounts. Once the installation was complete, the system booted correctly, and the graphical interface was fully functional.</p>
            <h2>What problems did I encounter?</h2>
            <p>The first problem was a configuration mistake during installation. I mistyped the root password and only realized it when I tried to execute commands requiring administrative privileges. Although this initially seemed serious, the solution was simple: rebooting using the Arch installation USB and resetting the password.</p>
            <p>The second issue was related to graphics drivers. When I first logged into the system, the interface felt choppy and unresponsive. I checked whether the correct drivers were installed and verified which graphics card was being used. After switching to the appropriate driver, the issue was resolved.</p>
            <p>The third and most difficult problem was not related to Arch itself, but to Windows. Windows initially appeared to work normally, but after some time, applications—particularly games—started crashing. Some software crashed immediately, while others failed after running for a while. My first instinct was to suspect the dual-boot setup, although the symptoms resembled a memory-related issue.</p>
            <p>I tried several solutions, including rebooting, re-enabling Secure Boot, updating drivers, and disabling startup applications, but nothing worked. After extensive research, I discovered that the issue was caused by Windows virtual memory being set to zero. The Windows pagefile configuration had likely been reset or not restored properly during disk partitioning, which caused applications to crash despite having sufficient physical RAM.</p>
            <h2>Conclusion</h2>
            <p>In conclusion, Arch Linux is an impressive distribution that offers extensive customization and a high level of control and privacy. Having the ability to switch between Windows and Linux provides flexibility, allowing me to separate different workflows and software use cases.</p>
        `
    },
    {
        id: 1,
        title: "How writing helped me become a better developer",
        date: "20-01-2026",
        author: "Mrabti Abderrahmen",
        preview: "I started writing to capture ideas. What I didn’t expect was how deeply it would improve my thinking and code structure.",
        content: `
            <h2>Intro — Why I Started Writing</h2>
            <p>I have always had an interest in reading fiction novels. These stories explore deep ideas, which naturally pushed me to reflect more on my own thinking. At the same time, I often came up with project ideas or solutions to programming problems, only to forget them later. This eventually led me to start writing.</p>
            <h2>The Problem — My Thoughts Before Writing</h2>
            <p>Before I started writing regularly, my thoughts felt impulsive and difficult to manage. Ideas would appear suddenly, pull my full attention, and cause time to pass without me even noticing. Focusing on a single idea became difficult, and explaining them clearly was a real challenge.</p>
            <h2>Discovery — What Writing Changed</h2>
            <p>Writing helped me understand my ideas more clearly, which naturally led to better planning. Over time, I noticed a direct impact on my development skills: my code became more structured, cleaner, and easier to reason about. Naming improved, documentation became more natural, and debugging felt far less chaotic.</p>
            <p>Before opening my IDE, I now take time to write what I want to build in plain language. I describe the goal, list the required features, and break the system into smaller components. This process gives me a clear vision of the structure before any code is written.</p>
            <h2>Writing ≠ Being an Author</h2>
            <p>It is important to clarify the difference. Being an author implies publishing work for storytelling. Writing, however, is simply a tool for thinking. Developers write to clarify ideas, document systems, and reason about problems.</p>
            <h2>Why Writing Is Underrated</h2>
            <p>Writing is one of the most underrated skills in software engineering. It helps developers slow down their thinking, organize complex ideas, improve planning, and ultimately produce higher quality code.</p>
        `
    },
    {
        id: 2,
        title: "Hardening Arch Linux for Modern Privacy",
        date: "20-01-2026",
        author: "Mrabti Abderrahmen",
        preview: "An exploration of modern digital hardening on Arch Linux to determine if anonymity is still viable.",
        content: `
            <h2>The Ideal Starting Point</h2>
            <p>I have always been a privacy advocate. Having already transitioned to Linux, I began tinkering with my network configuration to achieve true anonymity. Arch Linux was the perfect choice because it allows me to strip away the noise and build a setup tailored specifically to my security needs.</p>
            <h2>Network Configuration</h2>
            <p>The journey began with the network stack. I implemented a setup using the WireGuard protocol and configured a strict killswitch. I configured resolved.conf to force all DNS queries to the VPN’s servers. I also made the intentional choice to disable IPv6 to reduce the attack surface. Finally, I added a configuration to randomize my MAC address on every new connection.</p>
            <h2>My Browser Setup</h2>
            <p>I opted for a two-pronged strategy. For daily activities, I use LibreWolf, a hardened fork of Firefox. For deep research, I use the Mullvad Browser, which provides a uniform fingerprint. I use Firejail to sandbox these browsers, ensuring they remain trapped in a digital cage.</p>
            <h2>Final Thoughts</h2>
            <p>Ultimately, privacy is not about preventing every single bit of data from being collected; it is about minimizing the damage and taking control of your digital footprint. By sticking to the principle that simplicity is safer than complexity, I’ve built a setup that is fast, functional, and most importantly, private.</p>
        `
    }
];

const state = {
    currentSection: 'about',
    lang: 'en',
    scrollPos: { projects: 0, blog: 0 },
    isPaused: { projects: false, blog: false }
};

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.content-section');
const langBtn = document.getElementById('lang-btn');
const overlay = document.getElementById('overlay');
const overlayBody = document.getElementById('overlay-body');
const closeOverlay = document.querySelector('.close-overlay');

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(true);
    setupEventListeners();
    startAutoScroll();
});

function setupEventListeners() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-section');
            switchSection(target);
        });
    });

    langBtn.addEventListener('click', () => {
        const translatable = [
            ...document.querySelectorAll('.nav-links a'),
            document.getElementById('about-occupation'),
            document.getElementById('contact-btn'),
            document.getElementById('about-text'),
            document.getElementById('resume-title'),
            document.getElementById('projects-title'),
            document.getElementById('blog-title'),
            ...document.querySelectorAll('.resume-col h3'),
            ...document.querySelectorAll('.resume-item'),
            ...document.querySelectorAll('.project-info'),
            ...document.querySelectorAll('.blog-card h3')
        ];

        translatable.forEach(el => el && el.classList.add('text-fade'));
        
        setTimeout(() => {
            state.lang = state.lang === 'en' ? 'fr' : 'en';
            langBtn.textContent = state.lang === 'en' ? 'FR' : 'EN';
            updateLanguage();
            setTimeout(() => {
                translatable.forEach(el => el && el.classList.remove('text-fade'));
            }, 50);
        }, 200);
    });

    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navigation Buttons for Projects
    const projectPrev = document.getElementById('project-prev');
    const projectNext = document.getElementById('project-next');
    const projectSlider = document.querySelector('.projects-slider');
    const projectProgress = document.getElementById('project-progress');

    if (projectSlider) {
        projectPrev?.addEventListener('click', () => {
            const cardWidth = projectSlider.querySelector('.project-card')?.offsetWidth || 350;
            projectSlider.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
            state.isPaused.projects = true;
            setTimeout(() => state.isPaused.projects = false, 5000); // Resume auto-scroll after 5s
        });

        projectNext?.addEventListener('click', () => {
            const cardWidth = projectSlider.querySelector('.project-card')?.offsetWidth || 350;
            projectSlider.scrollBy({ left: (cardWidth + 32), behavior: 'smooth' });
            state.isPaused.projects = true;
            setTimeout(() => state.isPaused.projects = false, 5000);
        });

        projectSlider.addEventListener('scroll', () => {
            const maxScroll = projectSlider.scrollWidth - projectSlider.clientWidth;
            const progress = (projectSlider.scrollLeft / maxScroll) * 100;
            if (projectProgress) projectProgress.style.width = `${progress}%`;
        });

        projectSlider.addEventListener('mouseenter', () => state.isPaused.projects = true);
        projectSlider.addEventListener('mouseleave', () => state.isPaused.projects = false);
    }

    const blogSlider = document.getElementById('blog-container');
    if (blogSlider) {
        blogSlider.addEventListener('mouseenter', () => state.isPaused.blog = true);
        blogSlider.addEventListener('mouseleave', () => state.isPaused.blog = false);
    }
}

function switchSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));
    const targetSection = document.getElementById(id);
    const targetLink = document.querySelector(`[data-section="${id}"]`);
    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
    
    // Update body class for background changes
    document.body.className = `no-scroll section-${id}`;
    
    state.currentSection = id;
}

function updateLanguage(initial = false) {
    const l = data[state.lang];
    document.getElementById('nav-about').textContent = l.nav.about;
    document.getElementById('nav-resume').textContent = l.nav.resume;
    document.getElementById('nav-projects').textContent = l.nav.projects;
    document.getElementById('nav-blog').textContent = l.nav.blog;
    document.getElementById('about-occupation').textContent = l.about.occupation;
    document.getElementById('contact-btn').textContent = l.about.contactBtn;
    document.getElementById('about-text').innerHTML = l.about.text;
    document.getElementById('resume-title').textContent = l.resume.title;
    document.getElementById('projects-title').textContent = l.projects.title;
    document.getElementById('blog-title').textContent = l.blog.title;

    const eduCol = document.querySelector('.resume-col:nth-child(1)');
    eduCol.innerHTML = `<h3>${l.resume.eduTitle}</h3>`;
    l.resume.edu.forEach(e => {
        const div = document.createElement('div');
        div.className = 'resume-item';
        div.innerHTML = `<div class="resume-dot"></div><h4>${e.title}</h4><p class="res-date">${e.date}</p><p>${e.desc}</p>`;
        eduCol.appendChild(div);
    });

    const expCol = document.querySelector('.resume-col:nth-child(2)');
    expCol.innerHTML = `<h3>${l.resume.expTitle}</h3>`;
    l.resume.exp.forEach(e => {
        const div = document.createElement('div');
        div.className = 'resume-item';
        div.innerHTML = `<div class="resume-dot"></div><h4>${e.title}</h4><p class="res-date">${e.date}</p><p>${e.desc}</p>`;
        expCol.appendChild(div);
    });

    const skillsCol = document.querySelector('.resume-col:nth-child(3)');
    if (skillsCol && skillsCol.querySelector('h3')) {
        skillsCol.querySelector('h3').textContent = l.resume.skillsTitle;
    }

    const projectSlider = document.querySelector('.projects-slider');
    const blogSlider = document.getElementById('blog-container');
    
    if (projectSlider) {
        projectSlider.innerHTML = '';
        [...l.projects.items, ...l.projects.items].forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            const techTags = p.tech.map(t => `<span class="skill-tag" style="font-size: 0.7rem; padding: 0.2rem 0.6rem;">${t}</span>`).join('');
            card.innerHTML = `<img src="${p.img}" alt="${p.title}" class="project-img"><div class="project-info"><h3>${p.title}</h3><p>${p.desc}</p><div class="skills-grid" style="gap: 0.4rem; margin-top: 0.5rem;">${techTags}</div></div>`;
            card.addEventListener('click', () => openProject(p));
            projectSlider.appendChild(card);
        });
    }

    if (blogSlider) {
        blogSlider.innerHTML = '';
        [...fullBlogs, ...fullBlogs].forEach(b => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `<div class="blog-date">${b.date}</div><h3>${b.title}</h3><div class="blog-preview">${b.preview}</div>`;
            card.addEventListener('click', () => openBlog(b));
            blogSlider.appendChild(card);
        });
    }
}

function startAutoScroll() {
    const projectSlider = document.querySelector('.projects-slider');
    const blogSlider = document.getElementById('blog-container');

    function animate() {
        if (projectSlider) {
            if (!state.isPaused.projects) {
                projectSlider.style.scrollSnapType = 'none';
                projectSlider.scrollLeft += 1.2; 
                
                // Reset when we've scrolled exactly one set of items
                // (scrollWidth + gap) / 2 is the start of the second set
                const resetPoint = projectSlider.scrollWidth / 2;
                if (projectSlider.scrollLeft >= resetPoint) {
                    projectSlider.scrollLeft = 0;
                }
            } else {
                projectSlider.style.scrollSnapType = 'x mandatory';
            }
        }

        if (blogSlider) {
            if (!state.isPaused.blog) {
                blogSlider.scrollLeft += 1.2;
                if (blogSlider.scrollLeft >= blogSlider.scrollWidth / 2) {
                    blogSlider.scrollLeft = 0;
                }
            }
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function openProject(p) {
    const githubBtn = p.github ? `<a href="${p.github}" target="_blank" class="cv-btn" style="margin-top: 2rem; display: inline-flex; align-items: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> View on GitHub</a>` : '';
    const techTags = p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('');
    overlayBody.innerHTML = `<h1>${p.title}</h1><img src="${p.img}" alt="${p.title}" style="width: 100%; border-radius: 8px; margin-bottom: 2rem; border: 1px solid var(--accent-color);"><p style="font-size: 1.1rem; margin-bottom: 2rem; color: var(--secondary-color);">${p.desc}</p><h3 style="color: var(--accent-color); margin-bottom: 1rem;">Technologies</h3><div class="skills-grid">${techTags}</div>${githubBtn}`;
    overlay.classList.add('active');
    overlay.querySelector('.overlay-content').scrollTop = 0;
}

function openBlog(b) {
    overlayBody.innerHTML = `<div class="blog-date" style="color: var(--accent-color); margin-bottom: 0.5rem;">${b.date}</div><h1 style="font-size: 2.5rem; line-height: 1.2; margin-bottom: 2rem; color: white;">${b.title}</h1><hr style="border: 0; border-top: 1px solid rgba(136, 146, 176, 0.2); margin: 2rem 0;"><div class="blog-full-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--secondary-color);">${b.content}</div>`;
    overlay.classList.add('active');
    overlay.querySelector('.overlay-content').scrollTop = 0;
}
