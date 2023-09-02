//######## Loop
//for loop
// Imparative ต้องคอยบอกทีละสเตป กำหนด i เอง
const animals = ['Dog','Cat','Fish','Bee']
for (let i=0 ;i < animals.length; i++){
    console.log(animals[i]);

}

// For ..in (มอง  array เป็น obj ประเภทหนึ่งได้)
// ไม่ต้อง กำหนด i เอง
/*

const arr = {
    0 : ''Dog',
    1: 'Cat',
    2:'Fish',
    3: 'Bee',
} */

// for (let key in animals) {
//     console.log(key); // 0 1 2 3 4
//     //ปกติใช้คำว่า index แทน key 
//    
// }
for (let index in animals) {
    console.log(index,animals[index]);
}

// for ... of 
// เอาตัวสมาชิกมา ไม่ได้นำตัวเลข(index)มาด้วย ต่างจาก for in ที่เอา index มาด้วย
for (let element of animals) {
    // 1st element = 'DOg'
    // 2nd element = 'Cat'
    // 3rd element ='Fish'
    // 4th element = 'Bee'
    console.log(element);
}

const items = ['Football', 'Bag' , 'Dish','Fork'];
// forEach
//Syntax : <array>.forEach(FN)
//array == caller 
// Higher order FN ==forEach( รับพารามิเตอร์เป็น FN)

//items.forEach(function () {}  )

items.forEach(function () {
// calledback ถูกเรียกใช้ตามจำนวนสมาชิกใน array 
    console.log('Hi') // Hi ออกมา 3 

}  );

// iterateFN() ฟังก์ชันที่ใช้กับสมาชิกแต่ละตัว
function myFunc() {
    console.log('Hello')
}
items.forEach(myFunc);

// มีพารามิเตอร์เป็น a

function myFunc(a) {
    console.log(a)
}
items.forEach(myFunc);

const iterateFN =(item) => console.log(item);
// const iterateFN =(element) => console.log(element);
items.forEach(iterateFN);
//1st loop : ('Football') => console.log('Football')
//1st loop : ('Bag') => console.log('Bag')
//1st loop : ('Dish') => console.log('Dish')
//1st loop : ('Fork') => console.log('Fork')

// const iterateFN =(a,b,c) => console.log(item);
// ไม่ว่าจะตั้งชื่ออะไรก็ตาม จะโยน โดยเรียงตามนี้

// a element
// b index
// c array
// items.forEach(iterateFN);
// forEach จะรัน ตามจำนวนสมาชิกหรือ items หรือ element ของ array ฟังก์ชันที่ส่งไปให้ forEach รัน ตัวแรกจะเป็น items หรือ element เสมอ

items.forEach ( (a,b,c) => {
    console.log(`At index ${b} element ${a}`)
});



// Higher order function
function add(x,y){
    return x+y;
}
console.log(add(5,6));

// function expresstion : FN as a value 
// const a = console.log;
// const b = alert;
// a('hi');
// b('Hello');
// เรากำลังจะสร้าง FN ที่รับ parameter (input) เป็น function
// show FN เรียก callback จะไม่ถูกรันเลยถ้า addAndShow ไม่รัน
function addAndShow(x,y,showFN) {
    let result = x+y;
    //before ก่อนเรียก result ให้ called FN 
    showFN();
    return `this is ${result} of x + y`;
}

// function show() {
//     console.log('Magicword');
// }

// addAndShow(5,10,show);
// จะเกิดอะไรถ้า show(result) / showFn() จะออกมาเป็น result 

show = () => {
    console.log('this FN show result in ShowFN() in addAndShow()');
}

// }
console.log(addAndShow(5,10,show));

// x assign = 5
// y assign = 10
// showFN() =show()

// let result = 5+10;
// show()
// return 15




/*



*/