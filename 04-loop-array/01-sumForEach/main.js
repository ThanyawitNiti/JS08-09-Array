// จงหาผลรวมของ element ใน array โดยใช้ forEach

const array = [29, 17, 13, 47, 23, 31];

let sum = 0;
array.forEach( (item) => { 
    sum +=item;
    // sum = sum + index;
    console.log(sum);
});

