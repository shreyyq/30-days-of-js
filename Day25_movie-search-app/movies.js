document.addEventListener('DOMContentLoaded',function(){
    const searchButton=document.getElementById('searchButton');

    searchButton.addEventListener('click',getMovieInfo);
    refreshButton.addEventListener('click',refreshPage);

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
                `;
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
});

document.getElementById('refreshButton').addEventListener('click',function () {
    window.location.reload();
});