import { slideRight, slideLeft, displaySlide } from "./modules.js";
//* Carousel with JavaScript */
document.querySelector(".slidesParent").addEventListener("onload", displaySlide(1, 2, 3));
document.querySelector(".sldLcntrl").addEventListener("click", slideLeft);
document.querySelector(".sldRcntrl").addEventListener("click", slideRight);