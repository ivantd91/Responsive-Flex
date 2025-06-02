import { Header } from './components/header.js'
import { Main } from './components/main.js'

document.body.appendChild(Header())
document.body.appendChild(Main())

import('./components/buscador.js')

const clave = 'tXmamW-jO3PXlqm9jTh9JGQsPga1q_anuK_2ZsZ1eN0'
const query = 'animales'

fetch(
  `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${clave}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results)

    const main = document.querySelector('main')

    data.results.forEach((imagen) => {
      const img = document.createElement('img')
      img.src = imagen.urls.small
      img.alt = imagen.alt_description || 'Imagen de Unsplash'

      main.appendChild(img)
    })
  })
  .catch((err) => console.error('Error al obtener imágenes:', err))

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('#logoInicio')
  const main = document.querySelector('main')
  if (logo) {
    logo.addEventListener('click', () => {
      main.innerHTML = ''
      fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${clave}`
      )
        .then((res) => res.json())
        .then((data) => {
          data.results.forEach((imagen) => {
            const img = document.createElement('img')
            img.src = imagen.urls.small
            img.alt = imagen.alt_description || 'imagen de Unsplash'
            main.appendChild(img)
          })
        })
        .catch((err) => console.error('error de recarga', err))
    })
  }
})
