function addContactDiv () {
    let contactDiv = document.createElement('div')
    document.body.appendChild(contactDiv)
    contactDiv.setAttribute('id', 'contactDiv')
    
    let contactHeader = document.createElement('h3')
    contactDiv.appendChild(contactHeader)
    contactHeader.textContent = 'Contact Us:'

    for(let i=0; i<3; i++) {
    let contactPara = document.createElement('p')
    contactDiv.appendChild(contactPara)
    contactPara.setAttribute('name', 'para')
    }

    let paraSelector = document.getElementsByName('para')
    paraSelector[0].textContent = 'Phone - +91 9987676339'
    paraSelector[1].textContent = 'Email - delecticacakes@email.com'
    paraSelector[2].textContent = 'Address - Delectica Cakes \n             Shop No. 8 \n             Pawan Society \n             Borivali(W) \n             Mumbai \n            400092'

    
    
    

}


export {addContactDiv}