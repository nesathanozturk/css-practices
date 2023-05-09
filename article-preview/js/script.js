const shareBtn = document.getElementById("share-btn");
const shareBtnMobile = document.getElementById("share-btn-mobile");
const socialIcons = document.getElementById("social-icons");
const socialIconsMobile = document.getElementById("social-icons-mobile");
const cardBottom = document.getElementById("card-bottom");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  socialIcons.classList.toggle("active");
  socialIconsMobile.classList.toggle("active");
  cardBottom.classList.toggle("active");
});

shareBtnMobile.addEventListener("click", () => {
  socialIconsMobile.classList.toggle("active");
  cardBottom.classList.toggle("active");
});
