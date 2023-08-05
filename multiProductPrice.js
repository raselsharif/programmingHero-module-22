const productList = [
    { name: "Panjabi", price: 1000, quantity: 1 },
    { name: "Pajama", price: 700, quantity: 2 },
    { name: "watch", price: 1200, quantity: 4 },
    { name: "shoes", price: 800, quantity: 3 },
];

function productPrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const totalProductPrice = products[i].price * products[i].quantity;
        sum += totalProductPrice;
    }
    return sum;
}

const total = productPrice(productList);
console.log(total);