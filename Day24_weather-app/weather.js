function applyWeatherAnimation(condition){
    const weatherAnimation=document.getElementById('weatherAnimation');
    weatherAnimation.className='weather-animation';

    if(condition.includes('rain')){
        weatherAnimation.classList.add('rain');
    }
    else if(condition.includes('snow')){
        weatherAnimation.classList.add('snow');
    }
    else if(condition.includes('clear')){
        weatherAnimation.classList.add('sunny');
    }
}
function fetchWeatherData(city,lat,lon){
    const apiKey='6b55fbeabb82c91644f67e6922f654ae';
    let url;

    if(lat&&lon){
        url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }
    else{
        url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }

    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error(`Error: ${response.status}- ${response.statusText}`);
        }
        return response.json();
    })
    .then(data=>{
        if(data&&data.main&&data.weather){
            document.getElementById('cityName').textContent=data.name;
            document.getElementById('temperature').textContent=data.main.temp;
            document.getElementById('weatherCondition').textContent=data.weather[0].description;
            applyWeatherAnimation(data.weather[0].description.toLowerCase());
        }
        else{
            throw new Error('Incomplete data received from the API');
        }
    })
    .catch(error=>console.error('Error fetching weather data:',error));
};

function getCurrentLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position=>{
                const lat=position.coords.latitude;
                const lon=position.coords.longitude;
                fetchWeatherData(null,lat,lon);
            },
            error=>{
                console.error('Error getting location:',error);
                fetchWeatherData('Nainital');
                
            }
        );
    }
    else{
        console.error('Geolocation is not supported by this browser');
        fetchWeatherData('Nainital');
    }
}

    function fetchForecastData(city){
        const apiKey='6b55fbeabb82c91644f67e6922f654ae';
        const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(`Error: ${response.status}-${response.statusText}`);
            }
            return response.json();
            })
            .then(data=>{
            if(data&&data.list){
                displayForecast(data.list);
            }
            else{
                throw new Error('Incomplete forecast data received from the API');
            }
            })
            .catch(error=>console.error('Error fetching forecast data:',error));
 };

function displayForecast(forecastList){
    const forecastContainer=document.getElementById('forecastInfo');
    forecastContainer.innerHTML='';

    for(let i=0;i<forecastList.length;i+=8){
        const forecast=forecastList[i];
        const date=new Date(forecast.dt_txt).toLocaleDateString();
        const temp=forecast.main.temp;
        const condition=forecast.weather[0].description;
        const icon=forecast.weather[0].icon;

        const forecastElement=document.createElement('div');
        forecastElement.className='forecast-item';
        forecastElement.innerHTML=`
         <p>Date:${date}</p>
        <p>Temperature:${temp}°C</p>
        <p>Condition:${condition}</p>
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${condition} icon">
        `;
    
    forecastContainer.appendChild(forecastElement);
    }
}

window.onload=function(){
getCurrentLocation();
document.getElementById('forecastButton').disabled=true;
};

document.getElementById('searchButton').addEventListener('click',function(){
    const cityName=document.getElementById('cityInput').value;
    fetchWeatherData(cityName);
    document.getElementById('forecastButton').disabled=false;
});

document.getElementById('forecastButton').addEventListener('click',function(){
    const cityName=document.getElementById('cityInput').value;
    fetchForecastData(cityName);
});

document.getElementById('refreshButton').addEventListener('click',function(){
    window.location.reload();
});

