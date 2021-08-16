function loadHome(){   
    const main = document.getElementById('main');
    main.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Bienvenidos a La Nogaderia!';
    main.appendChild(h1);
    const orderNow = document.createElement('a');
    orderNow.href = '#menu';
    orderNow.textContent = 'Order now!';
    main.appendChild(orderNow);
    const para = document.createElement('p');
    para.id = 'description';
    para.textContent = "Best Chili Nogadas in town. Can't miss them!"
    main.appendChild(para);
    const img = document.createElement('img');
    img.alt = 'nogada';
    img.src = '../imgs/Chile_nogada.png';
    main.appendChild(img);
}

export default loadHome;