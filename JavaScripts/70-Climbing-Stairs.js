const cache = {
    0: 1,
    1: 1,
};

const climbStairs = function (n) {
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
};
