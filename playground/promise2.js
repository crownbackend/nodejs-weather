const request = require('request');
const API_KEY = require('./../config');

var geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        var addressEncoded = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=${API_KEY.GOOGLE_API_KEY}`,
            json: true,
        }, (error, response, body) => {
            // the error
            if (error) {
                reject('Connexion au serveur impossible');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Aucun résultat')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
                });
            } else {
                //
            }
        }) // fin de l'appelle

    }) // promise

};

var getWeather = (lat, lng) => {

    return new Promise((resolve, reject) => {
        
        request({
            url: `https://api.darksky.net/forecast/${API_KEY.DARKSKY_API_KEY}/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('Erreur de connexion', null);
            } else {
                resolve(null, body.currently.temperature);
            }
        });
    });
}; // fin de fonction

geoCodeAddress('La Courneuve')
    .then(location => console.log(location.lat))
    .catch(err => console.log(err))
    ;