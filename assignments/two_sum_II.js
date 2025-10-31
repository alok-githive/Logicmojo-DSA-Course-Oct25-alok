function twoSumII(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end = end - 1;
    } else if (numbers[start] + numbers[end] < target) {
      start = start + 1;
    } else {
      return [start + 1, end + 1];
    }
  }
}