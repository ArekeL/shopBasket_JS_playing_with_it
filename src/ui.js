const btnBuys = [...document.querySelectorAll("[data-name]")];
const basketUl = document.querySelector(".basket-list")
const btnBuyAll = document.querySelector(".buy")

const basket = new Basket();

const crateBasketUi = () => {
        basketUl.innerText = ""

        for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement("li")
        newLi.innerText =  oneProductInfo;
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


