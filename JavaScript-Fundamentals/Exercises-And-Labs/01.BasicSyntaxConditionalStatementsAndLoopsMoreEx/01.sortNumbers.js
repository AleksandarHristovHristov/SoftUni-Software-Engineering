function sortNumbers(firstNum,secondNum,thirdNum){
  let arr = [];
  arr.push(firstNum,secondNum,thirdNum);

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
sortNumbers(5,6,13)