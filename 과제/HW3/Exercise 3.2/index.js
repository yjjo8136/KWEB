const compare = (a,b) => {
    return a-b;
}

const getDivisors = num => {
    divisors = [];
    for (let i=1; i<=Math.sqrt(num); i++) {
        if (num%i == 0) {
            divisors.push(i);
            if (i*i != num)
                divisors.push(num/i);
        }
    }
    return divisors.sort(compare);
}

console.log(getDivisors(5));
console.log(getDivisors(24));
console.log(getDivisors(196));