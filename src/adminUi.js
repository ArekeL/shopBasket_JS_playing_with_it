const addProductForm = document.querySelector(".form-add-product");
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUl = document.querySelector(".product-list")

const addProductToShop = event => {
        event.preventDefault();

        const name = nameInput.value;
        const price = Number(priceInput.value);


        const newLi = document.createElement("li")
        const newStrong = document.createElement("strong");
        newStrong.innerText = name;
        const  newPrice =  document.createTextNode(` - $${price.toFixed(2)} `)

        const newBtn = document.createElement("button");


        newBtn.classList.add("btn", "buy");
        newBtn.dataset.name = name;
        newBtn.dataset.price = String(price);
        newBtn.innerText = "Add";
        newBtn.addEventListener("click", addProductTuBasket)

        newLi.appendChild(newStrong);
        newLi.appendChild(newPrice);
        newLi.appendChild(newBtn);

        productsUl.appendChild(newLi);




};
addProductForm.addEventListener("submit", addProductToShop)