//Esta es la documentación de la API: https://unsplash.com/developers
//'https://api.unsplash.com/search/photos?query=gatos&per_page=20'

export function Main() {
  const main = document.querySelector('main')

  return main
}

export function busquedaImagenes(query = '') {
  const clave = 'tXmamW-jO3PXlqm9jTh9JGQsPga1q_anuK_2ZsZ1eN0'
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${clave}`
  return fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      return data.results
    })
    .catch(function (err) {
      console.error('Error al obtener imágenes:', err)
      return []
    })
}

export function busquedaUser(term = 'user') {
  const clave = 'tXmamW-jO3PXlqm9jTh9JGQsPga1q_anuK_2ZsZ1eN0'
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    term
  )}&client_id=${clave}`
  return fetch(url)
    .then(function (res) {
      console.log(res)
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      return data.results.map((photo) => ({
        photoUrl: photo.urls.small,
        userAvatar: photo.user.profile_image.small,
        userName: photo.user.name
      }))
    })
    .catch(function (err) {
      console.error('Error al obtener users:', err)
      return []
    })
}
