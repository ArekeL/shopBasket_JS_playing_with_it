class Basket {
    constructor() {
        this.items = []
    }
    add(item) {
        this.items.push(item);
    };

   getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    };

    showBasket() {
        this.items
            .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)} PLN` )
            .forEach(line => console.log(line))
    }


}

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice
    }

    setNewPrice(newPrice) {
        this.price = newPrice
    }

}

const  shopBasket = new Basket();

const oranges = new Product("Pomarańcze LUZ", 7.80)

const tomato = new Product("Pomidor", 14.20)

console.log(oranges, tomato)

shopBasket.add(tomato)
shopBasket.add(tomato)
shopBasket.add(tomato)
shopBasket.add(oranges)

shopBasket.showBasket()
console.log(shopBasket.getTotalValue().toFixed(2))


