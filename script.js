// select  all the elements
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const productQuantity = document.getElementById('product-selected-quantity');
const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.getElementById('cart-count');
const shoppingCartIcon = document.getElementById('shopping-cart');
const cartInfo = document.getElementById('empty-cart-contents');
const cartIntoWithTotal = document.getElementById('cart-total-price');
const cartInfoContainter = document.getElementById('cart-info-container');
const sliderBtn = document.getElementById('hero-image');
const sliderContainer = document.getElementById('desktop-carousal-container');
const imageSlideshow = document.getElementById('image-slideshow');


//product quantity value
let quantity = 0;
//set the initial value of product quantity
productQuantity.innerHTML = quantity;

//functionalities for each click event
//add button
addBtn.addEventListener('click', () => {
    quantity++;
    productQuantity.innerHTML = quantity;
  })
//sub button
subBtn.addEventListener('click', () => {
quantity--;
productQuantity.innerHTML = quantity;

 });
//add to cart button
 addToCartBtn.addEventListener('click', () => {
    cartCount.innerHTML = quantity;
    cartCount.style.display = "block";
 });
//shopping cart icon
 shoppingCartIcon.addEventListener('click', () => {
    cartInfoContainter.style.display = "block";
    if (quantity > 0){
      cartInfo.style.display = "none"
        cartIntoWithTotal.innerHTML = 
        `<div class="cart-total-price">
        <img src="images/image-product-1-thumbnail.jpg" alt="" class="image-total-price">
        <div>
        <p>Fall Limited Edition Sneakers <br>
         $125 * ${quantity} $${125 * quantity}.00</p>
        </div>
        <img src="images/icon-delete.svg" alt="">
      </div>
      <button class = "add-to-cart-btn checkout-btn">Checkout</button>
        `;
    }
    else{
        cartInfo.style.display = "block";} 
});
//close cart info container
cartInfoContainter.addEventListener('click', () => {
    cartInfoContainter.style.display = "none";
});

//desktop slider
sliderBtn.addEventListener('click', () => {
    sliderContainer.style.display = "block";
    imageSlideshow.style.display = "block";

});

//close-slider
const closeSlider = document.getElementById('close-slider');
closeSlider.addEventListener('click', () => {
  sliderContainer.style.display = "none";
});

