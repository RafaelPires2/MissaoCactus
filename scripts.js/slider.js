let sliderImg = document.querySelector('.slider-img');
let i = 0; // current image index

let images = [

    './img/cactus/cactus1.jpg',
    './img/cactus/cactus2.jpg',
    './img/cactus/cactus3.jpg',
    './img/cactus/cactus4.jpg',
    './img/cactus/cactus5.JPG',
    './img/cactus/cactus6.JPG',
    './img/cactus/cactus7.JPG',
    './img/cactus/cactus8.JPG',
    './img/cactus/cactus9.JPG',
    './img/cactus/cactus10.JPG',
    './img/cactus/cactus11.JPG',
    './img/cactus/cactus12.JPG',
    './img/cactus/cactus13.JPG',
    './img/cactus/cactus14.JPG',
    './img/cactus/cactus15.JPG',
    './img/cactus/cactus16.JPG',
    './img/cactus/cactus17.JPG',
    './img/cactus/cactus18.JPG',
    './img/cactus/cactus19.JPG',
    './img/cactus/cactus20.JPG',
    './img/cactus/cactus21.JPG',
    './img/cactus/cactus22.JPG',
    './img/cactus/cactus23.JPG',
    './img/cactus/cactus24.JPG',
    './img/cactus/cactus25.JPG',
    './img/cactus/cactus26.JPG',
    './img/cactus/cactus27.JPG',
    './img/cactus/cactus28.JPG',
    './img/cactus/cactus29.JPG',
    './img/cactus/cactus30.JPG',
    './img/cactus/cactus31.jpg',
    './img/cactus/cactus32.jpg',
    './img/alfabetizacao/alfabet1.jpg',
    './img/alfabetizacao/alfabet2.jpg',
    './img/alfabetizacao/alfabet3.jpg',
    './img/alfabetizacao/alfabet4.jpg',
    './img/alfabetizacao/alfabet5.jpg',
    './img/alfabetizacao/alfabet6.jpg',
    './img/alfabetizacao/alfabet7.jpg',
    './img/alfabetizacao/alfabet8.jpg',
    './img/alfabetizacao/alfabet9.jpg',
    './img/alfabetizacao/alfabet10.jpg',
    './img/alfabetizacao/alfabet11.jpg',
    './img/music/music1.jpg',
    './img/music/music2.jpg',
    './img/music/music3.jpg',
    './img/music/music4.jpg',
    './img/music/music5.jpg',
    './img/music/music6.jpg',
    './img/music/music7.jpg',
    './img/music/music8.jpg',
    './img/music/music9.jpg'
]

function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}


function next(){
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return sliderImg.setAttribute('src', images[i]);
}

let imagens = document.querySelectorAll(".min");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector('#modalImg');
let btClose = document.querySelector('#btnClose')

