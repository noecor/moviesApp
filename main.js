console.log('Hola');
const apiKey = `3631da5fba4115a4ce320e971a2fdadb`;
const page = 1;
//const movieId
//const movieTitle
//const searchText = ;
const url = `https://image.tmdb.org/t/p/original`;
const body = document.querySelector('body');


//Modal?

//const createModal =()=>
 
const searchCategory = (category) => {
    let title = document.getElementById("title");
    switch (category) {
        case 'popular':
            title.textContent = 'Popular Movies';
            break;
        case 'top_rated':
            title.textContent = 'Top Rated';
            break;
        case 'upcoming':
            title.textContent = 'Upcoming';
            break;
        case 'now_playing':
            title.textContent = 'Now Playing';
            break;
    }
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`)
        .then((res) => res.json())            
		.then((res) => printCategoryResults(res.results));
};

const printCategoryResults = (movies) => {
    console.log('se ejecutó')
    let container = document.getElementById('movies');
	container.innerHTML = '';

	movies.forEach((mov) => {
		let movie = document.createElement('a');
        movie.innerText = mov.title;
        movie.innerHTML = `<li class="pelis">
            <div class="imagen" onclick="crearModal(${mov.id})"><img src="${url}${mov.poster_path}" width="80px"/></div>
            <div class="tituloPeli"  onclick="verModal(${mov.id})">${mov.title}</div>
            </li>`;
        container.appendChild(movie);
        console.log(mov.title);
	});
};

/*
fetch("https://api.themoviedb.org/3/movie/550?api_key=3631da5fba4115a4ce320e971a2fdadb")
    .then(response => response.json())
    .then(movie => {
        const div = document.createElement('div');

        const style = () => div.classList.add('modal');

        const genres = movie.genres.map(e=>e.name).join(', ')

        style();
        
        div.innerHTML = `
        <div class="test"></div>

        <div class="modalContainer displayNone">
        <div class="modalHeader" style="background-image: url(${url}${movie.backdrop_path})"></div>
        <div class="modalData"></div>
        <div class="containerModalData">
            <div class="modalPoster">
                <img src="${url}${movie.poster_path}" width=300px/>
            </div>
            <div class="modalDataMovie">
                <h4>${movie.title}</h4>
                <p>${movie.tagline}</p>
                <div class="moreInfo">
                    <span>${movie.overview}</span>
                    <h5>genre</h5>
                    <p>${genres}</p>
                    <h5> release date</h5>
                    <p>${movie.release_date}</p>
                </div>

            </div>
        </div>
        <div class="close" onclick= "closeModal()">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" 
            data-icon="times" class="svg-inline--fa fa-times fa-w-11" 
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 
            12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 
            75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19
             0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 
             12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 
             0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        </div>
        </div>`

    body.appendChild(div);
       
    })

*/
/*
const createModal = movie =>
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`)
    .then(res => res.json())
    .then(res => {
    console.log (movieId = `${movie.results[0].id}`)
}
*/
async function ada(){
let j=0;
await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
    .then(res => res.json())
    .then(movie => {
        for (let i=0; i<20; i++){
            
            console.log(movie.results[i].id);
            console.log(movie.results[i].title);

        }
    })
}
// categoria Popular
//let contenido = document.querySelector('#popular');
//const popular = fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  //  .then(response => response.json())
    //.then(data => {
        //let div = div.createDocument('div')
        //console.log(data);
        //popular.innerHTML = `${data}`;
        //let poster = movie.backdrop_path;
        //console.log(poster)
    //     div.innerHTML =                 
    //     `<div class="modalPoster">
    //     <img src="${dire}${data.poster_path}"/>
    // </div>`
    //})

/*
    let contenido = document.querySelector('#contenido')
let traer = () => {
	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
	.then(data=>{
		console.log(data)
        contenido.innerHTML = `${data}`
        .then(res => (res.json()))
})
}*/


// categoría Top Rated
const topRated = fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })
// categoría Upcoming
const upcoming = fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })
  
// categoría Now Playing
const nowPlaying = fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })



//Listado por categoría o búsqueda
// si hicimos click en la categoria Popular, las peliculas a mostrar la sacamos de:
const popularList = fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })

// si hicimos click en la categoria Top Rated, las peliculas a mostrar la sacamos de:
const topList = fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })

// si hicimos click en la categoria Upcoming, las peliculas a mostrar la sacamos de:
const upcomingList = fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })

// si hicimos click en la categoria Now Playing, las peliculas a mostrar la sacamos de:
const nowPlayingList = fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(res => {
        //console.log(res);
    })

/*/ si hicimos una búsqueda por palabra clave, las peliculas a mostrar la sacamos de:
DEFINIR VARIBLE searchText
const search = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&page=${page}`)
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

