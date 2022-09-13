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
let nameArray = ["okoth","cynthia"];
let lt = nameArray.splice(0,1);


let input = [1, "Turing",{x:2},[3,4]];
delete input[1];
console.log(input.length);


for(let i=0; i<input.length; i++){
    if(input[i]=="Turing"){
        input.splice(i,1);
    }
    else{
        console.log(input[i]);
    }
}
console.log(lt);

