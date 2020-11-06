
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

function guessBall(blueStart, redStart, blueTaken, redTaken){
    let blueTotal = blueStart - blueTaken;
    let redTotal = redStart - redTaken;
    return blueTotal / (blueTotal + redTotal);
}


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

//Date calculators


function getNextDay(day) {
    let nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 1)
    return nextDay
}

function buildMonth(day) {
    let daysInMonth = getDaysInMonth(day.getMonth() + 1, day.getFullYear())
    let iterableDay = new Date(day)
    iterableDay.setDate(1)
    let month = [...Array(daysInMonth)].map((_, i) => {
        let monthDay = {
            index: i,
            date: iterableDay,
            expenses: []
        }
        iterableDay = getNextDay(iterableDay)
        return monthDay
    })
    return month
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}

function displayMonth(month) {
    let monthHtml = month.reduce(function(accumulator, day) {
        return accumulator + `<div class="day">${day.date.getDate()}</div>`    
    }, '')
    document.getElementById('MonthlyExpenses').innerHTML = monthHtml
}
