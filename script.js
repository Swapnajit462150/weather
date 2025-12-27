const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const dateandtime = document.getElementById('dateandtime');
let date = new Date();
 async function checkweather(city){
    const api_key = "03a094de2fbed757402784c8ab602833";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`)
    .then(response=>response.json());
    console.log(weather_data);
    
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;  
    }
    weather_body.style.display= "flex";
    location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    dateandtime.innerHTML=`${date}`
    
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Haze':
             weather_img.src = "cloud.png";
             break;
        case 'Mist':
             weather_img.src = "mist.png";
              break;
        case 'Snow':
            weather_img.src = "snow.png";
             break;
        case 'Rain':
            weather_img.src = "rain.png";
             break;
       case 'Fog':
            weather_img.src = "mist.png";
             break; 
    }
  
  switch(weather_data.weather[0].main){
        case 'Clouds':
           alertbox.innerHTML=("☁️ Hmm...It's cloudy outside.🧥 You might want to carry a light jacket.");
            break;
        case 'Clear':
             alertbox.innerHTML=("🌞 Wow! Perfect day to dry your clothes outside!, Great weather for a walk.");
            break;
        case 'Haze':
               alertbox.innerHTML=("🌫️ Uh oh...It's hazy outside.😷 Consider wearing a mask and limit outdoor activities.");
             break;
        case 'Mist':
               alertbox.innerHTML=("👀 Easy there...It's misty outside And 🚗 Drive carefully and use low-beam lights.");
              break;
        case 'Snow':
              alertbox.innerHTML=("🥶 Brrr! It's snowing outside, 🧥🧣🧤🥾 Bundle up and stay warm.");
             break;
        case 'Rain':
              alertbox.innerHTML=("🌧️ Oh no! Carry an umbrella or raincoat today ☔, Better to dry clothes indoors today, Avoid outdoor activitiess.");
             break;
         case 'Fog':
              alertbox.innerHTML=("👀...Dense fog expected, drive carefully 🌫️🚗,Low visibility due to fog use headlights 🌫️💡");
             break;} 
  }
    
    
},2000);}
    
}
searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value)
})





