// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name


const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

const inintObj = {}
function reduceFn(acc,item){
    if(!acc[item.id]) acc[item.id] = item
    return acc
}
let result = products.reduce(reduceFn,inintObj)


let result3 = products.reduce((acc,item)=>{
    console.log(item)
    if(!acc[item.id]) acc[item.id]=item
    return acc
  },{})
  
  console.log(result3)