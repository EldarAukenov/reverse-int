module.exports = function reverse(n) {
    const isNegative = n < 0;
    const absN = Math.abs(n);
    const reversed = Number(absN.toString().split("").reverse().join(""));
    return isNegative ? reversed : reversed * Math.sign(n);
};
