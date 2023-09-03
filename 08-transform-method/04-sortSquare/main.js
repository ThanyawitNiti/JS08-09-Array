// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก


const arr = [-3, 2, 0, -7, 4, 6];
const newArr = arr.map( (el) => el**2 )
console.log(newArr)

newArr.sort((a,b) => a-b)

console.log(newArr)