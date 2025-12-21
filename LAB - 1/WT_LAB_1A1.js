const BirthDate = new Date("2006-12-11");
const currentDate = new Date();

console.log(currentDate);
console.log(" Age ( Years ): " + (currentDate.getFullYear() - BirthDate.getFullYear()));
console.log(" Age ( Month ): " + (currentDate.getMonth() - BirthDate.getMonth()));
console.log(" Age ( Days ): " + (currentDate.getDate() - BirthDate.getDate()));

