function calProduct(...para)
{
    return para.reduce( (n , val) => n * val);
}

console.log(calProduct(1,2,3,4));
console.log(calProduct(2,5,10));