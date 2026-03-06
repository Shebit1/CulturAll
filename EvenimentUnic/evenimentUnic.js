// Selectăm elementele stea și plus
const starBtn = document.querySelector("img[alt='Stea']"); 
const plusBtn = document.querySelector("img[alt='Plus']"); 

// Recuperăm listele din localStorage sau inițializăm cu liste goale
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let calendarItems = JSON.parse(localStorage.getItem("calendarItems")) || [];

// ID-ul unic al evenimentului curent (poate fi extras dintr-o bază de date sau specificat manual)
const eventId = "dan-badea-gen-chix";

// Actualizează starea stelei la încărcarea paginii
function updateStarState() {
  if (favorites.includes(eventId)) {
    starBtn.src = "imagini/Star.png"; 
  } else {
    starBtn.src = "imagini/star-empty.png"; 
  }
}

// Actualizează starea plusului la încărcarea paginii
function updatePlusState() {
  if (calendarItems.includes(eventId)) {
    plusBtn.src = "imagini/check-circle.png"; 
  } else {
    plusBtn.src = "imagini/Plus circle.png"; 
  }
}

// Eveniment pentru click pe stea
starBtn.addEventListener("click", () => {
  if (!favorites.includes(eventId)) {
    favorites.push(eventId); 
    starBtn.src = "imagini/steagalbena.png";
  } else {
    favorites = favorites.filter((id) => id !== eventId); 
    starBtn.src = "imagini/star-empty.png"; 
  }

  // Salvăm lista actualizată în localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
});

// Eveniment pentru click pe plus
plusBtn.addEventListener("click", () => {
  if (!calendarItems.includes(eventId)) {
    calendarItems.push(eventId); 
    plusBtn.src = "imagini/check-circle.png"; 
  } else {
    calendarItems = calendarItems.filter((id) => id !== eventId); 
    plusBtn.src = "imagini/Plus circle.png"; 
  }

  // Salvăm lista actualizată în localStorage
  localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
});

// Inițializare: Actualizăm stările stelei și plusului la încărcarea paginii
document.addEventListener("DOMContentLoaded", () => {
  updateStarState();
  updatePlusState();
});