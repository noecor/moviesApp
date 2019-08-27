console.log('Hola');
const apiKey = `3631da5fba4115a4ce320e971a2fdadb`;
const page = 1;
const url = `https://image.tmdb.org/t/p/original`;
const body = document.querySelector('body');

 
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
    container.classList.add('movies')
    container.innerHTML = '';

	movies.forEach((mov) => {
		let movie = document.createElement('a');
        movie.innerText = mov.title;
        movie.innerHTML = `<li class="pelis">
            <div class="imagen" onclick="openModal(${mov.id})"><img src="${url}${mov.poster_path}" width="80px"/></div>
            <div class="tituloPeli"  onclick="openModal(${mov.id})">${mov.title}</div>
            </li>`;
        container.appendChild(movie);
        console.log(mov.title);
	});
};


const openModal = id =>{
    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(movie => { 

            const contenedor = document.createElement('div');
            const genres = movie.genres.map(e=>e.name).join('/')

            contenedor.classList.add('modal')
            
            contenedor.innerHTML = `
            <div class="spinner"></div>

            <div class="contenedorModal noVisible">
            <div class="modalEncabezado" style="background-image: url(${url}${movie.backdrop_path})" width="100px"></div>
            <div class="modalInformacion"></div>
            <div class="contenedorModalInfo">
                <div class="modalPoster">
                    <img src="${url}${movie.poster_path}" width="300px"/>
                </div>
                <div class="modalInformacionPeli">
                    <h4>${movie.title}</h4>
                    <p>${movie.tagline}</p>
                    <div class="masInfo">
                        <span>${movie.overview}</span>
                        <h5>genre</h5>
                        <p>${genres}</p>
                        <h5> release date</h5>
                        <p>${movie.release_date}</p>
                    </div>

                </div>
            </div>
            <div class="cerrar" onclick= "cerrarModal()">
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


        body.appendChild(contenedor);
    })
};