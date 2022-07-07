var apiKey = "4ebd33c34d0df353eb3c8fe607de795a";

document.querySelector('#search-btn').onclick = (e)=>{
    e.preventDefault();
    var city = document.querySelector('#city-search').value;
    console.log(city);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
    then(res => res.json()).then(
    (data) => 
    {
    console.log(data)
    var lon = data.coord.lon;
    var lat = data.coord.lat;

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+apiKey).
    then(res=> res.json()).then(data=> 
        {console.log(data)
        let date = new Date(data.current.dt*1000).toLocaleDateString();
        console.log(date);
        document.querySelector('#upper').innerHTML=
        `
        <h3 id="name">${city} ${date}</h3>
        <p id="temp">Temp: ${data.current.temp}°F</p>
        <p id="wind">Wind: ${data.current.wind_speed} MPH</p>
        <p id="humidity">Humidity: ${data.current.humidity} %</p>
        <p id="uvIndex">UV Index: ${data.current.uvi} <span id="uv"></span></p>
        `;

        upper.style.backgroundColor = 'skyblue';
        upper.style.marginLeft = '10px';
        upper.style.marginRight = '10px';
    
    let futureArray = data.daily.slice(1,6);
    console.log(futureArray);
    for (let i=0; i<futureArray.length; i++){

        document.querySelector('#days').innerHTML +=
        `
        <h3 id="name">${city} ${new Date(futureArray[i].dt*1000).toLocaleDateString()}</h3>
        <p id="temp">Temp: ${futureArray[i].temp.day}°F</p>
        <p id="wind">Wind: ${futureArray[i].wind_speed} MPH</p>
        <p id="humidity">Humidity: ${futureArray[i].humidity} %</p>
        <p id="uvIndex">UV Index: ${futureArray[i].uvi} <span id="uv"></span></p>
        `;

        days.style.backgroundColor = 'skyblue';
        // days.style.display = 'wrap';
        // days.style.flexDirection = 'row';
        }}
    )}
)};












