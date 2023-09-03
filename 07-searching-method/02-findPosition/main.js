// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

//loop ครบ ทุก lists 
//indexof เจอแล้วหยุด ทำยังไงให้ ค้นหาต่อ
// loop

const resultArr = [];
for (let index in alphabets) {
    // console.log(index,alphabets[index])
    if(alphabets[index] === 'a' ) 
    resultArr.push(+index)
    
}

// alphabets.forEach((char,index)=>{
//     if(char==='a') resultArr.push(+index)
// })



console.log(resultArr);