// - จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// - ตัวอย่างผลลัพธ์


let arr = ['React', 'Vue', 'Angular'];
let sorted = function copySorted(arr) {
    return arr.slice().sort()
};

console.log(sorted(arr)); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
