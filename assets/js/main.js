 /* ----Navigation bar funtion*/

function myMenuFunction(){

    var menuBtn = document.getElementById("mynavMenu");


    if(menuBtn.className === "nav-menu"){
        menuBtn.className+= " responsive";
    
    }
    else{
        menuBtn.className="nav-menu";
    }
}

window.onscroll=function() {headerShadow()};

function headerShadow(){
    const navHeader =document.getElementById("header");

    if(document.body.scrollTop>50|| document.documentElement.scrollTop>50){
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader.style.height="90px";
        navHeader.style.lineHeight="90px";
    }

}

/*-----typing effect---- */

var typingEffect= new Typed(".typedText",{
    strings:["Designer","Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000
})

/* ---##--- scroll reveal animation--## --- */

const sr= ScrollReveal({
    origin:'top',
    distance:'80px',
    durartion:200,
    reset:true
})

/*-----home------- */

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

/*----project box------ */
sr.reveal('.project-box',{interval:200})

/*------heading------ */

sr.reveal('.top-header',{})

/* ----##----- scroll reveal left_right animation ---##---*/

/*---about info & contact info-- */ 

const srLeft= ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset:true
})

srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})
 
srLeft.reveal('.about-columna',{delay:100})



/*------about skills & form */

const srRight =ScrollReveal({
    origin:'right',
    distance:'80px',
    durartion:2000,
    reset:true
})

srRight.reveal('.skills-box',{delay:100})
srRight.reveal('form-control',{delay:100})
srRight.reveal('.about-column',{delay:100})

/*---------change active link-------------- */

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY =window.scrollY;


    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId =current.getAttribute('id');

        if(scrollY> sectionTop && scrollY<= sectionTop+sectionHeight){

            document.querySelector('.nav-menu a[href*=' +sectionId + ']').classList.add('active-link')

        }
        else{
            document.querySelector('.nav-menu a[href*=' +sectionId + ']').classList.remove('active-link')
            
        }
    })
}

window.addEventListener('scroll',scrollActive)


// Project data
const projectsData = {
    project1: {
        title: "Automated Food Drying System",
        image: "assets/images/hr.webp",
        description: "This project addresses the challenges associated with traditional sun drying of food, which is vulnerable to contamination from dust, airborne particles, insects, and animals. It ensures precise moisture content of dried food, making it more efficient and hygienic compared to open-air drying, especially in humid climates.",
        technologies: ["EasyEDA", "Arduino Mega", "C++"]
    },
    project2: {
        title: "Mobile app development",
        image: "assets/images/Screenshot (510).png",
        description: "The mobile app solves the critical problem of scarcity and unreliability in the vehicle spare parts market in Sri Lanka. It offers users an efficient platform to search for genuine spare parts, find trusted sellers, and manage vehicle-related tasks. Key features include spare parts search and seller listings, vehicle information management, emergency tips, and locating nearby services. The app promotes safety, cost-effectiveness, and convenience for vehicle owners, revolutionizing the spare parts industry.",
        technologies: ["Flutter", "NodeJs", "Postgresql", "Firebase","Prisma"]
    },
    
    project3: {
        title: "InstaRecipe - Recipe Recommendation Website",
        image: "assets/images/webi.jpg", 
        description: "InstaRecipe is a user-friendly platform that helps users find recipes based on the ingredients they have at home. It aims to reduce food waste, simplify meal planning, and inspire users to try new recipes. Users can input available ingredients, receive recipe suggestions, save their favorites, and share them with others. The platform supports dietary preference filtering and allows real-time messaging with farmers.",
        technologies: ["React.js", "Node.js", "MongoDB", "WebSocket"]
    }
};

// Get modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalTechnologies = document.getElementById("modalTechnologies");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to all "View Project" buttons
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.closest('.project-card').dataset.project;
        const project = projectsData[projectId];
        
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalDescription.textContent = project.description;
        
        modalTechnologies.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTechnologies.appendChild(li);
        });
        
        modal.style.display = "block";
    });
});

// Close modal when clicking on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




 