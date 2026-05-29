// Imorting module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// // the upper await will make the bottom to wait and also use out side the async
// console.log('Something');
/*
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLastPost();
console.log(lastPost);

//Not very clean
// lastPost.then(last => console.log(last));

// top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

// so we know that when we use async it returns promise so we have to use await outside to get data



const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`)
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);

// so we can acces the addtocart as it 

*/
//

// Introduction to npm
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
    { product: 'apples', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve('TEST').then((x) => console.log(x));

import 'core-js/stable';
import 'regenerator-runtime/runtime';
