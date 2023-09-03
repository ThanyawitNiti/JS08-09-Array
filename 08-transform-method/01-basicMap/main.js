// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)


const array = [1, 2, 30, 400];
const newArr =array.map(x=>2*x);
console.log(newArr)
// result: [2, 4, 60, 800]

const array2 = [1, 2, 3, 4];
const newArr2 =array2.map(x => x)
console.log(newArr2);
// result: ["1", "2", "3", "4"]

const array3 = [1, '1', 2, {}];
const newArr3 =array3.map(x => typeof(x))
console.log(newArr3);
// result: ["number", "string", "number", "object"]

const array4 = ['apple', 'banana', 'orange'];
const newArr4 =array4.map(x=> x.toUpperCase() ) 
console.log(newArr4);
// result: ["APPLE", "BANANA", "ORANGE"]

const array5 = [1, 3, 4, 5, 6, 7, 8];
const newArr5 = array5.map( function(x) {
if (x % 2 == 0) return "even"

 else return "odd"


})
console.log(newArr5)
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array6 = [1, -3, 2, 8, -4, 5];
const newArr6 = array6.map( function(x) {
if (x <0 ) return x = x*-1 
else  return x

})
console.log(newArr6)
// result: [1, 3, 2, 8, 4, 5]

const array7 = [100, 200.25, 300.84, 400.3];
const newArr7 = array7.map( function(x) {
return x.toFixed(2) 

})
console.log(newArr7)
// result: ["100.00", "200.25", "300.84", "400.30"]

const array8 = [0, 5, 10, 7, 6, 5, 0];
const months8 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const newArr8 = array8.map ( monthIndex => months8[monthIndex])

console.log(newArr8)

// const array8 = [1, 5, 10, 7, 6, 5, 1];
// const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// const newArr8 = array8.map ( monthIndex => months[monthIndex-1])

// console.log(newArr8)

// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array9 = [1, 16, 81, 256, 625, 1296];
const newArr9 =array9.map((n) => Math.sqrt(Math.sqrt(n)));
console.log(newArr9);
// result: [1, 2, 3, 4, 5, 6]

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const newArr10 =array10.map( function(fruitObj) {
  console.log(fruitObj.name)
  return fruitObj.name

})
console.log(newArr10);
// // result: ["apple", "banana", "watermelon"]

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const newArr11=array11.map(function(ageObj) {
  return ageObj.age
})

console.log(newArr11)
// // result: [14, 18, 32]

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const newArr12 = array12.map( function (arrObj) {
  return `${arrObj.name} ${arrObj.surname}`
})
console.log(newArr12)

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
const newArr13 = array13.map(function(fruitObj) {
  console.log(fruitObj);
  const newFruitObj = Object.assign({},fruitObj);
  const fullYear = +fruitObj.birth.slice(0,4);
  console.log(fullYear)
  console.log(newFruitObj)
  newFruitObj.age = 2021 - fullYear;
  return newFruitObj

});
console.log(newArr13)
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const newArray14 = array14.map(function (obj) { 
  // retrieve value from each obj
  let name = obj.name; 
  const day = obj.birth.slice(-2); 
  const monthIndex = obj.birth.slice(-5, -3) - 1; 
  const year = obj.birth.slice(0,4); 
  // create string 
  const resultString = `<tr <td>${name}</td> <td>${day} ${months [   
    monthIndex].toLowerCase()} ${year}</td> </tr>`;
  return resultString; 
});
console.log(newArray14)
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]

