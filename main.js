const menuEmail = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')
const menuLogo = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('#shopping')
const toggleDetail = document.getElementById("product-detail")
const cardsContainer = document.querySelector('.cards-container')
const detailClose = document.querySelector('.product-detail-close')

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
  if (!toggleDetail.classList.contains('inactive')) {
    toggleDetail.classList.add('inactive');
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
  if (!toggleDetail.classList.contains('inactive')) {
    toggleDetail.classList.add('inactive')
  }
  productDetail.classList.toggle('inactive')
})

detailClose.addEventListener('click',()=>{
  if (!productDetail.classList.contains('inactive')){
    productDetail.classList.add('inactive')
  }
  toggleDetail.classList.add('inactive')
})

//compras

let productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
  name: 'television',
  price: 300,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

function arrayInsert(arr) {
  for(products of arr){
    const productCard = document.createElement('div')
    productCard.classList.add("product-card")

    const productImg = document.createElement('img');
    productImg.setAttribute('src', products.Image)
    productImg.addEventListener('click', ()=>{
      toggleDetail.classList.remove('inactive');
    })

    const productInfo = document.createElement('div')
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement('div')

    const productprice = document.createElement('p')
    productprice.innerText = products.price;

    const productName = document.createElement('p')
    productName.innerText = products.name;

    productInfoDiv.appendChild(productprice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
  }
}

arrayInsert(productList)