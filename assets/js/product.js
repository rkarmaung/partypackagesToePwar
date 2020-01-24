//section 4 - 
//
/*var cards = document.querySelectorAll(".cards");
var zoomInContainer = document.querySelectorAll(".zoomInContainer");

function cardsIndex(cardsIndexN){
  alert(cardsIndexN + " click")
  cards[cardsIndexN].addEventListener("click", function(){
    zoomInContainer[cardsIndexN].style.display = "grid";
  });
}*/

function currentSmImg(n){
  sliderIndex = n;
  displayInDisplayPanel(sliderIndex);
};
var slides = document.querySelectorAll(".zoomInBodyBigImgContainer img");
function displayInDisplayPanel(sliderIndex){
  if(sliderIndex<=slides.length || sliderIndex>slides.length){
    for(var i=0; i<slides.length; i++){
      slides[i].style.display = "none";
    }
    slides[sliderIndex-1].style.display = "block";
  };
};

function currentMdImg(n){
  sliderMdIndex = n;
  displayInWide(sliderMdIndex);
}

var myModal = document.querySelector("#myModal");
var blankImg = document.querySelector("#blankImg");
function displayInWide(sliderMdIndex){
  myModal.style.display = "grid";
  blankImg.src = slides[sliderMdIndex-1].src;
}

//close btn
var closeMyModal = document.querySelector(".closeMyModal");
closeMyModal.addEventListener("click", function(){
  myModal.style.display = "none";
});

document.querySelector("#myModal span").addEventListener("click", function (){
  myModal.style.display = "none";
});

