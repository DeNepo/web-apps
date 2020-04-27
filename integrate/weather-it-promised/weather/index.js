'use strict'

const fetch = require('node-fetch')

const weatherAPIKey = require('../config').WEATHER_API_KEY

/**
 * @typedef WeatherData
 *
 * @property {object} location
 * @property {string} location.name
 * @property {string} location.country
 *
 * @property {object} condition
 * @property {string} condition.text
 */

/**
 * @param {string} cityName
 * @returns {Promise<WeatherData>}
 */
function getWeatherForCity (cityName) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${cityName}`)
        .then(response => response.json())
        .then(response => {

            if (response.error) {
                if (response.error.code === 1006) {
                    return {
                        success: false,
                        error: `City ${cityName} not found, please check input.`
                    }
                }

                return {
                    success: false,
                    error: response.error.message
                }
            }

            return {
                success: true,
                data: {
                    location: {
                        name: response.location.name,
                        country: response.location.country,
                    },
                    condition: {
                        text: response.current.condition.text
                    }
                }
            }
        })
}

module.exports = {
    getWeatherForCity
}
