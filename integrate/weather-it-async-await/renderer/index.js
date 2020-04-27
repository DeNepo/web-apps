'use strict'

const boxen = require('boxen');

function renderError(message) {

    const boxedMessage = boxen(
        message,
        {
            backgroundColor: '#830b00',
            borderColor: 'yellow',
            borderStyle: 'bold',
            padding: 3
        }
    );

    console.log(boxedMessage);
}

function renderSuccess(...messages) {

    const combined = messages.join('\n');

    const boxedMessage = boxen(
        combined,
        {
            backgroundColor: '#376400',
            borderColor: 'blue',
            borderStyle: 'round',
            padding: 1
        }
    );

    console.log(boxedMessage);
}

module.exports = {
    renderError,
    renderSuccess
}
