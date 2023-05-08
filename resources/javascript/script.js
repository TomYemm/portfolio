
// MOBILE NAV BUTTONS
let mobNavHome = document.getElementById('mob-nav-home');
let mobNavPortfolio = document.getElementById('mob-nav-portfolio');
let mobNavAbout = document.getElementById('mob-nav-about');
let mobNavContact = document.getElementById('mob-nav-contact');
// Button click redirects
mobNavHome.onclick = () => {
  location.href = './index.html';
}
mobNavPortfolio.onclick = () => {
  location.href = './portfolio.html';
}
mobNavAbout.onclick = () => {
  location.href = './about.html';
}
mobNavContact.onclick = () => {
  location.href = './contact.html';
}
