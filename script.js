
function getMean(...sample){
    let counter= 0;
    for( let i of sample)
    {
        counter += i;
    }
    let mean = counter/sample.length;
     
    console.log(`The mean equals ${mean}`);
    
    
}

function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

function getMedian(...sample){

    let median = sample[Math.floor(sample.length/2)];
    console.log(`The median equals ${median}`);
}
 
function statBasics(...numbers){
    getMean(...numbers);
    getMedian(...numbers);
}
statBasics(10, 10, 40 );