// จงหา index ใน tasks ที่มี id เท่ากับ 2


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
// expexted result: 1

let a = tasks.findIndex((item,index) =>{
    return item.id === 2
})
console.log(a)