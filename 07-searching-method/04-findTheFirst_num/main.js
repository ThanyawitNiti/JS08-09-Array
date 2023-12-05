// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0


const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

// let a = nums.find( function(item) {
//     return item <0 
// })

let a = nums.find( (item) =>{
    return item <0 }
)
