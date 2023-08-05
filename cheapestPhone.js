
const phoneList = [
    { name: "Samsung", Model: "01", price: 50000 },
    { name: "Nokia", Model: "01", price: 40000 },
    { name: "iPhone", Model: "01", price: 60000 },
    { name: "HTC", Model: "01", price: 20000 },
    { name: "Oppo", Model: "01", price: 35000 },
];

function cheapestPrice(phones) {
    let cheapestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        if(phones[i].price < cheapestPhone.price){
            cheapestPhone = phones[i];
        }
    }
    return cheapestPhone;

}

const result = cheapestPrice(phoneList);
console.log(result);
