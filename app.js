const yargs = require('yargs');
const geocode = require('./geocode/geoCode');
const weather = require('./weather/weather');

const argv = yargs
    .option({
        a: {
          demand: true,
          alias: 'address',
          describe: 'Adresse dont on veut obtenir les coordonnées',
          string: true
        },
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv.address);

geocode.geoCodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.lat, results.lng, (errorMessage, response) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log('La temperature actuelle pour : ' + response + '');
            }
        })
    }
})