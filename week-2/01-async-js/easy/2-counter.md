## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;

function count() {
  counter++;
  console.log(counter);
  setTimeout(count, 1000);     # calls the count function again and again after every second
}

count();   #initial call to start the count function 





































































(Hint: setTimeout)