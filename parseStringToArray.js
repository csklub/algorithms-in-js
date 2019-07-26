// Also, read disclaimer down. 
// Plain string without whitespaces. 
const yourString = "{name:Ezrqn Kemboi,regNumb:1,startedAt:2018/06/04,fellow:true,totalPriceGiven:$88.08},{name:Gitau Moses,regNumb:2,startedAt:2018/09/23,fellow:true,totalPriceGiven:$100.10}";

/**
 *  If string contains whitespaces such as tabs, new line
 *  const removeWhitespacesReg = /\s/g
*/

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

const main = () => {
    const regex = /\{(.*?)\}/g;

    const objects = [];
    let match;
    while (match = regex.exec(yourString)) {
        objects.push(match[0])
    }
    return objects.map(buildObject);
}

main(yourString);

// Worked on this with Moses Gitau [https://github.com/gitaumoses4]