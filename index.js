// problem 1:

// setTimeout(()=>{
//     console.log('Akash');
// }, 5000)


// problem 2
// let time2 = 2000;
// function delayedGreeting (name, time){
//     console.log(`hello ${name}`);
// }
// const display = () => delayedGreeting("Alice!", 2000);
// setTimeout(display, time2)


// problem 3
function tellJoke(){
    console.log('joke');
}
const jokeInterval = setInterval(tellJoke, 2000);
setTimeout(()=>{
    clearInterval(jokeInterval);
}, 10000)