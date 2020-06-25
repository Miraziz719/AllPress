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

$(document).mouseup(function (e) {
  var popup = $(".options-container");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    popup.removeClass("active");
  }
});

// Модальное окно
// открыть по кнопке
$(".js-button-campaign").click(function () {
  $(".main").css("filter", "blur(3px)");
  $(".overlay_menu").css('display', 'block');
  if ($(".main").width() > 1150) {
    $(".overlay_menu").addClass("animate__fadeInDown");
    $(".overlay_menu").removeClass("animate__fadeOutDown animate__fadeOutLeft");
  } else {
    $(".overlay_menu").addClass("animate__fadeInLeft");
    $(".overlay_menu").removeClass("animate__fadeOutLeft animate__fadeOutDown");
  }
});

// закрыть на крестик
$(".close").click(function () {
  $(".main").css("filter", "none");
  // $(".overlay_menu").fadeOut();
  if ($(".main").width() > 1150) {
    $(".overlay_menu").addClass("animate__fadeOutDown");
    $(".overlay_menu").removeClass("animate__fadeInDown");
  } else {
    $(".overlay_menu").addClass("animate__fadeOutLeft");
    $(".overlay_menu").removeClass("animate__fadeInLeft");
  }
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".main_menu");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".main").css("filter", "none");
    // $(".overlay_menu").fadeOut();
    if ($(".main").width() > 1150) {
      $(".overlay_menu").addClass("animate__fadeOutDown");
      $(".overlay_menu").removeClass("animate__fadeInDown");
    } else {
      $(".overlay_menu").addClass("animate__fadeOutLeft");
      $(".overlay_menu").removeClass("animate__fadeInLeft");
    }
  }
});


$('.arrow').click(function(event) {
  $('.arrow,.city_list').toggleClass('active');
});


// bootstrap carousel
$(".carousel").carousel({
  interval: 6000,
});


/*  swiper js  
================================================*/ 
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-container_2", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    950: {
      slidesPerView: 1,
    },
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-container_3", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    950: {
      slidesPerView: 3,
    },
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-container_4", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    950: {
      slidesPerView: 1,
    },
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCloud(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent_2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks_2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab_content_3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks_3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



