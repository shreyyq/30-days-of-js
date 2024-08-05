// Activity 2
// Task 3
function fetchWeatherData(city){
    const apiKey='6b55fbeabb82c91644f67e6922f654ae';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// Activity 3
// Task 5
// Task 6
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
        }
        else{
            throw new Error('Incomplete data received from the API');
        }
    })
    .catch(error=>console.error('Error fetching weather data:',error));

    // Activity 4
    // Task 7
    const forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    fetch(forecastUrl)
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
    const forecastContainer=document.getElementById('forecast');
    forecastContainer.innerHTML='';

    for(let i=0;i<forecastList.length;i+=8){
        const forecast=forecastList[i];
        const date=new Date(forecast.dt_txt).toLocaleDateString();
        const temp=forecast.main.temp;
        const condition=forecast.weather[0].description;

        const forecastElement=document.createElement('div');
        forecastElement.className='forecast-item';
        forecastElement.innerHTML=`
        <p>Date:${date}</p>
        <p>Temperature:${temp}°C</p>
        <p>Condition:${condition}</p>
        `;
        forecastContainer.appendChild(forecastElement);
    }
}

// Task 4
window.onload=function(){
    const defaultCity='Almora';
    fetchWeatherData(defaultCity);
};

document.getElementById('searchButton').addEventListener('click',function(){
    const cityName=document.getElementById('cityInput').value;
    fetchWeatherData(cityName);
});


