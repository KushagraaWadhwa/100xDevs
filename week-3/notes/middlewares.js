const express= require('express');
const app= express();
 
function userMiddleware(req,res,next){  
    if(username!=Kushagra && password!==pass){
        res.send("Invalid Credentials");
        res.status(403).json({
            msg:"Incorrct inputs",
        });
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){  
    if(kidneyId!=1 && kidenyId!=2){
        res.status(403).json({
            msg:"Incorrct inputs",
        });
    }else{
        next();
    }
};

app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
    //
    res.send("Your kidney is healthy");
})
