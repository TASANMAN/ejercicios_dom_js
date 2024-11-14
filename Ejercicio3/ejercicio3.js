// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})

document.body.appendChild(ul)

// Elimina el elemento que tenga la clase .fn-remove-me.

const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
  elementToRemove.remove()
}

// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

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

// Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

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

  h4.textContent = country.title
  img.src = country.imgUrl

  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
})

// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const removeLastButton = document.createElement('button')
removeLastButton.textContent = 'Eliminar último div'
document.body.appendChild(removeLastButton)

removeLastButton.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})

// Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

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
