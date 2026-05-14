

const cityBtns = document.querySelectorAll(".cityBtn");
const aboutCities = document.querySelectorAll(".aboutCity");
const stateBtns = document.querySelectorAll(".stateBtn");
const cityInStates = document.querySelectorAll(".cityInState");

const tripBtns = document.querySelectorAll(".tripBtn");
const hanymoonIntro = document.querySelectorAll(".hanymoon-intro");



cityBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    console.log("clicked:", btn.id);

    aboutCities.forEach(cityInfo => {
      cityInfo.style.display = "none";
    });

    const selectedCity = document.querySelector("." + btn.id);

    if (selectedCity) {
      selectedCity.style.display = "block";
    }

    cityBtns.forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

tripBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    console.log("clicked:", btn.id);

    hanymoonIntro.forEach(cityInfo => {
      cityInfo.style.display = "none";
    });

    const selectedCity = document.querySelector("." + btn.id);

    if (selectedCity) {
      selectedCity.style.display = "block";
    }

    cityBtns.forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

stateBtns.forEach((state) => {
  state.addEventListener("click", function () {
    cityInStates.forEach((cityList) => {
      cityList.style.display = "none";
    });

    const selectedCountry = document.getElementById(state.dataset.country);
    selectedCountry.style.display = "block";

  });
});
const tripCards = document.querySelectorAll(".choose-story .card");
const trips = document.querySelectorAll(".trip");

tripCards.forEach((card) => {
  card.addEventListener("click", function () {
    const selectedTripId = card.dataset.story;

    trips.forEach((trip) => {
      trip.classList.remove("active");
    });

    tripCards.forEach((cardItem) => {
      cardItem.classList.remove("active");
    });

    const selectedTrip = document.getElementById(selectedTripId);

    if (selectedTrip) {
      selectedTrip.classList.add("active");
      card.classList.add("active");
    }
  });
});

//  const countryTabs = document.querySelectorAll(".country-tab");
//     const countryStories = document.querySelectorAll(".country-story");

//     countryTabs.forEach((tab) => {
//       tab.addEventListener("click", () => {
//         countryTabs.forEach((btn) => btn.classList.remove("active"));
//         countryStories.forEach((story) => story.classList.remove("active"));

//         tab.classList.add("active");
//         document.getElementById(tab.dataset.country).classList.add("active");
//       });
//     });

//     const placeCards = document.querySelectorAll("#argentina-story .place-card[data-place]");
//     const placeStories = document.querySelectorAll("#argentina-story .place-story");

//     placeCards.forEach((card) => {
//       card.addEventListener("click", () => {
//         placeCards.forEach((c) => c.classList.remove("active"));
//         placeStories.forEach((story) => story.classList.remove("active"));

//         card.classList.add("active");
//         document.getElementById(card.dataset.place).classList.add("active");
//       });
//     });

 const countryButtons = document.querySelectorAll(".country-btn");
    const countryPanels = document.querySelectorAll(".country-panel");

    countryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        countryButtons.forEach((btn) => btn.classList.remove("active"));
        countryPanels.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.country).classList.add("active");
      });
    });

    const placeButtons = document.querySelectorAll(".place-btn");
    const placeContents = document.querySelectorAll(".place-content");

    placeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        placeButtons.forEach((btn) => btn.classList.remove("active"));
        placeContents.forEach((content) => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.place).classList.add("active");
      });
    });