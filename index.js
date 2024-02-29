// problem 1:

// setTimeout(()=>{
//     console.log('Akash');
// }, 5000)


// problem 2
let time2 = 2000;
function delayedGreeting (name, time){
    console.log(`hello ${name}`);
}
const display = () => delayedGreeting("Alice!", 2000);
setTimeout(display, time2)