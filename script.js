
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

function binomialDistribution(trials, probability){
    
    if (probability < 0 || probability > 1 || trials <= 0 || trials % 1 !== 0) {
        return undefined;
    }

    let x = 0;
    let cumulativeProbability = 0;
    const distribution = [];
    let binomialCoefficient = 1;
    while (cumulativeProbability);
    {
       
        cells[x] =
            binomialCoefficient *
            Math.pow(probability, x) *
            Math.pow(1 - probability, trials - x);
        cumulativeProbability += distribution[x];
        x++;
        binomialCoefficient = (binomialCoefficient * (trials - x + 1)) / x;
      
    } 

    return distribution;
}
