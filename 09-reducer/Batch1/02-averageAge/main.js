// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array



let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

// console.log(john.age)
// console.log(arr.age)

// Fn ที่รับ arr เข้าไปและ รีเทิน Number 
function getAverageAge(array) {
    // const getAvgAge = arr.reduce( (acc,item) => {
    //      acc + item.age / arr.length},0 )
    //      return getAvgAge
    const sumAge =array.reduce((acc,personObj)=>{ 
        let age = personObj.age
        return acc + age;
    },0)
    // algorithm = SUM age / no.person
    //อยากได้ตัวเลข ให้ กำหนดaccumulator เป้น 0 ก่อน
    return sumAge / array.length;
}
const result = getAverageAge(arr);
console.log(result)




// const getAvgAge = arr.reduce( (acc,item) => {
//     return acc + item.age / arr.length},0 )

// console.log(getAvgAge)

// function getAverageAge(array) {
  
//     const sumAge =array.reduce((acc,personObj)=>{ 
//         let age = personObj.age
//         return acc + age;
//     },0)
    
//     return sumAge / array.length;
// }
// const result = getAverageAge(arr);
// console.log(result)