

function addDiv() {
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'content');
document.body.appendChild(newDiv);
}



function addHeading () {
    let header = document.createElement('h1');
    let mainDiv = document.getElementById('content')
    header.textContent = 'Delectica';
    header.classList.add('heading')
    return mainDiv.appendChild(header)
    
}

function addPara() {
let mainDiv = document.getElementById('content')
let para = document.createElement('p')
para.textContent = 'At Delectica we prepare gourmet cakes with the finest ingredients.';
mainDiv.appendChild(para)
}

export {addHeading, addPara, addDiv}