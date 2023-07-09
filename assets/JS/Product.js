const productImages = document.querySelectorAll(".productImages img");
const imageSlide = document.querySelector(".imageSliderArea");

let activeImageSlide = 0;

productImages.forEach((element, index) => {
    element.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        element.classList.add('active');
        imageSlide.style.backgroundImage = `url('${element.src})`;
        imageSlide = index;
    })
})

const sizeButtons = document.querySelectorAll('.modelRadioButtons');
let checkedButton = 0;

sizeButtons.forEach((item, element) => {
    item.addEventListener('click', () => {
        sizeButtons[checkedButton].classList.remove('check');
        item.classList.add('check');
        checkedButton = element;
    })
})