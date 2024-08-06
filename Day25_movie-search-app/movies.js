const apiKey='c40d087c';

function searchMovie(){
    const movieName=document.getElementById('movieName').value;
    const url=`http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data.response==='True'){
            displayMovieInfo(data);
        }
        else{
            document.getElementById('movieInfo').innerHTML=`<p>${data.Error}</p>`;
        }
    })
    .catch(error=> console.error('Error:',error));
};

function displayMovieInfo(movie){
    const movieInfo=`
    <h2>${movie.title} (${movie.year})</h2>
    <img src="${movie.Poster}" alt="${movie.Title} Poster">
    `;
    document.getElementById('movieInfo').innerHTML=movieInfo;
}