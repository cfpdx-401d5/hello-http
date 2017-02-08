const cowsay = require('cowsay');

function greetUser(data) {
    let name = data.name || 'Stranger';
    let salutaion = data.salutaion || 'Hello';
    let format = data.format;

    if (format) {
        return cowsay.say({
            text: `${salutaion}, ${name}!`,
            e: 'oO',
            T: 'U'
        });

    } else {
        return `${salutaion}, ${name}!`;
    }
}


module.exports = greetUser;