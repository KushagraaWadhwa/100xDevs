function calculate(a,b,func){
    // 	console.log("Calculating...");
    return func(a,b);  
}
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
const value=calculate(1,6,minus)
console.log(value);
