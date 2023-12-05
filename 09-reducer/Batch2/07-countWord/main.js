// จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const inintObj = {};
function redeuceFn(acc, name) {
  if (!acc[name]) acc[name] = 0;
  acc[name]++;
  return acc;
}

let result = names.reduce(redeuceFn,inintObj)