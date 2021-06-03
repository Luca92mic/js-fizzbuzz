var numeri = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        numeri.push(i + " FizzBuzz");
    } else if (i % 3 == 0) {
        numeri.push(i + " Fizz");
    } else if (i % 5 == 0) {
        numeri.push(i + " Buzz");
    } else {
        numeri.push(i);
    };
}

document.getElementById("multipli").innerHTML = numeri;