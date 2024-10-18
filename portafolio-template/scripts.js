document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project';

                projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.nombre}" class="project-image">
                    <h3>${project.nombre}</h3>
                    <p>${project.descripcion}</p>
                    <p>${project.Tecnologías}</p>

                    <a href="${project.link}" target="_blank">Ver proyecto en Git</a>
                `;

                projectsContainer.appendChild(projectElement);
            });
        });

    // Suavizar el scroll de los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    // Efecto de visibilidad en el contenido principal
    const mainContent = document.getElementById('main-content');
    
    function handleScroll() {
        const rect = mainContent.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            mainContent.classList.add('visible');
        } else {
            mainContent.classList.remove('visible');
        }

        // Efecto de visibilidad en todas las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para aplicar el efecto al cargar la página
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    
    if (window.scrollY > 50) { // Cambia 50 por el valor que prefieras
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});




