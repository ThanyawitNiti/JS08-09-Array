// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด


let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]

// console.log(flattened[2][1])

const test = flattened.reduce( (acc,item) => {
  return acc.concat(item)
} ,[]) 
 
console.log(test)
