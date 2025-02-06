document.addEventListener('DOMContentLoaded', function () {
  // 1.1 Añadir el evento click al botón con id 'btnToClick'
  const button = document.getElementById('btnToClick')
  button.addEventListener('click', function (event) {
    console.log('Evento de clic:', event)
  })

  // 1.2 Añadir el evento focus al input con clase 'focus'
  const focusInput = document.querySelector('.focus')
  focusInput.addEventListener('focus', function () {
    console.log('Valor del input al hacer focus:', focusInput.value)
  })

  // 1.3 Añadir el evento input al input con clase 'value'
  const valueInput = document.querySelector('.value')
  valueInput.addEventListener('input', function () {
    console.log('Valor del input al escribir:', valueInput.value)
  })

  // 1.4 Crear una lista ul > li con los albums
  const albums = [
    'De Mysteriis Dom Sathanas',
    'Reign of Blood',
    'Ride the Lightning',
    'Painkiller',
    'Iron Fist'
  ]

  const ul = document.createElement('ul') // Crear la lista ul

  albums.forEach((album) => {
    const li = document.createElement('li') // Crear el li para cada álbum
    li.textContent = album // Añadir el nombre del álbum al li
    ul.appendChild(li) // Añadir el li a la lista ul
  })

  document.body.appendChild(ul) // Añadir la lista al body
})
