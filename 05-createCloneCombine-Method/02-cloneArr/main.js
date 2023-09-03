// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว


// const a = [1, 5, 7, 11];

// FN : รับ (arr) => return newArr
function clone(arr) { 
    // return arr; ไม่ได้
    //สร้าง varibla 
    // const newAarr = arr.slice();
    // return newAarr;
    return arr.slice();
}
const a = clone([1,2,3,4]);
// นำที่ clone ไปเก็บค่าไว้ใน a ซึ่งเป็น address ใหม่ 
console.log(a);


