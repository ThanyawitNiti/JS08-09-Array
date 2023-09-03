// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries


const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
// expected result: { name: 'cherries', quantity: 5 }

// let a1 = inventory.find( function(item) {
//     return  item.name === 'cherries' && item.quantity === 5 
//     })
//     console.log(a1)



let a = inventory.find( (item) => {
return item.name === 'cherries' && item.quantity === 5 


})

console.log(a)