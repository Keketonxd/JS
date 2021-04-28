

// const $cartGoods = document.querySelector('#cartGoods');
const $cart = document.querySelector('#cart');
const $goodsList = document.querySelector('#goods-list');
const $popup = document.querySelector('#popup');
const $delivery = document.querySelector('#delivery');
const $comment = document.querySelector('#comment');

const cart = [];
const goods = [];

function BuyedGood(title, price, quantity = 1) {
    this.name = title;
    this.price = price;
    this.quantity = quantity;
}

function Good(title, price) {
    this.name = title;
    this.price = price;
    this.images = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
    ]
}

function getPrice(arr) {
    return arr.reduce(function (acc, good) {
        return acc + (good.price * good.quantity);
    }, 0);
}

function getQuantity(arr) {
    return arr.reduce(function (acc, good) {
        return acc + good.quantity;
    }, 0);
}

function drawCart() {
    $cart.textContent = '';

    const p = document.createElement('p');

    if (cart.length !== 0) {
        p.textContent = `в корзине ${getQuantity(cart)} товаров, на сумму  ${getPrice(cart)} рублей`;
    } else {
        p.textContent = 'корзина пуста'
    }

    $cart.appendChild(p);
}

function drawGoods() {
    goods.forEach(function (good, i) {
        const imagesHtml = good.images.map(function (src) {
            return `<img width="30" src="${src}"></img>`
        }).join('');

        console.log(imagesHtml);
        const html = `<div class="good"><h5>${good.name}</h5><p>${good.price}</p>${imagesHtml}<button class="add" data-id="${i}">+</button><button class="delete" data-id="${i}">-</button>`;
        $goodsList.insertAdjacentHTML('beforeend', html);
    })
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        $popup.style.display = 'none';
    }
})

$goodsList.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        $popup.textContent = '';
        $popup.style.display = 'block';
        $popup.insertAdjacentHTML('beforeend', `< img src = "${e.target.getAttribute('src')}" > `);
    }
});

$goodsList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const id = Number(e.target.getAttribute('data-id'));
        const good = goods[id];

        const uniqeId = cart.findIndex(function (item) {
            return good.name == item.name;
        });

        if (e.target.className === 'add') {
            if (uniqeId < 0) {
                cart.push(new BuyedGood(good.name, good.price));
            } else {
                cart[uniqeId].quantity++;
            }
        }
        if (e.target.className === "delete") {
            if (cart[uniqeId].quantity !== 0) {
                cart[uniqeId].quantity--;
            }
        }


        if (e.target.className === 'next' && goods.length > 0) {
            $cart.style.display = 'none';
            $goodsList.style.display = 'none'
            $delivery.style.display = 'block';
        }

        // console.log(uniqeId);
        // console.log(cart);

        drawCart();
    }


});

$delivery.addEventListener('click', function (e) {
    if (e.target.className === 'next') {
        $delivery.style.display = 'none';
        $comment.style.display = 'block';
    }
})

$comment.addEventListener('click', function (e) {
    if (e.target.className === 'next') {
        $comment.innerHTML = 'Поздравляем с покупкой!';
    }
})

goods.push(new Good('Bread', 20));
goods.push(new Good('Beer', 40));
goods.push(new Good('Milk', 10));
goods.push(new Good('Eggs', 70));

// cart.push(new BuyedGood('Bread', 20, 5));
// cart.push(new BuyedGood('Beer', 40, 2));

drawCart();
drawGoods();

// console.log(cart)