// จงหา unique array element ของ alphabets 

let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


const result = alphabets.reduce ((acc,char)=>{
// มี character ตัวนั้นอยู่ใน acc แล้วไม่ต้อง push 
// ถ้าไม่มี character นั้นอยู่ใน acc แล้ว => push
// step 1: found = false 
//search
let found = false ;
// step 2 : for loop not working because acc does not have el yet
for (let c of acc ){
// step 2.1 : when acc have el 
    if (c==char) found =true ;
}
//step 3 : toggle found false to ture for pushing char,which is el of alphabets,to acc
//action
if (!found) acc.push(char);
//return
return acc;
},[])

console.log(result);

// Set object lets you store unique values of any type
const set = new Set(alphabets);
console.log(set);
// constructor creates Array objects.
const newArr =new Array(...set);
console.log(newArr)