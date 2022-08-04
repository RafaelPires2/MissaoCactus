const navigation = document.querySelector('#navigation');
const body = document.querySelector("#body")
const galeria1 = document.querySelector('#galeria1');

// const navMenu = document.querySelector('#navMenu');
// const btnTopo = document.querySelector('#btnTopo');


const iconsFaceBook = document.querySelectorAll('.icon-facebook');
const iconsIntagram = document.querySelectorAll('.icon-instagram');
const iconsYoutube = document.querySelectorAll('.icon-youtube');




// ============= SCROLL - ALTERA BACKGROUND =====================
function navOnScroll(){
if (scrollY > 0) {
    navigation.classList.add("scroll");
    } else{
    navigation.classList.remove("scroll");
    }
}

// função que procura através do forEach o primeiro elemento filho da classe icon-facebook
// e add um evento
// mouseover e um mouseout alterando o atributo src dele

// ============= ALTERA ICON INSTAGRAM ================================

iconsFaceBook.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/face2.png" );
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){
        e.target.setAttribute('src', "./img/face1.png" );
    })
})

// ============= ALTERA ICON INSTAGRAM ================================

iconsIntagram.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/insta2.png" );
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){
        e.target.setAttribute('src', "./img/insta1.png" );
    })
})  

// ============= ALTERA ICON YOUTUBE ================================

iconsYoutube.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/youtube2.png")
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){ 
        e.target.setAttribute('src', "./img/youtube1.png" );
    })
}) 


// ========= scroll and galery =========== //
function removeDisplayAndDisableScroll(){
    removeDisplayNone()
    disableScroll()
}

function addDisplayAndEnableScroll(){
    addDisplayNone()
    enableScroll()
}

function removeDisplayNone(){
    galeria1.classList.remove('displayNone')
}
function addDisplayNone(){
    galeria1.classList.add('displayNone')
}

function disableScroll(){
    body.classList.add('disableScroll')
}

function enableScroll(){
    body.classList.remove('disableScroll')
}

// ============= MENU EXPANDED ================================

function removeMenuExpanded(){
    body.classList.remove('menuExpanded')
    btnClose.classList.add('displayNone')

    navMenu.classList.remove('displayNone')
    btnTopo.classList.remove('displayNone')
}
function addMenuExpanded(){
    body.classList.add('menuExpanded')
    btnClose.classList.remove('displayNone')
    
    navMenu.classList.remove('displayNone')
    btnTopo.classList.remove('displayNone')
}