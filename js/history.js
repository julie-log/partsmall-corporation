const photoBtn = document.getElementById("photoBtn");
const photoImg = document.getElementById("photoImg");
function showImage() {
  photoImg.classList.add("showing");
}
function hiddenImage() {
  photoImg.classList.remove("showing");
}
photoBtn.addEventListener("mouseover", showImage);
photoBtn.addEventListener("mouseleave", hiddenImage);
