

(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // profile drop down
$(".pro_ddown").click(function(){
    $(".drop_down").addClass("active");
})
$("main").click(function(){
    $(".drop_down").removeClass("active")
})

// Edit btn
$(".edit_btn").click(function(){
    $(".edit_profile").addClass("active");
    $(".user_profile_wrp").addClass("hide");
})

$(".Save_btn").click(function(){
  $(".edit_profile").removeClass("active");
  $(".user_profile_wrp").removeClass("hide");
})


$(".close").click(function(){
  $(".cookis").css("display", "none");
})

$(".popup_area").click(function(){
  $(".popup_area").css("display", "none");
})


})(jQuery);


// increment / decrement 

let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});