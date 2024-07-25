const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
});

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    });
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    
});


//Scrolling section

/*let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height) {
        navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('nav a [href*=' + id + ']').classList.add('active');
        });
        };
    });
};*/
