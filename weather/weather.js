const request = require('request');
const API_KEY = require('./../config');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${API_KEY.DARKSKY_API_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Erreur de connexion', null);
        } else {
            callback(null, body.currently.temperature);
        }
    });
}; // fin de fonction

module.exports = {
    getWeather
};