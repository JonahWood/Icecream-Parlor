const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}, {
    name: 'Standard Bowl',
    image: 'https://images.unsplash.com/photo-1510035618584-c442b241abe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80',
    price: 4
}]

const cart = []


function drawIceCream() {
    let storeElem = document.getElementById('cream-cards')
    let template = ''
  
    for (let i = 0; i < store.length; i++) {
      const product = store[i];
      template += `
      <div class="col-md-6 col-lg-4 my-3">
        <div class="card product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <p><b>${product.name}</b></p>
              <p>$${product.price}</p>
            </div>
            <button 
              class="btn btn-outline-secondary" 
              title="Add to cart"
              onclick="addItemToCart('${product.sku}')"
              >
              <i class="mdi mdi-cart"></i>
              <small>ADD</small>
            </button>
          </div>
        </div>
      </div>`
    }
}
function drawToppings() {
    
}
function drawContainers() {

}
function calculateCartTotal(){
    
}
function checkout(){

}

function cart(){
    let creamElem = document.getElementById('cream')
    let cartTotalElem = document.getElementById('cart-total')
    let template = ''

    cart.forEach(item => {
    template += `<div>${item.name} - ${item.quantity} 
    <button 
        onclick="removeItem('${item.sku}')" 
        class="btn btn-danger"> <i class="mdi mdi-delete-forever"></i> </button></div>`
    })
    let total = calculateCartTotal()
    creamElem.innerHTML = template
    creamTotalElem.innerText = total.toFixed(2)
}







drawContainers()
drawToppings()
drawIceCream()