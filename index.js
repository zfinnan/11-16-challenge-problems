function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;

    for (let i = 0; i< str.length; i++) {
        let char = str[i]; 

        if (char === 'P' || char === 'Q') {
            currentStreak +=1;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }
    return longestStreak
}

function commonFactors(num1, num2) {
    let result = [];

    for(let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result.push(i);
        }
    }
    return result;
}