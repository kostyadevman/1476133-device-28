var sliderButtons = document.querySelectorAll(".slider-controls__button");
var sliders = document.querySelectorAll(".promo-slider__item");
var serviceButtons = document.querySelectorAll(".services__button");
var services = document.querySelectorAll(".tab__item");

for ( let i = 0; i < sliderButtons.length; i ++ ) {
  sliderButtons[i].addEventListener("click", function(evt) {
  if ( evt.target ) {
    sliders[i].classList.add("slider_current");
    sliderButtons[i].classList.add("button_current");
    for ( let j = 0; j < sliderButtons.length; j ++) {
      if ( i != j ) {
        sliders[j].classList.remove("slider_current");
        sliderButtons[j].classList.remove("button_current");
      }
    }
  }
  });
}

for ( let i = 0; i < serviceButtons.length; i ++ ) {
  serviceButtons[i].addEventListener("click", function(evt) {
  if ( evt.target ) {
    services[i].classList.add("tab_current");
    serviceButtons[i].classList.add("services__button_active");
    for ( let j = 0; j < serviceButtons.length; j ++) {
      if ( i != j ) {
        services[j].classList.remove("tab_current");
        serviceButtons[j].classList.remove("services__button_active");
      }
    }
  }
  });
}

