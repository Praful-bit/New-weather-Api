   const apiKey ="9d1265b3d26afd00b5dfe90ca206b3bf";
   const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
   const search = document.querySelector('.search input')
   const button = document.querySelector('#submit')

async function checkWeather(city){

await axios.get(apiUrl + city + `&appid=${apiKey}`).then((res) => {
	 data = res.data
	console.log(data)
 }).catch((err) => {
	console.log(err)
 });

document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.feels_like)+ "°C";
document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

}

button.addEventListener('click',()=>{
	checkWeather(search.value)
})


