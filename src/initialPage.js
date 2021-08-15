function createHeader(){
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const linkList = document.createElement('ul');
    nav.appendChild(linkList);
    const homeLink = document.createElement('li');
    const menuLink = document.createElement('li');
    const contactLink = document.createElement('li');
    homeLink.id = 'home';
    menuLink.id = 'menu';
    contactLink.id = 'contact';
    homeLink.innerHTML = '<a href="#home">Home</a>';
    menuLink.innerHTML = '<a href="#menu">Menu</a>';
    contactLink.innerHTML = '<a href="#contacus">Contact us</a>';
    linkList.append(homeLink, menuLink, contactLink);

    return header;
}

function createMainContent(){
    const div = document.createElement('div');
    div.id = 'main';
    const h1 = document.createElement('h1');
    h1.textContent = 'Bienvenidos a La Nogaderia!';
    div.appendChild(h1);
    const orderNow = document.createElement('a');
    orderNow.href = '#menu';
    orderNow.textContent = 'Order now!';
    div.appendChild(orderNow);
    const para = document.createElement('p');
    para.id = 'description';
    para.textContent = "Best Chili Nogadas in town. Can't miss them!"
    div.appendChild(para);
    const img = document.createElement('img');
    img.alt = 'nogada';
    img.src = '../imgs/Chile_nogada.png';
    div.appendChild(img);

    return div;
}

function pageLoad(){
    const contentDiv = document.getElementById('content');
    const header = createHeader();
    const mainContent = createMainContent();
    contentDiv.appendChild(header);
    contentDiv.appendChild(mainContent);
}


export default pageLoad;