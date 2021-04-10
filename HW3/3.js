let cart = [1000, 12314, 156, 1125, 1365];

function new_product(price) {
    cart.push(price);
}

function countBasketPrice(array) {
    let sum = 0;
    array.forEach(function (el) {
        sum += el;
    });
    return sum;
}

console.log(countBasketPrice(cart))
