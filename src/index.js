import pageLoad from './initialPage.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';
import './imgs/Chile_nogada.png';
import './imgs/favicon.png';

startPage();
navigationBar();

function startPage(){
pageLoad();
loadHome();
}

function navigationBar(){
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');


home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);
contact.addEventListener('click', loadContact);
}

