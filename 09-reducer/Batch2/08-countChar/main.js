// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

let newStr = str.toLowerCase().split('')

const accObj ={}
function reduceCb(acc,name){
  if(!acc[name]){
    acc[name] = 0
    delete acc[' ']
  }
  acc[name]++
  return acc
}

let result2 = newStr.reduce(reduceCb,accObj)
