// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

const nums = [1,2,3,4,5,6,7,8,9]

const filterRange = (arr,low,high) => {
    return arr.filter((n) => n >= low && n<= high);
}

console.log(filterRange(nums,4,7))

// indexof => 1 2 3 string Boolean
// obj ใช้ findindex
// include ใช้ หากับ array ได ้ return true false