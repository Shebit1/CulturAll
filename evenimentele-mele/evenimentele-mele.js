// Obiectul evenimentelor organizat pe zile
const eventsByDate = {
  "2023-12-04": [
    { title: "Eveniment 1", time: "11:30-13:00", location: "Locație 1", image: "images/sample1.png", id: "1" },
    { title: "Eveniment 2", time: "16:30-18:00", location: "Locație 2", image: "images/sample2.png", id: "2" }
  ],
  "2023-12-07": [
    { title: "Eveniment 3", time: "14:00-15:00", location: "Locație 3", image: "images/sample3.png", id: "3" }
  ],
  "2023-12-11": [
    { title: "Eveniment 4", time: "10:00-11:00", location: "Locație 4", image: "images/sample4.png", id: "4" }
  ],
  "2023-12-13": [
    { title: "Eveniment 5", time: "09:00-10:30", location: "Locație 5", image: "images/sample5.png", id: "5" }
  ]

};

// Recuperăm lista de favorite din localStorage sau inițializăm cu o listă goală
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Gestionarea calendarului
function handleCalendar() {
  const calendarDays = document.querySelectorAll(".calendar-number:not(.another-month-number)");
  const eventTitle = document.querySelector(".event-main-title");
  const eventsList = document.querySelector(".events-list");

  calendarDays.forEach((day) => {
    day.addEventListener("click", () => {
      // Scoatem selecția de pe toate zilele
      calendarDays.forEach((d) => d.classList.remove("event-number-selected"));
      day.classList.add("event-number-selected");

      // Preluăm data selectată (doar zile din decembrie)
      const selectedDate = `2023-12-${day.innerText.padStart(2, "0")}`;

      // Golește lista de evenimente
      eventsList.innerHTML = "";

      // Verificăm dacă există evenimente pentru data selectată
      if (eventsByDate[selectedDate]) {
        // Setăm titlul datei
        eventTitle.textContent = `${parseInt(day.innerText)} Decembrie`;

        // Adăugăm fiecare eveniment în lista de evenimente
        eventsByDate[selectedDate].forEach((event, index) => {
          const eventItem = document.createElement("div");
          eventItem.classList.add("event-item");
          eventItem.innerHTML = `
            <div class="event-item-displayed">
              <div class="event-title">${event.title}</div>
              <div class="event-item-details">
                <div>${event.time}</div>
                <img 
                  id="arrow-${index}" 
                  src="images/arrow-down.png" 
                  alt="Arată detalii" 
                  style="cursor: pointer;"
                />
              </div>
            </div>
            <div id="details-${index}" class="event-item-hidden" style="display: none;">
              <div class="image" style="background-image: url('${event.image}'); background-size: cover;"></div>
              <div class="location">${event.location}</div>
            </div>
          `;
          eventsList.appendChild(eventItem);

          // Funcționalitate pentru săgeți
          const arrow = document.getElementById(`arrow-${index}`);
          const details = document.getElementById(`details-${index}`);
          arrow.addEventListener("click", () => {
            if (details.style.display === "none" || details.style.display === "") {
              details.style.display = "flex";
              arrow.style.transform = "rotate(180deg)";
            } else {
              details.style.display = "none";
              arrow.style.transform = "rotate(0deg)";
            }
          });
        });
      } else {
        // Dacă nu există evenimente
        eventTitle.textContent = `${parseInt(day.innerText)} Decembrie`;
        const noEvent = document.createElement("p");
        noEvent.textContent = "Nu există evenimente pentru această dată.";
        noEvent.style.color = "#9D4536";
        noEvent.style.fontSize = "14px";
        eventsList.appendChild(noEvent);
      }
    });
  });

  // Marcăm zilele cu evenimente
  calendarDays.forEach((day) => {
    const date = `2023-12-${day.innerText.padStart(2, "0")}`;
    if (eventsByDate[date]) {
      day.classList.add("event-number-possible");
    } else {
      day.classList.remove("event-number-possible");
    }
  });
}

// Gestionarea favoritelor
function handleFavorites() {
  document.querySelectorAll(".event-card").forEach((card) => {
    const eventId = card.getAttribute("data-id"); 
    const favoriteBtn = card.querySelector(".favorite-btn"); 
    const removeBtn = card.querySelector("img[src*='minus-circle']"); 

    // Actualizăm starea inițială a butonului de eliminare
    if (favorites.includes(eventId)) {
      removeBtn.style.opacity = "0.5"; 
      removeBtn.style.pointerEvents = "none"; 
      favoriteBtn.src = "images/star.png"; 
    }

    // Funcționalitate pentru steaua de favorite
    favoriteBtn.addEventListener("click", () => {
      if (!favorites.includes(eventId)) {
        // Adăugăm evenimentul la favorite
        favorites.push(eventId);
        favoriteBtn.src = "images/star.png"; 
        removeBtn.style.opacity = "0.5"; 
        removeBtn.style.pointerEvents = "none"; 
      } else {
        // Eliminăm evenimentul din favorite
        favorites = favorites.filter((id) => id !== eventId);
        favoriteBtn.src = "images/star-empty.png"; 
        removeBtn.style.opacity = "1";
        removeBtn.style.pointerEvents = "auto"; 
      }

      // Salvăm lista actualizată în localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    // Funcționalitate pentru butonul de eliminare
    removeBtn.addEventListener("click", () => {
      if (!favorites.includes(eventId)) {
        const parentCard = card.closest(".event-card");
        parentCard.remove(); 
      }
    });
  });
}

// Inițializare funcționalități
document.addEventListener("DOMContentLoaded", () => {
  handleCalendar(); 
  handleFavorites(); 
});
