const curPage = window.location.href.split('/')[3];

const aboutLink = document.querySelector('a.about-link');
const folioLink = document.querySelector('a.folio-link');
const contactLink = document.querySelector('a.contact-link');

if (curPage == 'about') {
    aboutLink.classList.add('bold');
    folioLink.classList.remove('bold');
    contactLink.classList.remove('bold');
}
else if (curPage == 'portfolio') {
    aboutLink.classList.remove('bold');
    folioLink.classList.add('bold');
    contactLink.classList.remove('bold');
}
else if (curPage == 'contact') {
    aboutLink.classList.remove('bold');
    folioLink.classList.remove('bold');
    contactLink.classList.add('bold');
}
else {
    aboutLink.classList.remove('bold');
    folioLink.classList.remove('bold');
    contactLink.classList.remove('bold');
}