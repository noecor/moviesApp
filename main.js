console.log('Hola');
const apiKey = `3631da5fba4115a4ce320e971a2fdadb`;
const paginaActual = 1;

fetch("https://api.themoviedb.org/3/movie/550?api_key=3631da5fba4115a4ce320e971a2fdadb")
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })

// categoria Popular
`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
// categoría Top Rated
`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
// categoría Upcoming
`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
// categoría Now Playing
`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

// si hicimos click en la categoria Popular, las peliculas a mostrar la sacamos de:
`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`

// si hicimos click en la categoria Top Rated, las peliculas a mostrar la sacamos de:
`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`

// si hicimos click en la categoria Upcoming, las peliculas a mostrar la sacamos de:
`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`

// si hicimos click en la categoria Now Playing, las peliculas a mostrar la sacamos de:
`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`

// si hicimos una búsqueda por palabra clave, las peliculas a mostrar la sacamos de:
`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`

//Modal

`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`