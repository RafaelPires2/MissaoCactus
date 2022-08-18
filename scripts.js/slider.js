// ================ EXPANDED MODAL AND CLOSED ========================

let min = document.querySelectorAll(".min");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector('#modalImg');
let btCloseGaleria = document.querySelector('#btnCloseGaleria')
let btPrev = document.querySelector('#btnPrev');
let btNext = document.querySelector('#btnNext');
let sliderImg = document.querySelector('.slider-img');

let currentImgIndex = 0

for(let i = 0; i < min.length; i++) {
    min[i].addEventListener('click', function(){

        srcVal = min[i].getAttribute('src');
        currentImgIndex = i;
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modalActive')
        disableScroll()
    })
}

btCloseGaleria.addEventListener('click', function(){
   modal.classList.toggle('modalActive');
   enableScroll()
});

// ================ PREV AND NEXT IMAGES =============================
const images = [...min].map(({ src }) => src)

function prev(){
    let newCurrentImgIndex = currentImgIndex - 1
    if(newCurrentImgIndex > 0){
        currentImgIndex = newCurrentImgIndex
    } else {
        newCurrentImgIndex = images.length - 1
        currentImgIndex = newCurrentImgIndex
    } 
    modalImg.setAttribute('src', images[newCurrentImgIndex]);
}

function next(){
   
    let newCurrentImgIndex = currentImgIndex + 1
    if(newCurrentImgIndex < images.length){
        currentImgIndex = newCurrentImgIndex
    } else {
        newCurrentImgIndex = 0
        currentImgIndex = newCurrentImgIndex
    } 
    modalImg.setAttribute('src', images[newCurrentImgIndex]);
}



