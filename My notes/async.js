//Aysnc JS Programming
//Callback,Promises,Async and Await

//array of objects
const obj=[
    {name:'Kushagra',gender:'Male',age:'20'},{name:'Wadhwa',gender:'Male',age:'22'}
];

function getData(){
    setTimeout(() =>{
        console.log('I am getting data');
        let output="";
        obj.forEach((data,index)=>{
            output+=<li>${data.name}</li>;

        })
        document.body.innerHTML=output

    }, 1000)
}

function createdata(){
    setTimeout(() => {
        obj.push(newdata)

    },2000);
}
createdata({name:"Kushhh",gender:"Male",age:'24'})
getData();