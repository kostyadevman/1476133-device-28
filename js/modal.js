var contactOpen = document.querySelector(".contact__show");
var contactPopup = document.querySelector(".modal-contact");
var contactClose = document.querySelector(".modal-contact__close");
var contactForm = document.querySelector(".contact-form");
var contactLogin = contactPopup.querySelector(".name");
var contactEmail = contactPopup.querySelector(".email");

var mapOpen = document.querySelector(".map__show");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map__close");


contactOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  contactLogin.focus();
});

contactClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
});

contactForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
});


mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

