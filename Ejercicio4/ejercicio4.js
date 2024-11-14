// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos el botón por su ID
  const button = document.getElementById('btnToClick')

  // Añadimos el evento click al botón
  button.addEventListener('click', function (event) {
    console.log('Evento de clic:', event)
  })
})

{
  /* // Añade un evento 'focus' que ejecute un console.log con el valor del input. */
}

document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos el input con la clase .focus
  const focusInput = document.querySelector('.focus')

  // Añadimos el evento focus al input
  focusInput.addEventListener('focus', function () {
    console.log('Valor del input al hacer focus:', focusInput.value)
  })
})

{
  /* Añade un evento 'input' que ejecute un console.log con el valor del input */
}
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos el input con la clase .input
  const input = document.querySelector('.input')

  // Añadimos el evento input al input
  input.addEventListener('input', function () {
    console.log('Valor del input al escribir:', input.value)
  })
})
