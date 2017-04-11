const factArray = ["Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989."]

function sendFacts() {
    let stringArray = JSON.stringify(factArray);
    return stringArray;
}

function addFacts(data) {
    data = JSON.parse(data);
    factArray.push(data.message);
    let newArray = factArray;
    let length = newArray.length;
    return newArray[length - 1];
}

module.exports = {
    addFacts,
    sendFacts
}