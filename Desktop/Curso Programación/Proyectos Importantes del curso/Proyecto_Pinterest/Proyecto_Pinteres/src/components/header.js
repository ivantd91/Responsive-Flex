//CABECERA
export function Header() {
  const header = document.createElement('header')

  const contenedorLogo = document.createElement('div')
  const logoInicio = document.createElement('button')
  const imagenInicio = document.createElement('img')
  imagenInicio.src = './assets/213c8e23f4e77d9bb36ba63e4806d98611febc01.png'
  imagenInicio.width = 20
  imagenInicio.alt = 'icono'
  imagenInicio.classList.add('imagenInicio')
  imagenInicio.id = 'logoInicio'

  logoInicio.appendChild(imagenInicio)
  contenedorLogo.appendChild(imagenInicio)
  header.appendChild(contenedorLogo)

  const menuInicio = document.createElement('div')
  menuInicio.classList.add('menuInicio')
  const inicio = document.createElement('button')
  inicio.textContent = 'Inicio'
  const explorar = document.createElement('button')
  explorar.textContent = 'Explorar'
  const crear = document.createElement('button')
  crear.textContent = 'Crear'

  menuInicio.appendChild(inicio)
  menuInicio.appendChild(explorar)
  menuInicio.appendChild(crear)

  const busquedaDiv = document.createElement('div')
  const barraBusqueda = document.createElement('input')
  barraBusqueda.placeholder = '🔎 Buscar'
  barraBusqueda.classList.add('barraBusqueda')
  barraBusqueda.type = 'text'
  busquedaDiv.appendChild(barraBusqueda)

  const menuderecho = document.createElement('div')

  const notificacion = document.createElement('button')
  const imagenCampana = document.createElement('img')
  imagenCampana.src = './assets/bell-svgrepo-com (2).svg'
  imagenCampana.alt = 'campana'
  notificacion.appendChild(imagenCampana)
  const mensaje = document.createElement('button')
  const imagenMensaje = document.createElement('img')
  imagenMensaje.src = './assets/comment-dots-svgrepo-com (1).svg'
  imagenMensaje.alt = 'mensaje'
  mensaje.appendChild(imagenMensaje)
  const usuario = document.createElement('button')

  const imagenUsuario = document.createElement('img')
  imagenUsuario.src = './assets/user-circle-svgrepo-com.svg'
  imagenUsuario.alt = 'user'
  usuario.appendChild(imagenUsuario)
  menuderecho.classList.add('menuderecho')

  menuderecho.appendChild(notificacion)
  menuderecho.appendChild(mensaje)
  menuderecho.appendChild(usuario)

  header.appendChild(menuInicio), header.appendChild(busquedaDiv)
  header.appendChild(menuderecho)
  return header
}
