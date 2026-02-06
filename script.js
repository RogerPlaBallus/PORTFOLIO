// Hardcoded projects array
const projects = [
    {
        name: 'Clients and Sales Management',
        description: 'Manage clients and sales for a small business.',
        languages: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQLite'],
        url: 'https://github.com/RogerPlaBallus/CLIENTS-VENDES',
        image: 'images/CLIENTS-VENDES.png'
    },
    {
        name: 'Exercise Tracker',
        description: 'Track exercises and fitness progress.',
        languages: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQLite'],
        url: 'https://github.com/RogerPlaBallus/Exercise-Tracker',
        image: 'images/Exercise-Tracker.png'
    },
    {
        name: 'Weather App',
        description: 'A weather application providing current conditions and forecasts.',
        languages: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://rogerplaballus.github.io/weather-app/',
        image: 'images/weather-app.png'
    },
    {
        name: 'Morse Code Translator',
        description: 'Translate text to and from Morse code with sound output.',
        languages: ['Java'],
        url: 'https://github.com/RogerPlaBallus/MorseCodeTranslator',
        image: 'images/MorseCodeTranslator.png'
    },
    {
        name: 'Ball Game',
        description: 'Can you reach level 20?',
        languages: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://rogerplaballus.github.io/BALL-GAME/',
        image: 'images/Ball-Game.png'
    },
    {
        name: 'Password Generator',
        description: 'Generate random passwords.',
        languages: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://rogerplaballus.github.io/Password-Generator-JS/',
        image: 'images/Password-generator.png'
    },
    {
        name: 'To Do List',
        description: 'A simple to-do list application for task management.',
        languages: ['Java'],
        url: 'https://github.com/RogerPlaBallus/To-Do-List',
        image: 'images/ToDoList.png'
    }    
];

// Global language icons mapping
const languageIcons = {
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'JavaScript': 'fab fa-js-square',
    'Python': 'fab fa-python',
    'React': 'fab fa-react',
    'Java': 'fab fa-java',
    'C++': 'fas fa-code',
    'C': 'fas fa-code',
    'TypeScript': 'fab fa-js-square',
    'PHP': 'fab fa-php',
    'Ruby': 'fas fa-gem',
    'Go': 'fab fa-golang',
    'Rust': 'fab fa-rust',
    'Swift': 'fab fa-swift',
    'Kotlin': 'fab fa-android',
    'Dart': 'fas fa-mobile-alt',
    'Shell': 'fas fa-terminal',
    'Node.js': 'fab fa-node-js',
    'SQLite': 'fas fa-database'
};

// Helper function to create language icon
function createLanguageIcon(lang) {
    const iconClass = languageIcons[lang] || 'fas fa-code';
    const icon = document.createElement('i');
    icon.className = iconClass;
    icon.title = lang;
    return icon;
}

function displayProjects(repos) {
    const projectsContainer = document.getElementById('projects');
    repos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const link = document.createElement('a');
        link.href = repo.url;
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = repo.image;
        img.alt = `${repo.name} screenshot`;

        link.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'project-content';

        const title = document.createElement('h3');
        title.textContent = repo.name;

        const descUl = document.createElement('ul');
        const desc = repo.description || 'No description available';
        const points = desc.split('. ').slice(0, 2); // Take first two sentences as bullet points
        points.forEach(point => {
            if (point.trim()) {
                const li = document.createElement('li');
                li.textContent = point.trim();
                descUl.appendChild(li);
            }
        });

        const stackUl = document.createElement('ul');
        const stackLi = document.createElement('li');
        stackLi.textContent = 'Stack: ';
        repo.languages.forEach(lang => {
            const icon = createLanguageIcon(lang);
            stackLi.appendChild(icon);
        });
        stackUl.appendChild(stackLi);

        contentDiv.appendChild(title);
        contentDiv.appendChild(descUl);
        contentDiv.appendChild(stackUl);
        projectDiv.appendChild(link);
        projectDiv.appendChild(contentDiv);
        projectsContainer.appendChild(projectDiv);
    });
}

function displayStack(repos) {
    const stackContainer = document.getElementById('stack');
    const languages = ['HTML', 'CSS', 'JavaScript'];

    languages.forEach(lang => {
        const icon = createLanguageIcon(lang);
        stackContainer.appendChild(icon);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
    displayStack(projects);
});
