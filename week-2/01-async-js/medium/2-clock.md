Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let d=new Date();
let hour=d.getHours();
let min=d.getMinutes();
let sec=d.getSeconds();

console.log(`Current Time: ${hour}:${min}:${sec}`);

function time(){
    sec++;
    if(sec==60){
        sec=0;
        min=min+1;
    }
    if(min==60){
        min=0;
        hour=hour+1;
        }
    console.log(hour+":"+min+":"+sec)
    }

setInterval(time,1000);