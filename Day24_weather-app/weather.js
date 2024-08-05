document.getElementById('searchButton').addEventListener('click',function(){
    const cityName=document.getElementById('cityInput').value;
    fetchWeatherData(cityName);
});

function fetchWeatherData(city){
    const apiKey='6b55fbeabb82c91644f67e6922f654ae';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            document.getElementById('cityName').textContent=data.name;
            document.getElementById('temperature').textContent=data.main.temp;
            document.getElementById('weatherCondition').textContent=data.weather[0].description;
        })
        .catch(error=> console.error('Error fetching weather data:',error));
}