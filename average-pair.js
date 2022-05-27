"use scrict";

// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {
  if (nums.length === 0) {
    return false;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let calc = (nums[start] + nums[end]) / 2;
    if (calc > targetAvg) {
      end -= 1;
    }
    else if (calc < targetAvg) {
      start += 1;
    }
    else {
      return true;
    }
  }
  return false;
}
