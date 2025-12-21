let car = ["BMW","SWIFT","FARRAI","BUGATTI","G-WAGON"];
let nums = [10,20,30,40,50,70,80];

console.log("\n- - - -  Car Names Using For Loop: - - - -\n");

for (let i = car.length-1  ; i >-1  ; i--)
{
    console.log(car[i])
}

let numReduce = nums.reduce( (total , n) => total + n  );
console.log("\nReduce Method In Nums Array :- " , numReduce , "\n");
