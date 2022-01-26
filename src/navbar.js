
function addNav() {
    let nav = document.createElement('nav')
    document.body.appendChild(nav);
    nav.classList.add('navStyle');
    let navNames = ['Home', 'Menu', 'Contact Us' ]
    for(let i = 0; i <3; i++) {
    let span = document.createElement('span')
    nav.appendChild(span)
    span.textContent = navNames[i]
    }
    
} 

export{addNav}