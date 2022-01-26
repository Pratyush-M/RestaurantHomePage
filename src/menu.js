import Tulipiny from './Tulipiny.jpg'
import Berrystraw from './Berrystraw.jpg'
import Catalyctic from './Catalyctic.jpg'
import Caramello from './Caramello.jpg'


function addMenuDiv () {

    let mainDiv = document.createElement('div')
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id', 'mainDiv')

    let menuHeader = document.createElement('h3')
    mainDiv.appendChild(menuHeader)
    menuHeader.textContent = "Menu"

    let menuDiv = document.createElement('div')
    document.body.appendChild(menuDiv)
    menuDiv.setAttribute('id', 'menuDiv')
    

    

    for (let i=0; i<4; i++) {
        let cakeSpan = document.createElement('span')
        menuDiv.appendChild(cakeSpan)
        cakeSpan.setAttribute('name', 'cake')
    }

    let chooseCakes = document.getElementsByName('cake')

    chooseCakes[0].textContent = 'Tulipiny - Rs. 800' 
    let myTulipiny = new Image();
    myTulipiny.src = Tulipiny;
    chooseCakes[0].appendChild(myTulipiny)


    chooseCakes[1].textContent = 'Berrystraw - Rs. 700'
    let myBerrystraw = new Image();
    myBerrystraw.src = Berrystraw;
    chooseCakes[1].appendChild(myBerrystraw);


    chooseCakes[2].textContent = 'Catalycitc - Rs. 900'
    let myCatalyctic = new Image();
    myCatalyctic.src = Catalyctic;
    chooseCakes[2].appendChild(myCatalyctic);


    chooseCakes[3].textContent = 'Caramello - Rs. 1000'
    let myCaramello = new Image();
    myCaramello.src = Caramello;
    chooseCakes[3].appendChild(myCaramello);

}

export{addMenuDiv}