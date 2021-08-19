
function loadMenu(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    mainContent.appendChild(h1);

    const menuItems =
    [      
        { title: 'Nogada de Puebla',
          description: 'Nogada from the birth place of the dish',
          price: '180 MXN'
        },
        { title: 'Nogada de Temporada',
          description: 'Seasonal food for the holiday',
          price: '220 MXN'
        },
        {
          title: 'Noga Con Huevo',
          description: 'Traditional nogada with an egg',
          price: '125 MXN'
        },
        {
            title: 'Horchata',
            description:'Traditional rice made drink',
            price: '25 MXN'
        }
    ]
    menuItems.forEach(item => {
        const title = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');
        title.textContent = item.title
        title.classList = 'item';
        description.textContent = item.description;
        description.classList = 'description';
        price.textContent = item.price
        price.classList = 'price';
        mainContent.appendChild(title);
        mainContent.appendChild(description);
        mainContent.appendChild(price);
    })

    console.log('Menu!');
}

export default loadMenu;