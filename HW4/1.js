'use strict'

let num = 1000;
if (num <= 999 && num >= 0) {
    let message = {
        единицы: num % 10,
        десятки: (num % 100 - num % 10) / 10,
        сотни: (num - (num % 100 - num % 10) - num % 10) / 100,
    }
    console.log(message)
} else {
    let message = {};
    console.log('Число должно быть от 0 до 999 включительно. ', message)
}
