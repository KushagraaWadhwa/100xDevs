const express = require('express')
const app = express();  
const port = 3000

app.get('/route-handler', function(req,res){
  //headers, body, query parameters
  //do machine learning model
  res.json({
    name:"Kushagra Wadhwa",
    age: 21

  })
})


app.get('/', function(req, res){
  let a=0;
  console.log("Request has been reached");
  for (let i=0; i<100;i++){
    a=a+1;   
}                                                                                                                                                                                                                                                                                                                                                                                                                                                   i<100000000000
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
