// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const newArray = [];
for (let obj of sales) {
  let price = obj.price;
  let discount = obj.discount;
  let netPrice = price;
  if (discount) {
    netPrice = price * (1 - discount);
  }
  // } else {
  //     netPrice =price;
  // }
  console.log(netPrice);
  // create new array
  const newObj = { netPrice: netPrice };
  newArray.push(newObj);
}
console.log(newArray);

const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];

const newArr2 = [];

sales.forEach((obj) => {
  //cal net price
  let netPrice = obj.price * (1 - (obj.discount || 0));
  newArr2.push({ netPrice });
});

console.log(sales);
console.log(newArr2);

sales.forEach((obj) =>
  newArr2.push({ newPrice: obj.price * (1 - obj.discount) })
);

// console.log(sales);
// console.log(newArr2);
