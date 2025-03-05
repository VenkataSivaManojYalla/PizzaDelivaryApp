let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalAmount = document.getElementById("total");

    cartList.innerHTML = "";
    cart.forEach(food => {
        let listItem = document.createElement("li");
        listItem.textContent = `${food.item} - ₹${food.price}`;
        cartList.appendChild(listItem);
    });

    totalAmount.textContent = total;
}

function checkout() {
    alert("Thank you for your order! Your total is ₹" + total);
    cart = [];
    total = 0;
    updateCart();
}
