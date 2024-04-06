//map, filter, arrow fns
/*1---------------------------------------------*/
function sum(a,b){
    return a+b;
}
//arrow function
const sum=(a,b)=>{
    return a+b;
}
/*2---------------------------------------------*/
const input=[1,2,3,4,5];
const newArray=[];
for( let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
}
//map function
function transform(i){
    return i*2;
}
const ans=input.map(transform);
/*3----------------------------------------------*/

const arr=[1,2,3,4,5];
const newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0) {
        newArr.push(arr[i]);
    }    
    }
console.log(newArr);
//filter function

function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
const answer =arr.filter(filterLogic)
console.log((ans))