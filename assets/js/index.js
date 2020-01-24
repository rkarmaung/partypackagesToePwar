
//Room section
var roomLeftBtn = document.querySelector("#roomLeft");
var roomRightBtn = document.querySelector("#roomRight");
var typeOfRooms = document.querySelectorAll(".roomMain")
var index = 0;

roomLeftBtn.addEventListener("click", function(){
  index--;
  if(index < 0){
    index = typeOfRooms.length-1;
  }
  for(var i=0; i<typeOfRooms.length; i++){
    typeOfRooms[i].classList.remove("roomActive");
  };
  typeOfRooms[index].classList.add("roomActive");
});

roomRightBtn.addEventListener("click", function(){
  index++;
  if(index == typeOfRooms.length){
    index = 0;
  };
  for(var i=0; i<typeOfRooms.length; i++){
    typeOfRooms[i].classList.remove("roomActive");
  };
  typeOfRooms[index].classList.add("roomActive");
});


// section1 - banner auto slideshow
setInterval(sec1Slide, 3000);
var sec1SliderCounter = 0;
var sec1Slider = document.querySelectorAll(".sec1Slider");

function sec1Slide(){
  if(sec1SliderCounter < sec1Slider.length-1){
    sec1SliderCounter++;
  } else {
    sec1SliderCounter=0;
  }
  for(var i=0; i<sec1Slider.length; i++){
    sec1Slider[i].classList.remove("active");
  };
  sec1Slider[sec1SliderCounter].classList.add("active");
};


// scroll down - navbar changes
window.addEventListener("scroll", function(){
  var nav = document.querySelector(".nav");
  var slogan = document.querySelector(".slogan");
  var logo = document.querySelector(".logo");

  //scroll up-down
  if(window.pageYOffset > 200){
    //change slogan opacity when scroll down
    nav.style.background = "transparent";
    nav.style.width = "100px"; 
    slogan.style.display = "none";
    logo.style.borderRadius = "50%"; 
    logo.style.opacity = "0.5"; 
  } else {
    nav.style.background = "#f3f3f3";
    nav.style.width = "100%"; 
    slogan.style.display = "flex";
    logo.style.borderRadius = "0%"; 
    logo.style.opacity = "1"; 
  }
});