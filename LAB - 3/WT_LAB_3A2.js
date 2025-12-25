const user = [{ name: "Meet", age: 19 }, { name: "Vivek", age: 20 }, { name: "Keval", age: 23 }];

[name, age] = [
    user.map(({ name }) => name),
    user.map(({ age }) => age)
];

console.log(name);
console.log(age);
