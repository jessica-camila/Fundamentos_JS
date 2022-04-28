var obj = {
  a: 1, 
  b: 2, 
  c: 3
};

for (const prop in obj) {
 console.log(`obj.${prop} = ${obj[prop]}`);

}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
console.log("****")
console.log(obj.a)

console.log("****")
console.log(obj["a"])

// console.log("****")
// console.log(`${obj[a]}`)