// ผลจากการรันคำสั่งในบรรทัด * คืออะไร


let arr = ["a", "b"];

arr.push(function() {
  alert(this); 
})

arr[2](); // * a , b ,fucntion {alert(this);}

//arr.push(function()) หลังจบนี้
// arr จะสมาชิก 3 ตัว ['a','b', function(){alert(this);}]
// arr[0]
// arr[1]
// arr[2]() ตามด้วยฟังก์ชัน () เหมือน call function
// จะ slove ค่า this 
// this == caller  เลย alert arr ออกมา