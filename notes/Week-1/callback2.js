function calculate(a, b, func) {
    console.log("Calculating...");
    return func(a, b);
}

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

setTimeout(function() {
    const result = calculate(1, 6, minus);
    console.log(result);
}, 5000);
