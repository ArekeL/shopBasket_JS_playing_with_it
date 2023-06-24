const btnBuys = [...document.querySelectorAll("[data-name]")];
const basketUl = document.querySelector(".basket-list")
const btnBuyAll = document.querySelector(".buy")

const basket = new Basket();

const removeItem = event => {
        const id = Number(event.target.dataset.id);
        basket.remove(id);
        crateBasketUi();
};

const crateBasketUi = () => {
        basketUl.innerText = ""

        for (const {id, text} of basket.getBasketSummary()) {
        // const {id, text} = oneProductInfo - destructuring in statement for...of

        const newLi = document.createElement("li")
        newLi.innerText =  text;
        newLi.addEventListener('click', removeItem)
        newLi.dataset.id = id
        basketUl.appendChild(newLi)
        }
        const basketTotalValue = basket.getTotalValue()
        btnBuyAll.innerText =`Buy $${basketTotalValue.toFixed(2)}`

        btnBuyAll.disabled = basketTotalValue === 0
};




const addProductTuBasket = event => {
        const name = event.target.dataset.name
        const price = Number(event.target.dataset.price)

        const newProduct = new Product(name, price)
        basket.add(newProduct)
        crateBasketUi()

};

function buyAllProducts() {
        const basketTotalValue = basket.getTotalValue()
        alert(`The value of the products is ${basketTotalValue.toFixed(2)}`)
        basket.clear()
        crateBasketUi()
}

for (const btn of btnBuys) {
    btn.addEventListener("click", addProductTuBasket)
}

const clean = () => {

};

btnBuyAll.addEventListener('click', buyAllProducts)


