const name= 'Rasel Sharif';
const id =20;
const isTrue = false;
const student = {
    name: "rasel",
    id: 21,
    adress: "Badda",
}
const numbers=[20,10,50,60,40,20,15,1,3];

function addNumbers(a,b){
 return a+b;
}
console.log(typeof name);
console.log(typeof id);
console.log(typeof isTrue);
console.log(typeof student);
console.log("Is it arry: ", Array.isArray(numbers));
console.log(typeof addNumbers);

const numbers01 = [1,2,3];
const numbers02 = [3,4,5];
console.log(numbers01.concat(numbers02));