const express=require("express");
const app=express();
const z=require('zod');
const schema=zod.array(zod.number);
app.use(express.json()); // without this we wont get the body message in the post request

const scheme=zod.object({
    email:zod.string(),
    password:z.string(),
    name:z.string(),
    country:z.literal("IN").or(z.literal("US")),
    kidneys:z.array(z.number())
})

app.post('health-checkup',function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: 'Input is invalid'
        })
    }else{
        res.send({
            response
        })
    }
});



//global-catches-special type lof error handling middlewares,give the user a better error message.
// app.use(function(err,req,res,next){
//     errorCount++;
//     res.status(500).send('Something broke!');
//     res.json({
//         msg:'Sorry something is up with our server'
//     })
//     });
// app.listen(3000);