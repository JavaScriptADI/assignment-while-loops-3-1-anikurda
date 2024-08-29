// FuzzBizz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else { console.log(i) }
}

// 100 Random num

// Sum of even numbers 1 - 1,000
let sum = 0;
for (let i = 2; i <= 1000; i += 2) {
    sum += i;
}
console.log(`Sum of All Even Numbers from 1 to 1,000 is: ${sum}`);

// Sum of all divisible by 3 or 5
let sumOr = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sumOr += i;
    }
}
console.log(`Sum of All Numbers from 1 to 1,000 divisible by 3 or 5 is: ${sumOr}`);

// Sum of all divisible by 3 and 5
let sumAnd = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sumAnd += i;
    }
}
console.log(`Sum of All Numbers from 1 to 1,000 divisible by 3 and 5 is: ${sumAnd}`);