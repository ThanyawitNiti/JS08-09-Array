// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง


const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

names.forEach((item) => {
    console.log(item);
})

function logPerson(person,order) {
    console.log(order+1 ,person);
}

names.forEach( (item,index) =>
console.log(item+1 ,index)   
); 


names.forEach(logPerson)

