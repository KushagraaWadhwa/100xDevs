function sum(num1,num2,fnToCall){
    let result=num1+num2;
    fnToCall(result);  
}
function printSum(ans){
    console.log("The sum of the numbers is:"+ans);
}

const ans=sum(10,12,printSum) //Called "callbacks"
 //A function is sent as an argument to the function
//that will be called when we call 'sum' with the parameters
