const longestCommonPrefix = function (strings) {
    let prefix = "";
    if (strings.length == 0 || strings === null) {
        return prefix;
    }
    for (let index = 0; index < strings[0].length; index++) {
        const char = strings[0][index];

        for (let jndex = 1; jndex < strings.length; jndex++) {
            if (strings[index][jndex] !== char) {
                return prefix;
            }
        }
        prefix = prefix + char;
    }
    return prefix;
};
