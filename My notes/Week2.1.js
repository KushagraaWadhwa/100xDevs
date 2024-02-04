console.log("Hi")//1

setTimeout(function(){//2
    console.log("Hi there from inside")
},3000)

console.log('after')//3
for(let i=0;i<10;i++){
    i=i+1
}

// gets called in the call stack and is run then setTimeout is called and it starts the timer for 3 seconds
//and the thread continues to operate and goes to part 3 where it starts runing the loop, meanwhile the timer is over
//and the 2 part is ready to be run it waits for the the thread in the Callback queue for the loop to finish first
//and then gets called into the call stack.
