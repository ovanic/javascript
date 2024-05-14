
    const products = [
        {name: "kiwi", price: 3000},
        {name: "pera", price: 1500},
        {name: "naranja", price: 1600},
        {name: "limon", price: 1700},
        {name: "banana", price: 2000},
        {name: "mango", price: 3500}
    ]

     let totalPriceElement = document.getElementById("total");
     let totalPrice = 0;

 const addButtons = document.querySelectorAll(".button-add");
addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        addToCart(this);
    });
});

function addToCart(button) {
    
    let product = button.parentElement;
    
    let index = Array.from(product.parentElement.children).indexOf(product);
    
    let price = products[index].price;

    let quantityElement = product.querySelector(".cantidad");

    let quantity = parseInt(quantityElement.value);
    
    let totalPriceElement = document.getElementById("total");
    let totalPrice = parseFloat(totalPriceElement.innerText);
    totalPrice += price * quantity;
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

let payButton = document.querySelector(".button-pay");
payButton.addEventListener("click", function() {
    pay();
});

function pay() {
    let cart = [];
    const items = document.querySelectorAll(".producto");
    totalPrice = 0;
    items.forEach(function(item, index) {
        let name = item.querySelector("h2").innerText;
        let priceText = item.querySelector("h3").innerText;
        let price = parseFloat(priceText.match(/\d+/)[0]);
        let quantity = parseInt(item.querySelector(".cantidad").value);
        cart.push({ name: name, price: price, quantity: quantity });
        totalPrice += price * quantity;
    
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice);
    console.log("productos agregados, el total seria: $" + totalPrice.toFixed(2));}

    