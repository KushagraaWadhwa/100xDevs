// Write a program that reverses all the elements in an array
a=[1,2,3,4,5,6,7,8,9,10]
b=[]

for(let i=a.length-1;i>=0;i--){
    b.push(a[i])
    console.log("Element " + a[i] + " Just entered the new array!!")
}
console.log("The New Array is: "+ b)