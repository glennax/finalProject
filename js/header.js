var header = document.querySelector("header");


var h1 = document.createElement("h1");
h1.classList.add('flex-item');
h1.textContent = 'Cuteness Overload';
header.appendChild(h1);

var nav = document.createElement('nav');
nav.classList.add('flex-container');
header.appendChild(nav);

var menu = document.createElement('ul');
menu.classList.add('menu');
nav.appendChild(menu);

var home = document.createElement('li');
var homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = "index.html";
menu.appendChild(home);
home.appendChild(homeLink);

var about = document.createElement('li');
var aboutLink = document.createElement('a');
aboutLink.textContent = 'About';
aboutLink.href = "about.html";
menu.appendChild(about);
about.appendChild(aboutLink);

var gallery = document.createElement('li');
var galleryLink = document.createElement('a');
galleryLink.textContent = 'Gallery';
galleryLink.href = "gallery.html";
menu.appendChild(gallery);
gallery.appendChild(galleryLink);

var contact = document.createElement('li');
var contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.href = "contact.html";
menu.appendChild(contact);
contact.appendChild(contactLink);

