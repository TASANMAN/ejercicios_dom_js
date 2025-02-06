// 1.1 Crear una lista ul > li dinámicamente para imprimir los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
  elementToRemove.remove()
}

// 1.3 Crear dinamicamente una lista ul > li de elementos en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHereDiv = document.querySelector('[data-function="printHere"]')
const ulCars = document.createElement('ul')

cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
})

if (printHereDiv) {
  printHereDiv.appendChild(ulCars)
}

// 1.4 Crear dinámicamente divs con h4 y img
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countriesWithImages.forEach((country) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const removeButton = document.createElement('button')

  h4.textContent = country.title
  img.src = country.imgUrl
  removeButton.textContent = 'Eliminar este div'

  // Añadir evento al botón para eliminar su propio div
  removeButton.addEventListener('click', () => {
    div.remove()
  })

  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(removeButton)
  document.body.appendChild(div)
})

// 1.5 Crear un botón que elimine el último div
const removeLastButton = document.createElement('button')
removeLastButton.textContent = 'Eliminar último div'
document.body.appendChild(removeLastButton)

removeLastButton.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})
