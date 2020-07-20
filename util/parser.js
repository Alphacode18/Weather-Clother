const getWeatherData = require('./weather-data');

const parseWeatherData = (weatherData) => {
    const dataArray = [weatherData.name];
    Object.values(weatherData.main).forEach(data => {
        dataArray.push(data);
    })
    dataArray.pop();
    dataArray.pop();
    console.log(dataArray);
}

module.exports = parseWeatherData;