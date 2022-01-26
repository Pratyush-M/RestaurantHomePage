

function addDiv() {
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'content');
document.body.appendChild(newDiv);
}

function addPara() {
let mainDiv = document.getElementById('content')
let para = document.createElement('p')
para.textContent = 'At Delectica we prepare gourmet cakes with the finest ingredients.';
mainDiv.appendChild(para)
}


export {addPara, addDiv}