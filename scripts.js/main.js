const navigation = document.querySelector('#navigation');

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
const iconsFaceBook = document.querySelectorAll('.icon-facebook');

iconsFaceBook.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/face2.png" );
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){
        e.target.setAttribute('src', "./img/face1.png" );
    })
})

// ============= ALTERA ICON INSTAGRAM ================================
const iconsIntagram = document.querySelectorAll('.icon-instagram');

iconsIntagram.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/insta2.png" );
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){
        e.target.setAttribute('src', "./img/insta1.png" );
    })
})  

// ============= ALTERA ICON YOUTUBE ================================
const iconsYoutube = document.querySelectorAll('.icon-youtube');

iconsYoutube.forEach(function (anchor) {
    anchor.firstElementChild.addEventListener('mouseover', function(e){
        e.target.setAttribute('src', "./img/youtube2.png")
    })

    anchor.firstElementChild.addEventListener('mouseout', function(e){ 
        e.target.setAttribute('src', "./img/youtube1.png" );
    })
}) 