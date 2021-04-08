function power(val, pow) {
    end *= val
    if (pow > 1) {
        power(val, pow - 1);
    }
    return end
}
var end = 1;
console.log(power(2, 1));
