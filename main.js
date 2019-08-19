console.log('Hola');
const apiKey = `3631da5fba4115a4ce320e971a2fdadb`;
const paginaActual = 1;
//const peliculaId = e;
//const searchText = ;

fetch("https://api.themoviedb.org/3/movie/550?api_key=3631da5fba4115a4ce320e971a2fdadb")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

// categoria Popular
const popular = fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

// categoría Top Rated
const topRated = fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
// categoría Upcoming
const upcoming = fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
  
// categoría Now Playing
const nowPlaying = fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })



//Listado por categoría o búsqueda
// si hicimos click en la categoria Popular, las peliculas a mostrar la sacamos de:
const popularList = fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })

// si hicimos click en la categoria Top Rated, las peliculas a mostrar la sacamos de:
const topList = fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })

// si hicimos click en la categoria Upcoming, las peliculas a mostrar la sacamos de:
const upcomingList = fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })

// si hicimos click en la categoria Now Playing, las peliculas a mostrar la sacamos de:
const nowPlayingList = fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })

/*/ si hicimos una búsqueda por palabra clave, las peliculas a mostrar la sacamos de:
DEFINIR VARIBLE searchText
const search = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
    
*/

//Modal
/*const movieData = fetch (`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`)
.then(response => response.json())
.then(res => {
    console.log(res);
})
console.log (movieData)*/