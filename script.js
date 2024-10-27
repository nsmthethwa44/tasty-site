let navbar = document.querySelector(".navbar");
let scrollTop = document.querySelector('.top');
let menuBoxIcon = document.querySelector(".menu-box .fa-solid");
let navLink = document.querySelectorAll(".header .navbar .nav li a");
let header = document.querySelector(".header");

menuBoxIcon.onclick = () =>{
    menuBoxIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

window.onscroll = ()=>{
    if (window.scrollY > 2){
        menuBoxIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
        header.classList.add("active");

        scrollTop.classList.add("active");
    }else{
        scrollTop.classList.remove("active");
        header.classList.remove("active");
    }
}

Array.from(navLink).forEach((item, index) =>{
    item.onclick = (e) =>{
        let currentActiveLink = document.querySelector(".header .navbar .nav li a.active");
        currentActiveLink.classList.remove("active");
        e.target.classList.add("active");
        navbar.classList.remove("active");
        menuBoxIcon.classList.remove("fa-xmark");
    }
})