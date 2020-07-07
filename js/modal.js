var contactOpen = document.querySelector(".contact__show");
var contactPopup = document.querySelector(".modal-contact");
var contactClose = document.querySelector(".modal-contact__close");
var contactForm = document.querySelector(".contact-form");
var contactName = contactPopup.querySelector(".name");
var contactEmail = contactPopup.querySelector(".email");

var mapOpen = document.querySelector(".map__show");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map__close");


var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  if(storageName) {
    contactName.value = storageName;
    contactEmail.focus();
  } else if (storageEmail) {
    contactEmail.value = storageEmail;
    contactName.focus();
  } else {
    contactName.focus();
  }
});

contactClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function(evt) {
  if(!contactName.value || !contactEmail.value ) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
    contactName.focus();
  } else {
    localStorage.setItem('name', contactName.value);
    localStorage.setItem('email', contactEmail.value)
  }
});


mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }

  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
