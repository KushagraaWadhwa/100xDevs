let a=1;
console.log(a);

const fs = require('fs');
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log("Data read from the file is");
    console.log(data);

})
let ans=0;
for(let i=0;i<100;i++){
    ans=ans+i;
}
console.log(ans)

//1 gets printed first of all then the java thread comes to the readFile snippet and then it assigns the OS to read
// the file and it moves on to output the next snippet , even if the file might have been read in this duration the
// the readFile output has to wait in the queue for the current " for loop" to get finished and then after that
// the file content will be printed.