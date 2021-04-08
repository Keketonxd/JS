function sum(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

function mul(a, b) {
    return (a * b);
}

function div(a, b) {
    return (a / b);
}



function mathOperation(arg1, arg2, operation) {
    var res = 0;
    switch (operation) {
        case (sum):
            res = sum(arg1, arg2);
            break;
        case (sub):
            res = sub(arg1, arg2);
            break;
        case (mul):
            res = mul(arg1, arg2);
            break;
        default:
            res = div(arg1, arg2)
    }
    return (res)
}

console.log(mathOperation(1, 2, sum))
