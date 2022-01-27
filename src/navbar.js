
function addNav() {
    let nav = document.createElement('nav')
    document.body.appendChild(nav);
    nav.classList.add('navStyle');
    let navNames = ['Home', 'Menu', 'Contact Us' ]
    for(let i = 0; i <3; i++) {
    let span = document.createElement('span')
    span.classList.add('spanStyles')
    nav.appendChild(span)
    span.textContent = navNames[i]
    }
}

function addHeading () {
    let header = document.createElement('h1');
    let mainDiv = document.getElementById('content')
    header.textContent = 'Delectica';
    header.classList.add('heading')
    document.body.appendChild(header)

    let line = document.createElement('hr')
    document.body.appendChild(line)
    
}

function navEventListener () {
    let navNodes = document.getElementsByTagName('nav')[0].childNodes
    console.log(navNodes[1].textContent)
}
 

export {addNav, addHeading}