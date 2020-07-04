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
  $(".overlay_menu").css('opacity', '1');
  $(".overlay_menu").css('visibility', 'visible');
  $(".main").css("filter", "blur(3px)");

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
    950: {
      slidesPerView: 4,
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



//  acardion menu
var acc = document.getElementsByClassName("link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.lastElementChild;

    if (!panel.style.maxHeight) {
      for (i = 0; i < acc.length; i++) {
        acc[i].lastElementChild.style.maxHeight = null;
        acc[i].classList.remove("open");
      }
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("open");
    } 
  });
}



// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
