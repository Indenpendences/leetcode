const reverse = function (x) {
    if (x < 0) {
        return -reverse(-x);
    }

    let reversedInt = 0;
    while (x > 0) {
        let index = x % 10;
        x = Math.floor(x / 10);

        if (reversedInt >= 214748365) {
            return 0;
        }
        reversedInt = reversedInt * 10 + index;
    }
    return reversedInt;
};
