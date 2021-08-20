import queretaro from '../src/imgs/queretaro.jpeg';

function loadContact(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Find us at:'
    mainContent.appendChild(h1);
    const img = document.createElement('img');
    img.alt = 'arcos';
    img.src = queretaro;
    mainContent.appendChild(img);
    const contact = document.createElement('p');

}

export default loadContact;