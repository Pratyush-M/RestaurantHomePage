import './style.css';
import { addPara, addDiv} from './home.js'
import {addHeading, addNav} from './navbar.js'
import {addMenuDiv} from './menu.js'

document.body.classList.add('bgimg')
addHeading();
addDiv();
addPara();
addNav();
addMenuDiv();

function removeDomNodes () {
    document.getElementById('content').remove()
}

let navNodes = document.getElementsByTagName('nav')[0].childNodes
navNodes[1].addEventListener('click', ()=> {removeDomNodes()})
