const btnBuys = [...document.querySelectorAll("[data-name]")];
const basketUl = document.querySelector(".basket-list")
console.log(basketUl)

const basket = new Basket();

const crateBasketUi = () => {
        basketUl.innerText = ""

        for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement("li")
        newLi.innerText =  oneProductInfo;
        basketUl.appendChild(newLi)

        }

};
const addProductTuBasket = event => {
        const name = event.target.dataset.name
        const price = Number(event.target.dataset.price)

        const newProduct = new Product(name, price)
        basket.add(newProduct)
        console.log(basket.getBasketSummary())
        crateBasketUi()
};

for (const btn of btnBuys) {
    btn.addEventListener("click", addProductTuBasket)
}
