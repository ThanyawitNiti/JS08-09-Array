// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

const a = "background-color"
const b = a.split("-c"); // split ด้วยอะไร ('') แยกเป็นตัวอักษรเลย , (', ') วิ่งหา, กับ ช่องว่าง
console.log(b)

let c = b.join('C'); //join ด้วยอะไร 
console.log(c)

//
const str ="background-color"
const arr =str.split("-")
const resultStr = arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1);

let fullName = "Barack Obama"
//b O.
const arr2 =fullName.split(" ")

let result = ""
arr2.forEach((word,index)=>result += word[0].toUpperCase()+ ".")

console.log(result)

// const str = 'background-color-white';

// const arr = str.split('-'); // ["background","color"]

// let result = '';
// arr.forEach((word, index) => {
//     if (index == 0) {
//         result += word;
//     } else {
//         result += word[0].toUpperCase() + word.slice(1);
//     }
// });

// result;

// // const arr1 = str.split("-")
// // arr1