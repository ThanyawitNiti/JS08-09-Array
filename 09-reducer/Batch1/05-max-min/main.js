// จงหาค่ามากสุดและน้อยสุดใน arr


let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// const max = arr.reduce((acc,item)=> {
//     if (acc < item) {
//         acc = item
//     } 
//     console.log(acc)
//     return acc
// },0)
// console.log(max)

const min = arr.reduce((acc,item)=> {
    if (acc > item) {
        acc = item
    } 
    console.log(acc)
    return acc
})
console.log(min)