// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

arr.forEach((item, index) => {
  arr[index] = item ** 2;
});

const arr2 = [2, 3, 5, 7, 11];

function squareArr() {
  const newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i] ** 2);
  }
  return newArr;
}

let newArray = squareArr();
