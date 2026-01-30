const menuLinks = document.querySelectorAll('.menu-link');
const sections = ['about', 'projects', 'blog'];
let currentIndex=0;

/* set the layout of the page depending on the current section */

function setLayout(section){
  const contentSections= ['projects','blog'];

  if(contentSections.includes(section)){
    document.body.classList.add('layout-content');
    document.body.classList.remove('layout-compact');

  }
  else{
    document.body.classList.add('layout-compact');
    document.body.classList.remove('layout-content');
  }

}

/* New Function */
function animateLayout(section) {
  const body = document.body;
  const businessCard = document.querySelector('.business-card');
  const rightZone = document.querySelector('.right-zone');

  const contentSections = ['projects', 'blog'];

  if (contentSections.includes(section)) {
    // expand content zone, shrink card
    businessCard.style.flex = '0.8';
    rightZone.style.flex = '4';
  } else {
    // reset layout for about
    businessCard.style.flex = '1';
    rightZone.style.flex = '1';
  }
}

function showSection(section){
  // ensure layout class is applied first (so CSS display rules take effect)
  setLayout(section);

  // now animate layout (only does anything when right-zone is present/visible)
  animateLayout(section);

  // switch active section
  document.querySelectorAll('.page-content > div')
    .forEach(div => div.classList.remove('active'));

  const target = document.querySelector(`.page-content > .${section}`);
  if (!target) return;

  target.classList.add('active');
  currentIndex = sections.indexOf(section);

  // reset scroll into top of page-content (optional UX)
  const pc = document.querySelector('.page-content');
  if (pc) pc.scrollTop = 0;
}


/* navigate threw menu */
menuLinks.forEach(link=> {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.target);
  }) 
});

/* navigate with arrows */

document.querySelector('.navi-arrow-left')
.addEventListener('click', () => {
  const prev = (currentIndex-1 + sections.length) % sections.length ;
  showSection(sections[prev]);
});

document.querySelector('.navi-arrow-right')
.addEventListener('click', () => {
  const next = (currentIndex+1 ) % sections.length ;
  showSection(sections[next]);
});

document.addEventListener('DOMContentLoaded', () => {
  showSection('about');
});


// -------------------------- BLOG LIST -------------------------- 
const blogs = [

    { // My personal experience installing and using Arch Linux 
    id:0,
    title:"My personal experience installing and using Arch Linux (dual boot with Windows 11)",
    date:"06-01-2026",
    author:"Mrabti Abderrahmen",
    preview:"<p>I decided to install Arch Linux to understand my system instead of just using it. Here’s what I learned from the experience.</p>",
    content:`<h2>Why did I change OS and why choose Arch Linux?</h2>
    <p>Arch is an open-source Linux distribution known for its lightweight, minimalist design and high level of customization. It is often considered one of the more advanced Linux distributions, primarily targeted at users who are comfortable working with the terminal. Arch follows a rolling-release model, meaning it provides continuous updates and access to the latest software, unlike fixed-release operating systems such as Windows or macOS, which receive major updates only periodically.</p>
    <h2>Why did I change OS and why choose Arch Linux?</h2>
    <p>For a long time, I wanted to install Linux on my personal device. I had heard a lot about it, and my previous experiences using Linux were positive. The main reasons that motivated me to switch were privacy and control over my system.</p>
    <p>Privacy was the most important factor for me. I wanted full control over my laptop and my data, especially when it comes to storing important files. Using an operating system that does not provide full transparency or control made me uncomfortable, particularly given the amount of background services and data collection present in proprietary systems. In contrast, most Linux distributions are open source, meaning their code can be viewed and modified, which contributes to better transparency and security.</p>
    <p>Despite valuing privacy, I did not want to completely abandon Windows. I chose to keep it alongside Linux for other use cases such as gaming and general entertainment. Additionally, switching fully to Linux felt like a significant change, as it required learning new tools and software.</p>
    <p>When choosing a Linux distribution, I was initially overwhelmed by the large number of available options, each offering different features and philosophies. I had previously used Linux Mint, but I wanted something more lightweight, more customizable, and closer to the system itself. After researching several distributions, I narrowed my choice down to Fedora and Arch. Ultimately, I chose Arch because of its rolling-release model and the level of customization it offers. Since I was already comfortable with Bash and the terminal, I was interested in taking on the challenge of installing and using Arch.</p>
    <h2>My experience installing Arch</h2>
    <p>Arch Linux is very well documented, which made the installation process relatively straightforward. The most challenging part was disk partitioning. This was my first time working with root privileges and manually partitioning a disk for an operating system installation, including allocating space for user data and system partitions such as the EFI partition.</p>
    <p>Despite this being a new experience, the partitioning process went smoothly. I then proceeded with the installation using the archinstall script, which provides a terminal-based interface to guide the configuration process, including setting up drivers, languages, packages, and user accounts. Once the installation was complete, the system booted correctly, and the graphical interface was fully functional.</p>
    <h2>What problems did I encounter?</h2>
    <p>During this project, I encountered three main issues, ranging from simple to more complex.</p>
    <p>The first problem was a configuration mistake during installation. I mistyped the root password and only realized it when I tried to execute commands requiring administrative privileges. Although this initially seemed serious, the solution was simple: rebooting using the Arch installation USB and resetting the password.</p>
    <p>The second issue was related to graphics drivers. When I first logged into the system, the interface felt choppy and unresponsive. I checked whether the correct drivers were installed and verified which graphics card was being used. After switching to the appropriate driver, the issue was resolved.</p>
    <p>The third and most difficult problem was not related to Arch itself, but to Windows. Windows initially appeared to work normally, but after some time, applications—particularly games—started crashing. Some software crashed immediately, while others failed after running for a while. My first instinct was to suspect the dual-boot setup, although the symptoms resembled a memory-related issue.</p>
    <p>I tried several solutions, including rebooting, re-enabling Secure Boot, updating drivers, and disabling startup applications, but nothing worked. After extensive research, I discovered that the issue was caused by Windows virtual memory being set to zero. The Windows pagefile configuration had likely been reset or not restored properly during disk partitioning, which caused applications to crash despite having sufficient physical RAM.</p>
    <h2>What I learned</h2>
    <p>Throughout this experience, I learned a great deal about operating systems, system configuration, and troubleshooting. I gained hands-on experience installing an operating system from scratch, manually partitioning disks, and working responsibly with root privileges. I also spent a significant amount of time using the Linux terminal, which helped me become more comfortable with Bash and command-line tools.</p>
    <p>Most importantly, I learned the importance of considering all possible causes when debugging a problem, rather than immediately assuming it is directly related to recent changes, such as the dual-boot setup.</p>
    <h2>Conclusion</h2>
    <p>In conclusion, Arch Linux is an impressive distribution that offers extensive customization and a high level of control and privacy. Having the ability to switch between Windows and Linux provides flexibility, allowing me to separate different workflows and software use cases.</p>
    <p>This experience allowed me to dive deeply into the Linux ecosystem, learn a great deal about operating systems, and further develop my troubleshooting and problem-solving skills. I strongly recommend that anyone interested in Linux choose a distribution that appeals to them and try it out. Not only will they discover a lightweight and responsive operating system, but they will also learn valuable technical skills along the way.</p>`
    },
    { // How writing helped me become a better developer
    id:1,
    title:"How writing helped me become a better developer",
    date:"20-01-2026",
    author:"Mrabti Abderrahmen",
    preview:"<p>I started writing to capture ideas and thoughts I kept forgetting. What I didn’t expect was how deeply it would improve my thinking, my code structure, and even the way I communicate as a developer.</p>",
    content:`<h2>Intro — Why I Started Writing</h2>
    <p>I have always had an interest in reading fiction novels, from Brave New World by Aldous Huxley and 1984 by George Orwell, to more recently Reverend Insanity by Gu Zhen Ren. These stories explore deep ideas about society, control, ambition, and human nature, which naturally pushed me to reflect more on my own thinking.</p>
    <p>At the same time, I often came up with project ideas or solutions to programming problems, only to forget them later before ever implementing them. I also strongly believe that sharing personal experiences can benefit others and help people understand one another better.</p>
    <p>All of these reasons eventually led me to start writing: fiction, journaling, daily notes, and later blog posts that I now share on my website.</p>
    <h2>The Problem — My Thoughts Before Writing</h2>
    <p>Before I started writing regularly, my thoughts felt impulsive and difficult to manage. Ideas would appear suddenly, pull my full attention, and cause time to pass without me even noticing.</p>
    <p>These thoughts were fast, chaotic, and constantly replaced by new ones. Focusing on a single idea became difficult, and although my thoughts were often very detailed, explaining them clearly was a real challenge. This made development harder, because having a complex idea in your head does not mean you understand it well enough to build it.</p>
    <p>After noticing how much this affected my focus and productivity, I started looking for a way to organize my thinking. That is when I discovered that writing itself was the solution.</p>
    <h2>Discovery — What Writing Changed</h2>
    <p>At first, writing felt like uncharted territory. I did not know how or where to begin. But unlike coding, writing has no strict rules, whatever comes to mind can be written down freely and refined later.</p>
    <p>This simple habit helped me understand my ideas more clearly, which naturally led to better planning. Over time, I noticed a direct impact on my development skills, my code became more structured, cleaner, and easier to reason about. Naming improved, documentation became more natural, and debugging felt far less chaotic.</p>
    <p>These elements are deeply connected. When your thoughts are organized, your architecture improves. When your architecture is clear, debugging becomes easier. Writing strengthened the fundamentals that separate a good developer from a mediocre one.</p>
    <p>I also became more comfortable expressing ideas in conversations. Writing creates a bridge between people, especially developers, by turning vague thoughts into clear communication.</p>
    <p>For example, Before opening my IDE, I now take time to write what I want to build in plain language. I describe the goal, list the required features, and break the system into smaller components.</p>
    <p>From there, I often create a simple diagram based on what I wrote. This process gives me a clear vision of the structure before any code is written. It helps avoid redundancy, poor design decisions, circular reasoning and problems that are much harder to fix later in development.</p>
    <h2>Writing ≠ Being an Author</h2>
    <p>It is important to clarify the difference between writing and being an author.</p>
    <p>Being an author implies publishing work for storytelling or artistic purposes. Writing, however, is simply a tool for thinking. You do not need to be creative, talented, or publish anything publicly.</p>
    <p>Developers write to clarify ideas, document systems, reason about problems, and communicate effectively. In this sense, writing is not separate from engineering, it supports it.</p>
    <h2>Why Writing Is Underrated in Software Engineering</h2>
    <p>Writing is one of the most underrated skills in software engineering. It helps developers slow down their thinking, organize complex ideas, improve planning, and ultimately produce higher quality code.</p>
    <p>More than that, writing builds discipline, clarity, and communication. These skills matter just as much as technical knowledge. Whether through journaling, note taking, or blogging, writing allows developers to better understand both their systems and themselves.</p>`
    }
    ,
    { // setting privacy network on arch
    id:2,
    title:"Hardening Arch Linux for Modern Privacy and Whether the Effort is Truly Worth It",
    date:"20-01-2026",
    author:"Mrabti Abderrahmen",
    preview:"<p>An exploration of modern digital hardening on Arch Linux to determine if the pursuit of anonymity is still viable and worth the trade offs in today's landscape.</p>",
    content:`<h2>The Ideal Starting Point</h2>
    <p>I have always been a privacy advocate, but I know how difficult it is to maintain a private life in the modern digital age. Recently, I decided to take this challenge head-on and attempt to become an online "ghost." Having already transitioned to Linux, which inherently offers more privacy than Windows or macOS. I began tinkering with my network configuration to achieve true anonymity. Arch Linux was the perfect choice for this journey because it is built to be fully customizable, allowing me to strip away the noise and build a setup tailored specifically to my security needs.</p>
    <p>My goal was to achieve a balance between privacy and anonymity. While these terms are often used interchangeably, they are distinct. Privacy is about controlling who has access to your personal information, whereas anonymity is about hiding your identity so completely that your actions cannot be traced back to you. Both are essential pillars of personal security and freedom.</p>
    <p>When you start down this rabbit hole, the optimal solutions are usually Tails or QubesOS. Tails is a fascinating amnesic operating system that boots from a USB and runs entirely in RAM, leaving zero trace on your hard drive once shut down. However, because it routes everything through Tor, it is frustratingly slow for a daily developer workflow. QubesOS, on the other hand, is the gold standard of security, using deep isolation to put every task into its own virtual "qube." It was even praised by Edward Snowden, but it comes with heavy trade offs. The hardware requirements are massive, and because it runs multiple virtual machines simultaneously, it lacks the lightweight speed that makes Arch Linux so appealing. I wanted the security of a fortress, but the speed of a race car.</p>
    <h2>Network Configuration</h2>
    <p>The journey began with the network stack. A VPN is the cornerstone of privacy, so I implemented a setup using the WireGuard protocol for its modern encryption and high-speed performance. To ensure no data ever leaked during a connection drop, I configured a strict killswitch. Once the tunnel was secure, I turned my attention to the more subtle leaks. I configured resolved.conf to force all DNS queries to the VPN’s servers with a secure fallback, ensuring my ISP remains blind to the websites I visit. I also made the intentional choice to disable IPv6. While it is the newer standard, having a secondary networking stack active simply adds to the attack surface, and many VPNs fail to tunnel IPv6 correctly, leading to accidental identity leaks. Finally, I added a configuration to NetworkManager to randomize my MAC address on every new connection. This ensures that even on my home network, my hardware appears as a completely different device every time I log in.</p>
    <h2>My Browser Setup</h2>
    <p>The browser is often the weakest link in any privacy setup, so I opted for a two pronged strategy. For daily activities that require logins, I use LibreWolf, a community driven, hardened fork of Firefox. It’s excellent because it clears all cookies and history on closure by default. To make it usable for work, I use Multi Account Containers to isolate Google services, preventing them from seeing my activity in other tabs. For deep research where I need to blend into a crowd, I use the Mullvad Browser. Developed in collaboration with the Tor Project, it provides a uniform fingerprint that makes me look like just another face in the crowd. To wrap it all together, I use Firejail to sandbox these browsers. This ensures that even if a malicious site attempts to exploit the browser, it remains trapped in a digital cage, unable to scrape sensitive data from the rest of my system.</p>
    <h2>Lessons and Troubleshooting</h2>
    <p>Of course, this challenge wasn't without its headaches. I spent a significant amount of time studying the "man" pages for NetworkManager to understand the underlying logic of my configurations and consulting various online communities to understand the underlying logic of the configurations. I ran into issues where my DNS setup caused a massive lag during the initial loading of webpages, and I frequently had to verify that I wasn't experiencing DNS leaks. One experiment I eventually abandoned was setting up nested proxies for Mullvad. My original idea was to have different IP addresses for LibreWolf and the Mullvad Browser simultaneously. However, after careful thought, I realized this added too much complexity. In the world of security, complexity is the enemy. The more "unique" you make your routing, the easier it becomes to fingerprint you, and the higher the chance of a misconfiguration that breaks your encryption entirely.</p>
    <h2>Final Thoughts</h2>
    <p>Ultimately, privacy is not about preventing every single bit of data from being collected; it is about minimizing the damage and taking control of your digital footprint. Securing your network makes a tangible difference, even against large scale corporate data collection. The trick is to maximize your anonymity without making your life so difficult that you can't get work done. It isn't worth using Tails just to listen to music or edit a text file. By sticking to the principle that simplicity is safer than complexity, I’ve built a setup that is fast, functional, and most importantly private.</p>`

  }

]

// -------------------------- END OF BLOG LIST -------------------------- 

const blogList = document.querySelector('.blog-list');
const blogContent = document.querySelector('.blog-content');
const blogFullContent = document.querySelector('.blog-full-content');
const backButton = document.querySelector('.back-to-list');

blogs.forEach(blog => {
  const li = document.createElement('li');
  li.classList.add('blog-item');

  li.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.preview}</p>
  `;

  li.addEventListener('click', () => {
    blogList.style.display = 'none';
    blogContent.style.display = 'flex';
    blogFullContent.innerHTML =  `
    <h1>${blog.title}</h1>
    <p><strong>By:</strong> ${blog.author} | <strong>Date:</strong> ${blog.date}</p>
    ${blog.content}
  `;
  });

  blogList.appendChild(li);
});

backButton.addEventListener('click', () => {
  blogList.style.display = 'flex';
  blogContent.style.display = 'none';
  blogFullContent.innerHTML = '';
});


// -------------------------- TRADUCTION FR/EN -------------------------- 
const content = {
  en: {
    about: `
      <p>
      Hi, I’m Abderrahmen, a software developer focused on building high-quality, maintainable software. I also have strong skills in web development and enjoy creating efficient and well-structured applications. 
      </p>
      <p>
      Outside of coding, I enjoy sleight of hand and card magic tricks, playing chess, and writing and reading fiction. I love creative hobbies that challenge the mind and spark curiosity.
      </p>
      <p>
      I enjoy connecting with fellow developers, designers, or anyone passionate about technology. Feel free to reach out if you’d like to collaborate, share ideas, or discuss interesting projects.
      </p>
    `,
    projectsTitle: "PROJECTS",
    blogTitle: "BLOG",
    aboutTitle:"ABOUT",
    occupation:"Software Developper | Web & Backend"
    // add more sections if needed
  },
  fr: {
    about: `
      <p>Bonjour, je suis Abderrahmen, un développeur de logiciels axé sur la construction de logiciels de haute qualité et maintenables. J’ai également de solides compétences en développement web et j’aime créer des applications efficaces et bien structurées.</p>
      <p>En dehors du codage, j’apprécie les tours de magie à la main et aux cartes, jouer aux échecs, écrire et lire des romans. J’aime les loisirs créatifs qui défient l’esprit et suscitent la curiosité.</p>
      <p>J’aime me connecter avec d’autres développeurs, designers ou quiconque passionné par la technologie. N’hésitez pas à me contacter si vous souhaitez collaborer, partager des idées ou discuter de projets intéressants.</p>
    `,
    projectsTitle: "PROJETS",
    blogTitle: "BLOG",
    aboutTitle:"À PROPOS",
    occupation:"Développeur Logiciel | Web & Backend"
    // add more sections if needed
  }
};

const projects = {
  en: [
    {
      title: "Mycuisine WebSite",
      description: "Website to manage and share recipes, with user roles, translation and adding recipes."
    },
    {
      title: "Loyalty Cards Manager",
      description: "Saves loyalty cards so you don't have to physically carry them."
    }
    ,
    {
      title: "FureFeux Game",
      description: "A top Down 2D game of a fireman escaping a maze with flames growing stronger!"
    }
    ,
    {
      title: "3d Powerlines Terrain",
      description: "A 3D visualization project built with Processing, featuring textured terrain, electrical pylons, and dynamic power lines."
    }
    ,
    {
      title: "Tree Of Life",
      description: "An interactive interface that allows users to explore a tree of life."
    }
    ,
    {
      title: "Termite Simulation",
      description: "Simulation of four termite colonies competing to collect the most sticks in a dynamic environment."
    },
    {
      title: "Rock Paper Scissors",
      description: "Fun  mobile game of Rock, Paper, Scissors with intuitive controls."
    }
    // add more sections if needed
  ],
  fr: [
    {
      title: "Site Web Mycuisine",
      description: "Site web pour gérer et partager des recettes, avec rôles utilisateurs, traduction et ajout de recettes."
    },
    {
      title: "Gestionnaire de cartes fidélité",
      description: "Enregistre les cartes de fidélité pour ne pas les avoir à porter physiquement."
    },
    {
      title: "Jeu FureFeux",
      description: "Jeu 2D en vue du dessus d’un pompier s’échappant d’un labyrinthe avec des flammes de plus en plus fortes !"
    },
    {
      title: "Terrain 3D des Lignes Électriques",
      description: "Projet de visualisation 3D construit avec Processing, comprenant un terrain texturé, des pylônes électriques et des lignes dynamiques."
    },
    {
      title: "Arbre de Vie",
      description: "Interface interactive permettant aux utilisateurs d’explorer un arbre de vie."
    },
    {
      title: "Simulation de Termites",
      description: "Simulation de quatre colonies de termites compétissant pour collecter le plus de brindilles dans un environnement dynamique."
    },
    {
      title: "Pierre Feuille Ciseaux",
      description: "Jeu mobile amusant de Pierre, Feuille, Ciseaux avec des commandes intuitives."
    }
    // add more sections if needed
  ]
};


const cvLink = document.getElementById('cv-link');

function updateCvLink(lang) {
    if (!cvLink) return;

    if (lang === 'fr') {
        cvLink.href = 'assets/cvMrabti_AbderrahmenFr.pdf';
    } else if (lang === 'en') {
        cvLink.href = 'assets/cvMrabti_AbderrahmenEn.pdf';
    }
}




const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en'; // default

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    updateLanguage();
    updateCvLink(currentLang);
});

function updateLanguage() {

    // nav bar translate
    const navAbout = document.querySelector('.center-nav #about');
    if (navAbout) navAbout.innerHTML = content[currentLang].aboutTitle;
    const navBlog = document.querySelector('.center-nav #blog');
    if (navBlog) navBlog.innerHTML = content[currentLang].blogTitle;
    const navProject = document.querySelector('.center-nav #project');
    if (navProject) navProject.innerHTML = content[currentLang].projectsTitle;

    // About section
    const aboutSection = document.querySelector('.about .about-text');
    if (aboutSection) aboutSection.innerHTML = content[currentLang].about;
    const aboutSectionTitle = document.querySelector('.about #aboutTitle');
    if (aboutSectionTitle) aboutSectionTitle.innerHTML = content[currentLang].aboutTitle;

    // Projects section
    const projectsH2 = document.querySelector('.projects h1');
    if (projectsH2) projectsH2.textContent = content[currentLang].projectsTitle;
      // mycuisine
    const mycuisineTitle = document.querySelector('.projects #mycuisineTitle');
    if (mycuisineTitle) mycuisineTitle.innerHTML = projects[currentLang][0].title;
    const mycuisineDesc = document.querySelector('.projects #mycuisineDesc');
    if (mycuisineDesc) mycuisineDesc.innerHTML = projects[currentLang][0].description;
      // loyaly card
    const cardsTitle = document.querySelector('.projects #cardsTitle');
    if (cardsTitle) cardsTitle.innerHTML = projects[currentLang][1].title;
    const cardsDesc = document.querySelector('.projects #cardsDesc');
    if (cardsDesc) cardsDesc.innerHTML = projects[currentLang][1].description;
      // Furefeux
    const furefeuxTitle = document.querySelector('.projects #furefeuxTitle');
    if (furefeuxTitle) furefeuxTitle.innerHTML = projects[currentLang][2].title;
    const furefeuxDesc = document.querySelector('.projects #furefeuxDesc');
    if (furefeuxDesc) furefeuxDesc.innerHTML = projects[currentLang][2].description;
      // powerline 
    const powerlineTitle = document.querySelector('.projects #powerlineTitle');
    if (powerlineTitle) powerlineTitle.innerHTML = projects[currentLang][3].title;
    const powerlineDesc = document.querySelector('.projects #powerlineDesc');
    if (powerlineDesc) powerlineDesc.innerHTML = projects[currentLang][3].description;
      // Tree of life 
    const treeoflifeTitle = document.querySelector('.projects #treeOfLifeTitle');
    if (treeoflifeTitle) treeoflifeTitle.innerHTML = projects[currentLang][4].title;
    const treeOfLifeDesc = document.querySelector('.projects #treeOfLifeDesc');
    if (treeOfLifeDesc) treeOfLifeDesc.innerHTML = projects[currentLang][4].description;
      // Termite simulation
    const termiteSimTitle = document.querySelector('.projects #termiteSimTitle');
    if (termiteSimTitle) termiteSimTitle.innerHTML = projects[currentLang][5].title;
    const termiteSimDesc = document.querySelector('.projects #termiteSimDesc');
    if (termiteSimDesc) termiteSimDesc.innerHTML = projects[currentLang][5].description;
      // Rock/Paper/Scissors
    const rpsTitle = document.querySelector('.projects #rpsTitle');
    if (rpsTitle) rpsTitle.innerHTML = projects[currentLang][6].title;
    const rpsDesc = document.querySelector('.projects #rpsDesc');
    if (rpsDesc) rpsDesc.innerHTML = projects[currentLang][6].description;

    // Blog section
    const blogH1 = document.querySelector('.blog h1');
    if (blogH1) blogH1.textContent = content[currentLang].blogTitle;

    // add more sections if needed
}

