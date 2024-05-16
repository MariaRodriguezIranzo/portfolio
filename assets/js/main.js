/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

/*dark mode*/
// Función para cambiar entre modo claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Event listener para el cambio de modo al hacer clic en el botón
document.querySelector('.toggle-container input[type="checkbox"]').addEventListener('change', function () {
    toggleDarkMode();
});


/*filtros proyectos*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectBoxes = document.querySelectorAll(".project-box");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        projectBoxes.forEach(box => {
            const technologies = box.querySelectorAll(".skills-list-proyect span");
            const isFrontend = Array.from(technologies).some(tech => {
                return ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "Tailwind", "React", "Angular"].includes(tech.textContent);
            });
            const isBackend = Array.from(technologies).some(tech => {
                return ["Node.js", "Express", "PHP", "Python", "C#", "Java", "Ruby"].includes(tech.textContent);
            });

            if (filterValue === "all" ||
                (filterValue === "frontend" && isFrontend) ||
                (filterValue === "backend" && isBackend)) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
    });
});

window.addEventListener('scroll', scrollActive)