function loadContact(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Find us at:'
    mainContent.appendChild(h1);
    const img = document.createElement('img');
    img.alt = 'arcos';
    img.src = '../imgs/queretaro.jpeg';
    mainContent.appendChild(img);
}

export default loadContact;