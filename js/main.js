const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// Модальное окно
// открыть по кнопке
$(".js-button-campaign").click(function () {
  $(".main").css("filter", "blur(3px)");
  $(".overlay_menu").css("display", "block");
  if ($(".main").width() > 1150) {
    $(".overlay_menu").addClass("animate__fadeInDown");
    $(".overlay_menu").removeClass("animate__fadeOutDown animate__fadeOutLeft");
  } else {
    $(".overlay_menu").addClass("animate__fadeInLeft");
    $(".overlay_menu").removeClass("animate__fadeOutLeft animate__fadeOutDown");
  }
  // $(".overlay_menu").addClass("disabled");
});

// закрыть на крестик
$(".close").click(function () {
  if ($(".main").width() > 1150) {
    $(".overlay_menu").addClass("animate__fadeOutDown");
    $(".overlay_menu").removeClass("animate__fadeInDown");
  } else {
    $(".overlay_menu").addClass("animate__fadeOutLeft");
    $(".overlay_menu").removeClass("animate__fadeInLeft");
  }
  $(".main").css("filter", "none");
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".main_menu");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    if ($(".main").width() > 1150) {
      $(".overlay_menu").addClass("animate__fadeOutDown");
      $(".overlay_menu").removeClass("animate__fadeInDown");
    } else {
      $(".overlay_menu").addClass("animate__fadeOutLeft");
      $(".overlay_menu").removeClass("animate__fadeInLeft");
    }
    $(".main").css("filter", "none");
  }
});

// carousel
$(".carousel").carousel({
  interval: 9000,
});

// new WOW().init();
