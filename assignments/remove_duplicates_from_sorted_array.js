function remove_duplicates_from_sorted_array(nums) {
  let i = 0;

  for (let j = 1 ; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i = i +1;
      nums[i] = nums[j];
    }
  }

  nums.length = i + 1;
  return nums;
}
