module.exports = function reverse (n) {
    const numbers = [...n.toString().replace(/\D/, '')];
    return +numbers.reverse().join('');
}
