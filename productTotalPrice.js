const productList = [
    { name: "Panjabi", price: 1000 },
    { name: "Pajama", price: 700 },
    { name: "watch", price: 1200 },
    { name: "shoes", price: 800 },
];

function productPrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}

const total = productPrice(productList);
console.log(total);