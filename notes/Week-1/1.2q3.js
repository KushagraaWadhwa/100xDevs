//WAP that prints all the male people's first name given a complex object
complexobj=[{'firstname':'Rahul',
                'gender':'M'},
                {'firstname':'Rohan',
                'gender':'M'},
                {'firstname':'Kiki',
                'gender':'F'}

            ]
for(let i=0;i<complexobj.length;i++){
    if(complexobj[i].gender=='M'){
        console.log(complexobj[i].firstname)
    }   
}
