// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

function calculateAverage(scores) {
    let sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
}

function determineWinner(dolphins, koalas) {
    let dolphinsAverage = calculateAverage(dolphins);
    let koalasAverage = calculateAverage(koalas);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        console.log(`Koalas win with an average score of ${koalasAverage}`);
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
        console.log(`It's a draw with both teams scoring an average of ${dolphinsAverage}`);
    } else {
        console.log("No team wins the trophy");
    }
}

// Test data
let dolphins1 = [96, 108, 89];
let koalas1 = [88, 91, 110];
determineWinner(dolphins1, koalas1);

let dolphins2 = [97, 112, 101];
let koalas2 = [109, 95, 123];
determineWinner(dolphins2, koalas2);

let dolphins3 = [97, 112, 101];
let koalas3 = [109, 95, 106];
determineWinner(dolphins3, koalas3);