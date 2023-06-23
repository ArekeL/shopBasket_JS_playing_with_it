class Basket {
    constructor() {
        this.items = []
    }

    clear() {
        this.items.length = 0
        // this.items.splice()
        // this.items = []

    }

    add(item) {
        this.items.push(item);
    };

   getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    };

    getBasketSummary() {
        return this.items
            .map((product, i) => `${i + 1} - ${product.name} - $${product.price.toFixed(2)}` )
    }

    remove(no) {
        this.items.splice(no -1, 1)
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

const oranges = new Product("Oranges", 7.80)

const tomato = new Product("Tomato", 14.20)




