const log = console.log;

//######## Declaration
// Array Literal แบบตรงตัว
// ' ' = Element สมาชิก
const friends = ['Palm','Money','Fon','Non'];

// แบบ constructor 
const height = new Array(150,160,175);

// ###### Access , Modify , Add , Delete
// เข้าถึงโดย Bracket Notation with index
friends[index] //index เริ่มที่เลข 0 ด้วยระบบของคอมพิวเตอร์

//Access
log(friends[0]);
log(friends[2]);
//ถ้าใส่ index ที่ไม่มีอยู่
log(friends[-2]); // == undefined

//Edit,update, Add
friends[0] = "Gold";
log(friends);
friends[1] = "Michael";
log(friends);
friends[4] = "Git"; //=> add แบบนี้ hard code
// ใส่เลขผิดจะเป็นการเขียนทับ 
//delete

delete friends[2]; //order เดิมอยู่ไม่ได้ขยับ อันดับ แต่จะเว้นว่างไว้ และค่าจะกลายเป็น undefined 


//ถ้า พยายาม update ใน index ที่ไม่มีอยู่ จะเท่ากับเป็นการ add เข้าไป
friends[-1] = "James"
log(friends);

// Basic Property and Method of Array

// <arr>.lenght return ค่าความยาว
friends[friends.length] = 'Mix'; //จะนับความยาวแล้ว add เพิ่มให้เลย
log(friends);

// for loop / lenght
//i คือแทน  index
for (let i = 0 ; i <= friends.length -1 ; i++) {
    // -1 เพราะ คอมนับ 012345 แต่จริงๆมี 6 index 
    // i <= 6 
    //i = 6 , length -1 = 5
    // หรือใช้ i < friends.length  , i < 6
}

// Method => Create read update element

const animals = ['Spider','Cat','Elephant'];

// Method > Push
// แก้อะไรให้ ให้ค่าอะไรกลับมา
// Mutable : เปลี่ยนแปลงค่าได้
// ทำให้ array mutate ไหม ยาวขึ้น
// ให้ค่าอะไรกลับมา ให้ let r = animals.push("Dog"); => return 4;
let r = animals.push("Dog");
log(animals);
log(r); // 4

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)

// .unshift เพิ่มด้านหน้า
// .pop  เด้งตัวหลังออก 1 ตัว
// .shift เด้งข้างหน้าออก , หาย

let s = animals.unshift('Snake','Bird'); //=> ช้ากว่าเพราะต้องจัดอันดับใหม่หมด
// push คือทุกคนเหมือนเดิม แค่ไปต่อท้าย
log(animals);
log(s);//6
//pop return ของที่pop หายไปให้เรา
let t =animals.pop();
log(animals);
log(t); // Dog
// shift เหมือน pop แต่เป็นด้านหน้า 


// ####### Loop Array ###########
//for
//for..in (ใช้ในobjด้วย)
//