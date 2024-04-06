//creating an HTTP  server
//express

const express=require('express');

const app = express();

function sum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get("/",function(req,res){
    const n=req.query.n;
    const ans= sum(n);
    res.send("The Sum of number is "+ans)
    res.send("Hi there");
})

app.listen(3000);


//query parameters-get request
//body-post request
