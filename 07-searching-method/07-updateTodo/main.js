// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

//searchByid
const foundIndex = tasks.findIndex((obj,index) => obj.id == 2)
console.log(foundIndex) // index 1 , id =2
//findIndex 
// The index of the first element in the array that passes the test. Otherwise, -1.
//founindex =1
if (foundIndex!= -1) {
    tasks[foundIndex].name ="traveling"
}
console.log(tasks)

function updateTask(id,newTask){
    const foundIndex = tasks.findIndex((obj,index) => obj.id == id)
    if (foundIndex!= -1) {
        tasks[foundIndex].name =newTask
    
}
return tasks
}
console.log(updateTask(2,'traveling'))


// function updateTask(id,newTask){
//   const foundIndex = tasks.findIndex((obj,index) => obj.id == id)
//   if (foundIndex!= -1) {
//       const newTodo = Object.assign({},tasks[foundIndex])
//       newTodo.name =newTask
//       tasks.splice(foundIndex,1,newTodo)
// }
// return foundIndex
// }

// // console.log(foundIndex)
// console.log(updateTask(2,'travelling'))




