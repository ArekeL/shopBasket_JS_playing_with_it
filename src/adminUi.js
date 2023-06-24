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
        const  newPrice =  document.createTextNode(` - $${price.toFixed(2)}`)
        newLi.appendChild(newStrong)
        newLi.appendChild(newPrice)

        productsUl.appendChild(newLi)

};
addProductForm.addEventListener("submit", addProductToShop)
