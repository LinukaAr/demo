document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cart++;
            cartCount.textContent = cart;
            alert('Product added to cart!');
        });
    });
});
