let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

  const subject = encodeURIComponent('Contact Form WEBHELPER');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  const mailtoLink = `mailto:pratikr8132@gmail.com?subject=${subject}&body=${body}`;

  window.open(mailtoLink);
});


var typed = new Typed(".typing",{
    strings:["DATA ANALYST","DATABASE","MERN STACK DEVELOPER","PYTHON","DSA BASICS"],
    
    typeSpeed:150,
    BackSpeed:40,
    loop:true
  })


window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};