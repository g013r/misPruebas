const menuEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')
const menuLogo = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', ()=>{
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive')
  }
  deskMenu.classList.toggle('inactive');
})

menuLogo.addEventListener('click', ()=>{
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
})

menuCarrito.addEventListener('click', ()=>{
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive')
  }

  if (!deskMenu.classList.contains('inactive')) {
    deskMenu.classList.add('inactive')
  }
  productDetail.classList.toggle('inactive')
})

//compras

let productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
  name: 'Bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

for(products of productList){
  cardsContainer.innerHTML += `
  <div class="product-card">
    <img src= ${products.Image} alt="">
    <div class="product-info">
      <div>
      <p>${products.price}</p>
      <p>${products.name}</p>
      </div>
      <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>
  `
}