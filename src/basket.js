class Basket {
    constructor() {
        const localStorageItems = this.loadFromLocalStorage()

        // this.items = localStorageItems ? localStorageItems : [];
        // this.items = localStorageItems || [];
        this.items = localStorageItems ?? []; // Nullish Operator.


    }

    clear() {
        this.items.length = 0
        // this.items.splice()
        // this.items = []
        this.saveToLocalStorage()

    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage()

    };

   getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    };

    getBasketSummary() {
        return this.items
            .map((product, i) => {
                return {
                    id: i + 1,
                    text:`${i + 1} - ${product.name} - $${product.price.toFixed(2)}`
                }

                }
            )
    }

    remove(no) {
        this.items.splice(no -1, 1);
        this.saveToLocalStorage()
    };

    saveToLocalStorage() {
        localStorage.setItem("basket-items", JSON.stringify(this.items))
    }

    loadFromLocalStorage() {
        return  JSON.parse(localStorage.getItem("basket-items"));

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
// old code
// const  shopBasket = new Basket();
// const oranges = new Product("Oranges", 7.80)
// const tomato = new Product("Tomato", 14.20)




