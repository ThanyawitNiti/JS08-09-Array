// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// console.log(tasks[0].id)


function deleteTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      delete tasks[i];
      // console.log(tasks)
      return tasks;
    }
  }
}

console.log(deleteTask(2));
