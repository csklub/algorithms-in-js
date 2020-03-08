
const buildObject = (obj) => {
    const regex = /({?)(.*?)(,|})/g;

    const createdObj = {};

    let match;
    while (match = regex.exec(obj)) {
        const finalRegex = /(.*?)(:)(.*$)/g;
        const result = finalRegex.exec(match[2]);
        createdObj[result[1]] = result[3];
    }
    return createdObj;
}

const main = (str) => {
    const regex = /\{(.*?)\}/g;

    const objects = [];
    let match;
    while (match = regex.exec(str)) {
        objects.push(match[0])
    }
    return objects.map(buildObject);
}

module.exports = main;
