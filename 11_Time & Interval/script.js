// Use setTimeout to show "Surprise!" after 3 seconds.
setTimeout(function () {
    console.log("Surprise!");
    
},3000)

//Use setInterval to print "Tick..." every second in console.
// let ans= setInterval(function () {
//     console.log("Tick...");

// }, 1000)
    // clearInterval(ans)


//Make a countdown from 10 to 1, then show "Time’s up!".
let count = 10 ;
let answer =setInterval(function () {
    if (count >= 1 ) {
        count --;
        console.log(count);        
    }else {
        console.log("Time’s up!");  
          clearInterval(answer);
    }
    
},1000)