// Addition
function add(a, b) {
    return a += b;
}
add(3, 5);

// Subtraction
function subtract(a, b) {
    return a -= b;
}
subtract(8, 5);

// Multiplication
function multiply(a, b) {
    return a *= b;
}
multiply(2, 5);

// Division
function divide(a, b) {
    return a /= b;
}
divide(10, 2);

// Increment
function increment(n) {
    return n += 1;
}
increment(2);

// Decrement
function decrement(n) {
    return (n -= 1);
}
decrement(3);

// parseInt
function makeInt(n) {
    return parseInt(n, 10);
}
makeInt("4");

// parseFloat
function preserveDecimal(n) {
    return parseFloat (n);
}
preserveDecimal("44.93785983274");