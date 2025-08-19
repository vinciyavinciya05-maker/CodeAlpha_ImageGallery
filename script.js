function filterSelection(category) {
  let items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-content");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let galleryImages = [];

function openLightbox(index) {
  galleryImages = Array.from(document.querySelectorAll(".gallery-item:not(.hide) img"));
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = galleryImages[currentIndex].src;
}


closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


document.querySelectorAll(".gallery-item img").forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});