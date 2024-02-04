//max element in an array
let a=[1,2,43,42,5,26,7,18,9,10];
let max=a[0];

for(let i=1;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log(max);
