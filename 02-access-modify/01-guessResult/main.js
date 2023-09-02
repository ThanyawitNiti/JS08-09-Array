// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร



const arr = [1, 2, 4];
const newArr = arr; 

arr[0] = 3;
console.log(newArr[0]); // * value = 3 เพราะ จะนำ 3 ไปใส่ในตำแหน่ง 0 ของ array ที่ชื่อ arr

