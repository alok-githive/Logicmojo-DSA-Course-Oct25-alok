function container_with_most_water(n, height) {
  let i = 0;
  let j = n - 1;
  let maxArea = Math.min(height[i], height[j]) * (j - i);

  while(i < j) {
    let currArea = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(currArea, maxArea);

    if (height[i] > height[j]) {
      j--;
    } else if (height[i] < height[j]){
      i++;
    } else {
      i++;
      j--;
    }
  }

  return maxArea;
}
