// ให้สร้างตัวแปร Array โดยเอาค่ามาจาก sports ในตำแหน่ง index 1 ถึง 3


const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

const array =sports.splice(1,3);

console.log(sports); //['football', 'judo']
console.log(array); //['volleyball', 'tennis', 'basketball']
