// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

let arr = [];
let newArr = 0;
let check = true;

do {
  number = +prompt("Enter number");

  if (isNaN(number) || number == "") {
    check = false;
  } else {
    arr.push(number);
  }
} while (check);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  newArr = newArr + arr[i];
}

console.log(newArr);
