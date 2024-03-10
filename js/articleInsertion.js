import { productDB } from './modules.js';

let htmlCards = ''
for (let i = 0; i < productDB.length; i++) {
    let starsHTML = ''
    for (let index = 0; index < productDB[i].nbrStars; index++) {
        starsHTML += "<i class='fas fa-star'></i>"
    }
    for (let index = 0; index < (5 - productDB[i].nbrStars); index++) {
        starsHTML += "<i class='far fa-star'></i>"
    }
    htmlCards += `
  <div class="productCard">
    <div class="productFigure">
      <div class="figHover">
        <span><a href="#" class="fas fa-shopping-cart"></a></span>
        <span><a href="#" class="fas fa-heart"></a></span>
        <span><a href="#" class="fas fa-eye"></a></span>
      </div>
      <img src="./images/product-${productDB[i].imgLinkId}.jpg" alt="${productDB[i].productTitle}">
    </div>
    <div class="figDesc">
      <span>$${productDB[i].price}.00</span>
      <p class="productName">${productDB[i].productTitle}</p> 
      <p>
        ${starsHTML}
        <span>(${productDB[i].nbrOfVote})</span>
      </p>
    </div>
  </div>
  `
}
const productCardParent = document.querySelector(".productCardParent")

//* Render Product Cards Using insertAdjacentHTML
productCardParent.insertAdjacentHTML("beforeend", htmlCards)
