function two_sum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let search = target - arr[i];

    if (map.has(search)) {
      return [map.get(search), i];
    }
    map.set(curr, i);
  }
}