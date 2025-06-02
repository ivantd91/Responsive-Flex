import { busquedaImagenes } from './main.js'

const busqueda = document.querySelector('.barraBusqueda')
const main = document.querySelector('main')

busqueda.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const valor = busqueda.value.trim()
    if (!valor) return

    main.innerHTML = ''
    busqueda.value = ''

    busquedaImagenes(valor)
      .then((imagenes) => {
        if (imagenes.length === 0) {
          mensajeAlert(
            `No hemos encontrado "${valor}". Tenemos estas imágenes como sugerencia `
          )
          busquedaImagenes('gatitos').then((otrasImagenes) => {
            presentarImagenes(otrasImagenes, main)
          })
        } else {
          presentarImagenes(imagenes, main)
          mensajeAlert('')
        }
      })
      .catch((error) => {
        console.log('Error en la busqueda de imágenes:', error)
        mensajeAlert('Error en la búsqueda')
      })
  }
})

function presentarImagenes(imagenes, contenedor) {
  imagenes.forEach((imagen) => {
    const imgElemento = document.createElement('div')
    imgElemento.classList.add('img-viñeta')

    imgElemento.innerHTML = `
    
    <img src= "${imagen.urls.small}" alt= "${imagen.alt_description}">

    <div class="imagen_usuario">
      <img src= "${imagen.user.profile_image.medium}"
      alt ="${imagen.user.name}"
      titulo="${imagen.user.name}"
      >
      </div>

    `
    contenedor.appendChild(imgElemento)
  })
}

function mensajeAlert(texto) {
  let mensaje = document.querySelector('#mensaje')
  if (!mensaje) {
    mensaje = document.createElement('div')
    mensaje.id = 'mensaje'
    mensaje.style.display = 'none'
    document.body.insertBefore(mensaje, main)
  }
  mensaje.textContent = texto

  if (texto !== '') {
    mensaje.style.display = 'block'
    setTimeout(() => {
      if (mensaje.textContent === texto) {
        mensaje.textContent = ''
        mensaje.style.display = 'none'
      }
    }, 4000)
  }
}
