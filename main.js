window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id +"]").classList.add("active");
        }else{
            document.querySelector(".nav-items a[href*=" + id +"]").classList.remove("active");
        }
    })
})

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active")
    });
});

const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100,
    mobile: true
});

const isMobile = () => window.innerWidth <= 768;

if (isMobile()) {
    sr.reveal('.home .info h2, .section-title-01, .section-title-02', { 
        delay: 200, 
        origin: 'top',
        distance: '30px'
    });
    sr.reveal('.home .info h3, .home .info p, .about-info .btn, .service-title', { 
        delay: 300, 
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.home .info .btn', { 
        delay: 400, 
        origin: 'bottom',
        distance: '20px'
    });
    sr.reveal('.media-icons i, .contact-left li', { 
        delay: 200, 
        origin: 'left', 
        interval: 100,
        distance: '20px'
    });
    sr.reveal('.home-img, .about-info', { 
        delay: 300, 
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.skills-description, .services__description, .contact-card, .contact-left h2', { 
        delay: 300, 
        origin: 'top',
        distance: '20px'
    });
    sr.reveal('.services__card, .education, .portfolio .img-card', { 
        delay: 200, 
        origin: 'bottom', 
        interval: 100,
        distance: '20px'
    });
} else {
    sr.reveal('.home .info h2, .section-title-01, .section-title-02', { 
        delay: 200, 
        origin: 'left'
    });
    sr.reveal('.home .info h3, .home .info p, .about-info .btn, .service-title', { 
        delay: 300, 
        origin: 'right'
    });
    sr.reveal('.home .info .btn', { 
        delay: 300, 
        origin: 'bottom'
    });
    sr.reveal('.media-icons i, .contact-left li', { 
        delay: 200, 
        origin: 'left', 
        interval: 200
    });
    sr.reveal('.home-img, .about-info', { 
        delay: 200, 
        origin: 'bottom'
    });
    sr.reveal('.skills-description, .services__description, .contact-card, .contact-left h2', { 
        delay: 300, 
        origin: 'right'
    });
    sr.reveal('.services__card, .education, .portfolio .img-card', { 
        delay: 300, 
        origin: 'bottom', 
        interval: 200
    });
}

sr.reveal('footer .group, .contact-right, .img-card-container', { 
    delay: 500, 
    origin: 'top', 
    interval: 200
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_skf3ks9";
    const templateID = "template_gt36jk9";
    
    emailjs.send(serviceID, templateID, params).then((res)=> {
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("subject").value = "",
            document.getElementById("message").value = "",
            console.log(res);
            alert("Your message sent successfully!")
        }).catch((err) => console.log(err))
}
