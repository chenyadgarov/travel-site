

const cityBtns = document.querySelectorAll(".cityBtn");
const aboutCities = document.querySelectorAll(".aboutCity");
const stateBtns = document.querySelectorAll(".stateBtn");
const cityInStates = document.querySelectorAll(".cityInState");

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

stateBtns.forEach((state) => {
  state.addEventListener("click", function () {
    cityInStates.forEach((cityList) => {
      cityList.style.display = "none";
    });

    const selectedCountry = document.getElementById(state.dataset.country);
    selectedCountry.style.display = "block";

  });
});