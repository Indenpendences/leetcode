var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length - 1; index++) {
    for (let temp = index + 1; temp < nums.length; temp++) {
      if (nums[index] + nums[temp] == target) {
        return [index, temp];
      }
    }
  }
  return [];
};
