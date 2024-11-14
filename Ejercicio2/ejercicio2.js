// Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div')
const paragraph = document.createElement('p')
divWithP.appendChild(paragraph)
document.body.appendChild(divWithP)

// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript
const divWithMultipleP = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divWithMultipleP.appendChild(p)
}
document.body.appendChild(divWithMultipleP)

// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

// Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub
const h2Element = document.querySelector('.fn-insert-here')
h2Element.textContent = 'Wubba Lubba dub dub'

// Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})

document.body.appendChild(ul)

// Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me')
elementsToRemove.forEach((element) => element.remove())

// Inserta una p con el texto 'Voy en medio!' entre los dos div.Recuerda que no solo puedes insertar elementos con .appendChild
const middleP = document.createElement('p')
middleP.textContent = 'Voy en medio!'

const divs = document.querySelectorAll('div')
if (divs.length >= 2) {
  divs[0].insertAdjacentElement('afterend', middleP)
}

// Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase fn-insert-here
const targetDivs = document.querySelectorAll('.fn-insert-here')
targetDivs.forEach((div) => {
  const innerP = document.createElement('p')
  innerP.textContent = 'Voy dentro!'
  div.appendChild(innerP)
})
