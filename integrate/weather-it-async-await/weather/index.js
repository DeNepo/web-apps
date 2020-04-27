'use strict'

const fetch = require('node-fetch')
const terminalImage = require('terminal-image');
const jimp = require('jimp');

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
 * @property {string} condition.icon
 */

/**
 * @param {string} cityName
 * @returns {Promise<WeatherData>}
 */
async function getWeatherForCity (cityName) {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${cityName}`)
    const jsoned = await response.json()

    if (jsoned.error) {
        if (jsoned.error.code === 1006) {
            return {
                success: false,
                error: `City ${cityName} not found, please check input.`
            }
        }

        return {
            success: false,
            error: jsoned.error.message
        }
    }

    const icon = await getIcon(`https:${jsoned.current.condition.icon}`)

    return {
        success: true,
        data: {
            location: {
                name: jsoned.location.name,
                country: jsoned.location.country,
            },
            condition: {
                text: jsoned.current.condition.text,
                icon: icon
            }
        }
    }
}

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
async function getIcon(url) {

    const iconResponse = await fetch(url)
    const iconData = await iconResponse.buffer()

    const jimpImage = await jimp.read(iconData)
    const resizedIcon = await jimpImage.resize(12, 12)
        .quality(100)
        .getBufferAsync(jimp.MIME_JPEG)

    return await terminalImage.buffer(resizedIcon)
}

module.exports = {
    getWeatherForCity
}
