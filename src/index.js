import './style.css';
import { addPara, addDiv} from './home.js'
import {addHeading, addNav} from './navbar.js'
import {addMenuDiv} from './menu.js'
import {addContactDiv} from './contact.js'

document.body.classList.add('bgimg')
addHeading();
addDiv();
addPara();
addNav();
// addMenuDiv();
// addContactDiv();

function removeDomNodes () {
    if (document.getElementById('content')) {document.getElementById('content').remove()}
    if (document.getElementById('mainDiv')) {document.getElementById('mainDiv').remove()}
    if (document.getElementById('menuDiv')) {document.getElementById('menuDiv').remove()}
    if (document.getElementById('contactDiv')) {document.getElementById('contactDiv').remove()}

}

let navNodes = document.getElementsByTagName('nav')[0].childNodes

navNodes[0].addEventListener('click', ()=> {
    removeDomNodes();
    addDiv();
    addPara();
})

navNodes[1].addEventListener('click', ()=> {
    removeDomNodes();
    addMenuDiv();
})

navNodes[2].addEventListener('click', ()=> {
    removeDomNodes();
    addContactDiv();
})
