// จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก

const arr = [
  { name: 'zohn', age: 25 },
  { name: 'Leon', age: 26 },
  { name: 'Mick', age: 29 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 }
];

// arr.sort( (a,b) => a.age - b.age)
// console.log(arr)

// const byNumber = arr.sort( (a,b) => a.age - b.age)
// // byNumBer ยังคง address เดียวกับ arr 
// console.log(byNumber)

// const byLetter = arr.sort( (a,b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if ( nameA < nameB) {
//         return -1;
//     }
//     if ( nameA > nameB ) {
//         return 1
//     }
//     return 0
// });
// console.log(byLetter)

arr.sort()
console.log(arr)