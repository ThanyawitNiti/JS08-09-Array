// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] 

let startObj = {}
function reducer(acc,item){
  if(!acc[item.sex]) acc[item.sex] = []
  acc[item.sex].push(item.name)
  return acc
}
let result = persons.reduce(reducer,startObj)
console.log(result)