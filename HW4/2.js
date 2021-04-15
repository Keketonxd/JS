'use strict'

// a) Словарями.

// b) 
let id = 0;
let total_price = 0;
let result = 0;

function cart_add(title, price, quantity) {
    this.id = id++;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.total_price = price * quantity;
    result += price * quantity
}

const your_cart = [];

your_cart.push(
    new cart_add('cars', 123, 3)
)
your_cart.push(
    new cart_add('lego', 400, 1)
)
your_cart.push(
    new cart_add('dolls', 15, 10)
)

// for (let i of your_cart){
//     result += your_cart[i].total_price
// } 
// Хотел подсчитать результат отдельно, но не смог обратиться верно к пунктам тотал прайс внутри your_cart.

console.log(result)
