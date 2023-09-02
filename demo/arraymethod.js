// Clone Array
const arr = [1,2,3]
const newArr = [];
for (let i = 0 ; i< arr.length; i++) {
    newArr.push(arr[i]);
}
console.log(newArr);

// .concat (รับ  array items มาก็ได้) โดยไม่เข้าไปยุ่งกับต้นฉบับ

const newArr2 = arr.concat()
//arr เรียกใช้ method concat 
//concat ใส่ array or single items
// newarr2 = return new array
newArr2.push(3);
console.log(newArr2);

//arr.slice([strat],[end]) index start and index end
//เอาตัว start ด้วย แต่ตัว end ไม่เอา
// ถ่าไม่กำหนดปลายทางคือเอามาหมด slice()
[0,1,2,3,4,5].slice(1,3) => [1,2]


//#### splice (start index,2) เริ่ม ลบไปสองตัว
// ถ้านำตัวแปรไปรับ let r =arr.splice(0,2);
// จะ return ตัวที่ถูกตัดทิ้งไป ให้ r 
// start ,deletecount ,insertElement

//Map
//<array>.map(callback)
[2,5,10].map((item,index,array) =>item*2)
 
//create newArr =[]
//1st loop(item=2) :newArr.push(2*2)
//2nd loop(item=5) :newArr.push(5*2)
//3rd loop(item=10) :newArr.push(10*2)
//return new Arr

let lengths =['bible','dddddd','ccccccc'].map((item) => item.length);

//Searching in array

