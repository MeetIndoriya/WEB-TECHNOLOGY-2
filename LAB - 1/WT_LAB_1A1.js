const BirthDate = new Date("2006-12-11");
const currentDate = new Date();

console.log(currentDate);
console.log (" Age: " + (currentDate.getFullYear() - BirthDate.getFullYear()));
console.log (" Age: " + (currentDate.getMonth() - BirthDate.getMonth()));
console.log (" Age: " + (BirthDate.getDate()- currentDate.getDate()));

