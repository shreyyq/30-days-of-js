document.addEventListener('DOMContentLoaded',function(){
    const searchButton=document.getElementById('searchButton');
    searchButton.addEventListener('click',getMovieInfo);
    
    function getMovieInfo(){
        const movieName=document.getElementById('movieName').value;
        const apiKey='c40d087c';
        const url=`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`;

        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const movieInfo=document.getElementById('movieInfo');
            movieInfo.innerHTML='';

            if(data.Response==='True'){
                movieInfo.innerHTML=`
                <h2>${data.Title} (${data.Year})</h2>
                <img src="${data.Poster}" alt="Poster of ${data.Title}">
                <button id="moreInfoButton">More Info</button>
                `;

                document.getElementById('moreInfoButton').addEventListener('click',()=>showModal(data));
            }
            else{
                movieInfo.innerHTML=`<p>${data.Error}</p>`;
            }
        })
        .catch(error=>{
            console.error('Fetch Error:',error);
            const movieInfo=document.getElementById('movieInfo');
            movieInfo.innerHTML=`<p> There was an error fetching the movie data. Please try again later.`;
        });
    }

    const modal=document.getElementById('infoModal');
    const span=document.getElementsByClassName('close')[0];

    function showModal(movie){
        document.getElementById('modalTitle').textContent=`${movie.Title} (${movie.Year})`;
        document.getElementById('modalPlot').textContent=`Plot: ${movie.Plot}`;
        document.getElementById('modalDirector').textContent=`Director: ${movie.Director}`;
        document.getElementById('modalActors').textContent=`Actors: ${movie.Actors}`;
        modal.style.display='block';
    }

    span.onclick=function(){
        modal.style.display='none';
    }

    window.onclick=function(event){
        if(event.target===modal){
            modal.style.display='none';
        }
    }
});

document.getElementById('refreshButton').addEventListener('click',function () {
    window.location.reload();
});