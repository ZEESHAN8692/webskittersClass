// let a = [12, 22, 2, 2, 2, 3, 4, 4];
// let b = new Set(a);
// console.log(b);


let Username = [
    { name: "zeeshan" },
    { name: "ali" },
    { name: "hassan" },
    { name: "khan" },
    { name: "khan" },
    { age: 50 },
    { age: 20 },
    { age: 22 },
  ];
  
  let b = Username.reduce((acc, cur) => {
    if (cur.name.length < 5) {
      acc.push(cur.name)
    }
    if (cur.age < 25) {
      acc.push(cur.age)
    }
    return acc
  
  
  },[])
  console.log(b)