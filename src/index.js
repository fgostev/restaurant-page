import pageLoad from './initialPage.js';
import loadMenu from './menu.js';

pageLoad();

const menu = document.getElementById('menu');
function test(){
    console.log('test');
}
menu.addEventListener('click', loadMenu);