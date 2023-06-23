const btnBuys = [...document.querySelectorAll("[data-name]")];
const basketUl = document.querySelector(".basket-list")
const btnBuyAll = document.querySelector(".buy")

const basket = new Basket();

btnBuyAll.removeAttribute("disabled")

const crateBasketUi = () => {
        basketUl.innerText = ""

        for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement("li")
        newLi.innerText =  oneProductInfo;
        basketUl.appendChild(newLi)
        }
        const basketTotalValue = basket.getTotalValue()
        btnBuyAll.innerText =`Buy $${basketTotalValue.toFixed(2)}`
};


const addProductTuBasket = event => {
        const name = event.target.dataset.name
        const price = Number(event.target.dataset.price)

        const newProduct = new Product(name, price)
        basket.add(newProduct)
        crateBasketUi()

};

for (const btn of btnBuys) {
    btn.addEventListener("click", addProductTuBasket)
}
