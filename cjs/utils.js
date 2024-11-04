function sum(a, b) {
    return a + b;
}
  
function mul(a, b) {
    return a * b;
}
  
function div(a, b) {
    if (b === 0) {
        throw new Error('You cannot divide by zero');
    }
    return a / b;
}
  
function sub(a, b) {
    return a - b;
}

export { sum, mul, div, sub };