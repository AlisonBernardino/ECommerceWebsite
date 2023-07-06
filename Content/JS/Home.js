// "Slider functionality" area
const productContainersArea = [...document.querySelectorAll('.productContainerArea')];
const previousSlider = [...document.querySelectorAll('.previousSliderElement')];
const nextSlider = [...document.querySelectorAll('.nextSliderElement')];

productContainersArea.forEach((item, index) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextSlider[index].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    previousSlider[index].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})