
function loadMenu(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    mainContent.appendChild(h1);

    const menuItems =
    [      
        { title: 'Nogada de Puebla',
          price: 180
        },
        { title: 'Nogada de Temporada',
          price: 220
        },
        {
          title: 'Noga Con Huevo',
          price: 125 
        },
        {
            title: 'Horchata',
            price: 55
        }
    ]
    menuItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.title + " " + item.price;
        mainContent.appendChild(p);
    })

    console.log('Menu!');
}

export default loadMenu;