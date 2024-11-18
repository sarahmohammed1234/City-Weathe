
const countryElement = document.getElementById("country");
const cityElement = document.getElementById("city");
const degreeElement = document.getElementById("degree");

// I know I should make my private key secure, but I didn't have time to do so 🤔
const key = "2a8612c1cea1400e9de43153230503";
const getReposButton = document.getElementById('get-Weather');
const ulElement = document.getElementById('list');

getReposButton.addEventListener('click', async () => {
    const cityName = document.getElementById('cityname').value;

    const requset = async () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson.location.name);
        console.log(responseJson.location.country);
        console.log(responseJson.current.condition.icon);

        const li = document.createElement("li");
        const country = document.createElement("h1");
        const city = document.createElement("h1");
        const degree = document.createElement("h1");

        country.innerText = responseJson.location.country;
        city.innerText = responseJson.location.name;
        degree.innerText = responseJson.current.temp_c;

        li.appendChild(country);
        li.appendChild(city);
        li.appendChild(degree);
        ulElement.appendChild(li);
    };

    await requset();
});
