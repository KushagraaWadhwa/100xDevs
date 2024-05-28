// if this is an array of strings with at least 1 input then return true else return false

// function validateInput(arr){
//     if(typeof arr==object && arr.length>=1){
// //some operation
//     }
// }

//using zod for validation

const zod=require("zod");
// function validateInput(arr){
//     const schema=zod.array(zod.number());
//     const response=schema.safeParse(arr);
//     console.log(response);
// }

// validateInput([1,2,3]);

// //checking for email and password validation
// const schema =zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(6).max(20)
// })

function validateInput(obj){
    const schema =zod.object({
        email:zod.string().email(),
        password:zod.string().min(6).max(20)
    });
    const response=schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"kushagrawadhwa22@gmail.com",
    password:"Kwadhwa@263"
});

app.post("/login",function(req,res){
    const response=validateInput(req.body);
    if(!(response.success)){
        res.json({
            msg:"You inputs are invalid"
        })
        }
        res.json({
            msg:"You inputs are valid"
            })
    });

    //https://zod.dev/
