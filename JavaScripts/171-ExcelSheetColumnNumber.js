const titleToNumber = function (string) {
    let response = 0;
    let number = 0;
    let length = string.length;
    for (let index = 0; index < length; index++) {
        number = getNum(string[leght - index - 1]);
        response += Math.pow(26, index) * number;
    }
    return response;
};

const getNum = function (character) {
    let start = "A".charCodeAt(0) - 1;
    return character.charCodeAt(0) - start;
};
