// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก



const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89


const totalSum = scores.reduce((a,c) => a + c.score * c.weight,0);

console.log(totalSum)