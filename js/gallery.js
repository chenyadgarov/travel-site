const photos = [
  {
    id: 1,
    country: "argentina",
    city: "bariloche",
    category: "adventure",
    title: "אומגה בברילוצ׳ה",
    description: "חוויה עם נוף לאגמים ולהרים",
    src: "https://res.cloudinary.com/dhsxupjcn/image/upload/w_900,q_auto,f_auto/DSC_0284_yiumml.jpg",
    alt: "אומגה בברילוצ׳ה מול נוף של אגמים",
    keywords: "ברילוצה ברילוצ׳ה אומגה zipline argentina argentina nature adventure נוף"
  },

  /*
    כאן את מוסיפה עוד תמונות באותו מבנה:

  {
    id: 2,
    country: "argentina",
    city: "bariloche",
    category: "nature",
    title: "אגמים בברילוצ׳ה",
    description: "נוף פנורמי בברילוצ׳ה",
    src: "כאן הקישור מ-Cloudinary",
    alt: "אגמים בברילוצ׳ה",
    keywords: "ברילוצה אגמים נוף הרים argentina bariloche"
  },
  */
];

const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const cityFilter = document.getElementById("cityFilter");
const categoryFilter = document.getElementById("categoryFilter");
const resultsCount = document.getElementById("resultsCount");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const emptyState = document.getElementById("emptyState");
const quickFilters = document.querySelectorAll(".quick-filter");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

let visibleCount = 12;

function getFilteredPhotos() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedCountry = countryFilter.value;
  const selectedCity = cityFilter.value;
  const selectedCategory = categoryFilter.value;

  return photos.filter((photo) => {
    const matchesSearch =
      searchValue === "" ||
      photo.title.toLowerCase().includes(searchValue) ||
      photo.description.toLowerCase().includes(searchValue) ||
      photo.alt.toLowerCase().includes(searchValue) ||
      photo.keywords.toLowerCase().includes(searchValue);

    const matchesCountry =
      selectedCountry === "all" || photo.country === selectedCountry;

    const matchesCity =
      selectedCity === "all" || photo.city === selectedCity;

    const matchesCategory =
      selectedCategory === "all" || photo.category === selectedCategory;

    return matchesSearch && matchesCountry && matchesCity && matchesCategory;
  });
}

function renderGallery() {
  const filteredPhotos = getFilteredPhotos();
  const photosToShow = filteredPhotos.slice(0, visibleCount);

  galleryGrid.innerHTML = "";

  photosToShow.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
      <div class="photo-info">
        <h3>${photo.title}</h3>
        <p>${photo.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(photo);
    });

    galleryGrid.appendChild(card);
  });

  resultsCount.textContent = `נמצאו ${filteredPhotos.length} תמונות`;

  if (filteredPhotos.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  if (visibleCount >= filteredPhotos.length) {
    loadMoreBtn.classList.add("hidden");
  } else {
    loadMoreBtn.classList.remove("hidden");
  }
}

function resetVisibleCountAndRender() {
  visibleCount = 12;
  renderGallery();
}

function clearFilters() {
  searchInput.value = "";
  countryFilter.value = "all";
  cityFilter.value = "all";
  categoryFilter.value = "all";

  quickFilters.forEach((btn) => btn.classList.remove("active"));
  quickFilters[0].classList.add("active");

  resetVisibleCountAndRender();
}

function openLightbox(photo) {
  lightboxImage.src = photo.src.replace("w_900", "w_1400");
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = `${photo.title} — ${photo.description}`;
  lightbox.classList.remove("hidden");
}

function closeLightboxModal() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}

searchInput.addEventListener("input", resetVisibleCountAndRender);
countryFilter.addEventListener("change", resetVisibleCountAndRender);
cityFilter.addEventListener("change", resetVisibleCountAndRender);
categoryFilter.addEventListener("change", resetVisibleCountAndRender);

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 12;
  renderGallery();
});

clearFiltersBtn.addEventListener("click", clearFilters);

quickFilters.forEach((button) => {
  button.addEventListener("click", () => {
    quickFilters.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const country = button.dataset.country;
    const city = button.dataset.city;
    const category = button.dataset.category;

    if (country) {
      countryFilter.value = country;
      cityFilter.value = "all";
      categoryFilter.value = "all";
    }

    if (city) {
      cityFilter.value = city;
      countryFilter.value = "all";
      categoryFilter.value = "all";
    }

    if (category) {
      categoryFilter.value = category;
      countryFilter.value = "all";
      cityFilter.value = "all";
    }

    searchInput.value = "";
    resetVisibleCountAndRender();
  });
});

closeLightbox.addEventListener("click", closeLightboxModal);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightboxModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightboxModal();
  }
});

renderGallery();