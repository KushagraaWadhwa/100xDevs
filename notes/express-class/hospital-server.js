/*Your logic is like a doctor
GET:Going for a conusltation to get checkup(Fetching)
POST:Going to get a new kidney iserted(Inserting)
PUT: Going to get a kidney replaced(Updating)
DELETE: Going to get the kidney removed(Deleting)
STATUS CODES:-
200- Eveything went fine(Successful request)
404- Doctor is not av available(Not Found)
500- Mid surgery light went away(Server error)
411- Inputes were incorrect, wrong patient came to surgery(Unprocessable Entity) 
403- You were not allowed in the hospital(Forbidden request)
*/


const express=require('express');
const app=express();

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys; 
    const numberOfKidneys=johnKidneys.length;
    let numOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numOfHealthyKidneys=numOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})
app.post( "/" , function ( req , res ){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put( "/" , function ( req , res ){
if(isThereAtleastOneUnhealthyKidney()){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
    }else{
        res.status(411).json({
            msg:"You have no more unhealthy kidneys"
        })
    }
})
app.delete( "/" , function ( req , res ){
//omly if atleast 1 unhealthy kidney is there, do this else return 411
if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys=[];
    for (let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({msg:"Done!!"})
    }
    else{
        res.status(411).json({
            msg:"You have no more bad kidneys"
        })
    }
})
app.listen(3001);

//array of objects
var users=[{
    name:"John",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
console.log(users[0]);

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for (let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
            }
        }
        return atleastOneUnhealthyKidney
}