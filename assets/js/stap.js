  //  basic stap 
  $(".date_btn").click(function(){
    $(".stap1 i").css("opacity", "1");
    $(".stap1").removeClass("active");
    $(".stap2").addClass("active");
    $(".form1").addClass("hide");
    $(".form2").addClass("show");
  })
  
  $(".Design").click(function(){
    $(".stap2 i").css("opacity", "1");
    $(".form2").addClass("hide");
    $(".form2").removeClass("show");
    $(".stap2").removeClass("active");
    $(".stap3").addClass("active");
    $(".form3").addClass("show");
  })
  
  $(".Description_btn").click(function(){
    $(".stap3 i").css("opacity", "1");
    $(".form3").addClass("hide");
    $(".form3").removeClass("show");
    $(".stap3").removeClass("active");
    $(".stap4").addClass("active");
    $(".form4").addClass("show");
  })
  
  $(".FAQ_btn").click(function(){
    $(".stap4 i").css("opacity", "1");
    $(".form4").addClass("hide");
    $(".form4").removeClass("show");
    $(".stap4").removeClass("active");
    $(".stap5").addClass("active");
    $(".form5").addClass("show");
  })
  
  $(".Team_btn").click(function(){
    $(".stap5 i").css("opacity", "1");
    $(".form5").addClass("hide");
    $(".form5").removeClass("show");
    $(".stap5").removeClass("active");
    $(".stap6").addClass("active");
    $(".form6").addClass("show");
  })
  
  $(".Add_btnss").click(function(){
    $(".stap6 i").css("opacity", "1");
    $(".form6").addClass("hide");
    $(".form6").removeClass("show");
    $(".stap6").removeClass("active");
    $(".deshbord").addClass("show");
  })
  

  let stapBtnContainer = document.querySelector(".stap-btn-container");
let nextStapBtn = document.querySelectorAll(".next_stap_btn");

let stapBtn = document.querySelectorAll(".stap-btn");

let formBox = document.querySelectorAll(".form-box");

stapBtnContainer.addEventListener("click", function (e) {
  let stapBtnClicked = e.target.closest(".stap-btn");
  stapBtn.forEach((sb) => sb.classList.remove("active"));
  if (stapBtnClicked) {
    stapBtnClicked.classList.add("active");
  } else {
    return;
  }

  formBox.forEach((B) => B.classList.remove("show"));
  formBox.forEach((B) => B.classList.add("hide"));
  //   console.log(clicked.dataset.tab);

  document
    .querySelector(`.from-box-${stapBtnClicked.dataset.stap}`)
    .classList.add("show");
});

nextStapBtn.forEach.classList.add("hide");
