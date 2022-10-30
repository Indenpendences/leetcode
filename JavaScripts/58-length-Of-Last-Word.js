const LengthOfLastWord = function (strings) {
    let stringArray = strings.trim().split(' ');
    if(stringArray.length === 0) {
        return 0;
    } else {
        return stringArray[stringArray.length - 1].length;
    }
}