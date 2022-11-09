// API Doc: https://www.last.fm/api/show/artist.getTopAlbums

const apiKey = "INSERT API KEY HERE";
const baseUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums`
const form = document.querySelector("#search");
const albums = document.getElementById('albums-container');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const artist = document.querySelector('#artist').value
  const url = `${baseUrl}&artist=${artist}&api_key=${apiKey}&format=json`
  fetch(url)
  .then( response => response.json() )
  .then((data) => {
    albums.innerHTML = ""
    data.topalbums.album.forEach((album) => {
      const div = `<div class="row mt-3">
      <div class="col-12 d-flex justify-content-start">
        <img src="${album.image[2]['#text']}">
        <div class='ms-3'>
          <h2>${album.name}</h2>
        <p>${album.artist.name}</p>
        </div>
      </div>
    </div>`
      albums.insertAdjacentHTML("beforeend", div)
    })

  })
})
