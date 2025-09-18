// ======================
// Footer Year
// ======================
document.getElementById('year').textContent = new Date().getFullYear();

// ======================
// Gallery (Dynamic Load + Lightbox)
// ======================
const gallery = document.getElementById('gallery');
if (gallery) {
  const images = [
    '1','2',
    '3','4',
    '5','6',
    '7','8',
    '9','10',
    '11','12',
  ];
  images.forEach(img => {
    const el = document.createElement('img');
    el.src = 'assets/designs/' + img;
    el.alt = img;
    gallery.appendChild(el);
    el.addEventListener('click', () => { showLightbox(el.src); });
  });
}

function showLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  lightbox.innerHTML = '<img src="' + src + '">';
  lightbox.classList.add('active');
  lightbox.onclick = () => lightbox.classList.remove('active');
}

// ======================
// Project Image Popup (Injected)
// ======================
const popup = document.createElement("div");
popup.classList.add("img-popup");
popup.innerHTML = <span class="close-btn">&times;</span><img src="" alt="popup">;
document.body.appendChild(popup);

const popupImg = popup.querySelector("img");
const closeBtn = popup.querySelector(".close-btn");

// Open popup when clicking project image
document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});
