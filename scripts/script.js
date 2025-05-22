// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: Smooth horizontal scroll for gallery (optional visual polish)
const gallery = document.getElementById("gallery-container");

// Add scroll behavior with mouse drag (optional but nice touch)
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener("mousedown", (e) => {
  isDown = true;
  gallery.classList.add("active");
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener("mouseleave", () => {
  isDown = false;
  gallery.classList.remove("active");
});
gallery.addEventListener("mouseup", () => {
  isDown = false;
  gallery.classList.remove("active");
});
gallery.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed here
  gallery.scrollLeft = scrollLeft - walk;
});
