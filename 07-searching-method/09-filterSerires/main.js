// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter


const array1 = [9, 17, 23, 5];
const newArray = array1.filter( item => item >10)
//return num > 10 ? true : false;
//return num > 10
console.log(newArray);
// ค่าที่มากกว่า 10

const array2 = [1, 2, 3, 4];
const newArray2 = array2.filter (item => item % 2 !=0)
console.log(newArray2)
// ค่าที่เป็นเลขคี่

// 'number' 'string' 'number' 'Object'
const array3 = [1, '1', 2, {}];
const newArray3 = array3.filter(item => typeof(item) === "number")
console.log(newArray3)
// ค่าที่ประเภทข้อมูลเป็น Number

const array4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const newArray4 = array4.filter( item => item.length > 6);
console.log(newArray4)
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว


const array5 = [1, -3, 2, 8, -4, 5];
const newArray5 = array5.filter (item => item > 0)
console.log(newArray5)
// ค่าที่เป็นเลขบวก

const array6 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว

const array7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
 const filterArr7 = array7.filter((animal) => animal[0].toLowerCase() === 'e')
 console.log(filterArr7)
// ค่าที่ขึ้นต้นด้วยตัว E

const array8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const filterArr8 = array8.filter((word)=> word.toUpperCase() === word)
console.log(filterArr8)
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

/*
const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

const array = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 


const array = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
];
// id ไม่เท่ากับ 4

*/
const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6

function filterFn(personObj,index,array) {
    const month = +personObj.birth.slice(5,7)
    if (month ===6) return true;
    else return false;
}

const filterLists =array.filter(filterFn)
console.log(filterLists);