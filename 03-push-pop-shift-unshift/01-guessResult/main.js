// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร


let fruits = ['Apples', 'Pear', 'Orange'];

let shoppingCart = fruits;
shoppingCart.push('Banana');
// what's in fruits?
console.log(fruits.length); // * 4 เพราะ เพิ่ม banana เข้าไปเป็น index ที่ 3 แต่เพราะ lengthจะนำความยาวออกมา ทำให้ เป็น 4
