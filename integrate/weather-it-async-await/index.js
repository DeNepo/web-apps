'use strict'

const weather = require('./weather')
const renderer = require('./renderer');

(async function () {

    const rawInputs = process.argv
    const cleanedInputs = rawInputs.slice(2)

    const inputCity = cleanedInputs[0]

    if (!inputCity) {
        renderer.renderError('Please input a city name.')
        process.exit(1)
    }

    try {
        const weatherData = await weather.getWeatherForCity(inputCity)

        if (!weatherData.success) {
            renderer.renderError(weatherData.error)
            return
        }

        const location = weatherData.data.location
        const condition = weatherData.data.condition

        renderer.renderSuccess(
            `${location.name}, ${location.country}`,
            condition.text,
            condition.icon
        )
    } catch (error) {
        renderer.renderError(error.message)
        process.exit(1)
    }


})()
