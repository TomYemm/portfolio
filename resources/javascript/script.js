// MOBILE NAV BUTTONS
let mobNavHome = document.getElementById('mob-nav-home');
let mobNavPortfolio = document.getElementById('mob-nav-portfolio');
let mobNavAbout = document.getElementById('mob-nav-about');
let mobNavContact = document.getElementById('mob-nav-contact');
//redirects
mobNavHome.onclick = () => {
  location.href = '../index.html';
}
mobNavPortfolio.onclick = () => {
  location.href = '../portfolio.html';
}
mobNavAbout.onclick = () => {
  location.href = '../about.html';
}
mobNavContact.onclick = () => {
  location.href = '../contact.html';
}

//DARK MODE
const dmToggle = document.getElementById('dmtoggle');
const dmBtn = document.getElementsByClassName('dm-btn');
const change = document.getElementsByClassName('dark-mode');

function makeDark() {
  for (let i = 0; i < change.length; i++) {
    change[i].style.backgroundColor = "#191a1a";
    change[i].style.color = "#FFF";
    change[i].style.borderColor = "#575959";
  }
  dmBtn[0].style.backgroundColor = '#191a1a';
  dmBtn[0].style.borderColor = '#FFF';
  dmBtn[0].style.left = '18px';
  dmToggle.style.backgroundColor = '#FFF';
  dmToggle.style.borderColor = '#FFF';
}
function makeLight() {
  for (let i = 0; i < change.length; i++) {
    change[i].style.backgroundColor = "#FFF";
    change[i].style.color = "#191a1a";
    change[i].style.borderColor = "#191a1a";
  }
  dmBtn[0].style.backgroundColor = '#FFF';
  dmBtn[0].style.borderColor = '#191a1a';
  dmBtn[0].style.left = '-2px';
  dmToggle.style.backgroundColor = '#191a1a';
  dmToggle.style.borderColor = '#191a1a';
}

if (localStorage.getItem("status") === "dark") {
  makeDark();
} else {
  makeLight();
}

dmToggle.onclick = () => {
  if (localStorage.getItem('status') === 'light') {
    makeDark();
    localStorage.setItem('status', 'dark');
  } else {
    makeLight();
    localStorage.setItem('status', 'light');
  }
}


//Portfolio page redirects
let pVardo = document.getElementsByClassName('portfolio-vardo');
//redirects
pVardo[0].onclick = () => {
  location.href = './portfolio/vardo.html';
}
