// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

let str = "31 45 12 67 34 86 23 37 19 41";
let strArr = str.split(" ");

let sum = strArr.reduce((a, c) => {
  if (c < 40) {
    return +a + +c;
  }
  return a;
}, 0);

console.log(sum);//156
