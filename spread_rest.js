function listName(a,b,c,d){
    console.log(`Hi to you: ${a}, ${b}, ${c} and ${d}`);
} 
const nameArr = ['fred', 'dom', 'ken', 'bob','Eli']
//listName.apply(null, nameArr);

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = []
//arr3.push(arr1,arr2);
//arr3.push(...arr1,...arr2);
arr3.push.apply(arr3,arr1);
arr3.push.apply(arr3,arr2);
//arr3 = [...arr3, ...arr1, ...arr2]
console.log(arr3);