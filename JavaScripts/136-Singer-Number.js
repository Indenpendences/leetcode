const singleNumber = function (nums) {
    if (nums == null) {
        return;
    }
    let length = nums.length;
    nums.sort();
    for (let index = 0; index < length; index += 2) {
        if (nums[index] !== nums[index + 1]) {
            return nums[index];
        }
    }
};
