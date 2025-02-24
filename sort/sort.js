import { sortNum } from './num.js';

// Bubble sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}


const quickSort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  }

  const flag = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), flag, ...quickSort(right)];
}


console.log(quickSort(sortNum))
