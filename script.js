console.log("working");

const desktopNav = document.querySelector(".desktop-nav")
const mediaQuery = window.matchMedia('(max-width: 700px)')
const footer1 = document.querySelector(".footer1");
const footer2 = document.querySelector(".footer2");
const footer3 = document.querySelector(".footer3");
const footer4 = document.querySelector(".footer4");
const footer5 = document.querySelector(".footer5");
const footer1Menu = document.querySelector(".footer1-ul");
const footer2Menu = document.querySelector(".footer2-ul");
const footer3Menu = document.querySelector(".footer3-ul");
const footer4Menu = document.querySelector(".footer4-ul");
const footer5Menu = document.querySelector(".footer5-ul");
const footer1Icon = document.querySelector(".footer1 .footer-heading");
const footer2Icon = document.querySelector(".footer2 .footer-heading");
const footer3Icon = document.querySelector(".footer3 .footer-heading");
const footer4Icon = document.querySelector(".footer4 .footer-heading");
const footer5Icon = document.querySelector(".footer5 .footer-heading");
const desktopLogo = document.querySelector(".desktop-logo")
const desktopLogoBlack = document.querySelector(".desktop-logo-black")
const mobileMenuIcon = document.querySelector(".nav-icon ")
const desktopBtn = document.querySelector(".no--outline")
const desktopBtnOutline = document.querySelector(".desktop-button--outline")

console.log(desktopBtn, "header");

footer1.addEventListener("click", () => {
  if ( footer1Menu.style.display === "none") {
    footer1Menu.style.display = "block";
    footer1Icon.className = "footer-heading--view";
  } else if ( footer1Menu.style.display === "block"){
    footer1Menu.style.display = "none";
    footer1Icon.className = "footer-heading";
  }else return
});

footer2.addEventListener("click", () => {
  console.log("footer2 working");
  if ( footer2Menu.style.display === "none") {
    footer2Menu.style.display = "block";
    footer2Icon.className = "footer-heading--view";
  } else  if ( footer1Menu.style.display === "block"){
    footer2Menu.style.display = "none";
    footer2Icon.className = "footer-heading";
  }
});

footer3.addEventListener("click", () => {
  console.log("footer3 working");
  if ( footer3Menu.style.display === "none") {
    footer3Menu.style.display = "block";
    footer3Icon.className = "footer-heading--view";
  } else  if ( footer1Menu.style.display === "block"){
    footer3Menu.style.display = "none";
    footer3Icon.className = "footer-heading";
  }
});
footer4.addEventListener("click", () => {
  console.log("footer4 working");
  if ( footer4Menu.style.display === "none") {
    footer4Menu.style.display = "block";
    footer4Icon.className = "footer-heading--view";
  } else  if ( footer1Menu.style.display === "block"){
    footer4Menu.style.display = "none";
    footer4Icon.className = "footer-heading";
  }
});
footer5.addEventListener("click", () => {
  console.log("footer4 working");
  if ( footer5Menu.style.display === "none") {
    footer5Menu.style.display = "block";
    footer5Icon.className = "footer-heading--view";
  } else  if ( footer1Menu.style.display === "block"){
    footer5Menu.style.display = "none";
    footer5Icon.className = "footer-heading";
  }
});


window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    desktopNav.classList.add('active')
    desktopLogoBlack.classList.add('active')
    desktopLogo.classList.add('active')
    desktopBtn.classList.add('active')
    desktopBtnOutline.classList.add('active')
    mobileMenuIcon.classList.add('active')

  } else if (desktopNav.classList.contains('active')) {
    desktopNav.classList.remove('active')
    desktopLogoBlack.classList.remove('active')
    desktopLogo.classList.remove('active')
    desktopBtn.classList.remove('active')
    desktopBtnOutline.classList.remove('active')
  } else {
    desktopNav.classList.remove('active')
    desktopLogoBlack.classList.remove('active')
    desktopLogo.classList.remove('active')
    desktopBtn.classList.remove('active')
    desktopBtnOutline.classList.remove('active')
    
  }
})