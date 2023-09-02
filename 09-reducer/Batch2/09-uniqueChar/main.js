// จงหา unique array element ของ alphabets 



let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


const result = alphabets.reduce ((acc,char)=>{

// มี character ตัวนั้นอยู่ใน acc แล้วไม่ต้อง push 
// ถ้าไม่มี character นั้นอยู่ใน acc แล้ว => push

//char =='f'
// acc== ['a','b']

//search
let found = false ;
for (let c of acc ){

    if (c==char) found =true ;
}
//action
if (!found) acc.push(char);
//return
return acc;

},[])
console.log(result);

const set = new Set(alphabets);
console.log(set);

const newArr =new Array(...set);
console.log(newArr)