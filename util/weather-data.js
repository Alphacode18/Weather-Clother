const unirest = require('unirest');

const getWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
    const request = unirest("GET", url);
    request.headers({
        "Content-Type": "application/json; charset=utf-8",
	    "accept": "application/json",
	    "useQueryString": true
    });
    request.end(function (response) {
	    if (response.error) {
            throw new Error(response.error);
        }  
	    console.log(response.body);
    });
}

module.exports = getWeatherData;