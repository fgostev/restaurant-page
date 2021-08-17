import loadMenu from './menu.js';

function loadHome(){   
    const main = document.getElementById('main');
    main.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'La Nogaderia!';
    main.appendChild(h1);
    const hr = document.createElement('hr');
    main.appendChild(hr);
    const para = document.createElement('p');
    para.id = 'description';
    para.textContent = "Best Chili Nogadas in town. Can't miss them!"
    main.appendChild(para);
    const orderNow = document.createElement('a');
    orderNow.id = 'orderNow';
    orderNow.textContent = 'Order Now';
    orderNow.addEventListener('click', loadMenu)
    main.appendChild(orderNow);

}

export default loadHome;