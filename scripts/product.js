init()

async function init() {
    
    const productId = getId()

    const product = await fetchProduct(productId)
    console.log(product)

    render(product)
}

function getId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')

    return id
}

function showSpinner(){
    const div = document.querySelector('.spinner')

}

function hideSpinner(){
    const spinner = document.querySelector('.spinner')
    spinner.remove()
}




async function fetchProduct(id) {

    showSpinner

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const result = await response.json()

    hideSpinner()


    return result
}
function showSpinner() {
    const div = document.createElement("div");
    div.className = "spinner";
    document.body.prepend(div);
  }
  
  function hideSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.remove();
  }
  

function render(product){
    const productName = document.querySelector('#productName')
    const imgProduct = document.querySelector('.imgPr')
    const prInfo = document.querySelector('.title')
    const rating = document.querySelector('#rating')
    const reviews = document.querySelector('.reviews')
    const price = document.querySelector('.price')
    const overview = document.querySelector('.product-overview')

    overview.textContent = product.description
    price.textContent = `$${product.price}`

    reviews.textContent = `(${product.rating.count} Reviews)`

    rating.textContent = "⭐⭐⭐⭐"



    prInfo.textContent = product.title
    imgProduct.src = product.image
    productName.textContent = product.title
    
    
   
}