const lineFromBio = document.querySelector(".line-from-bio");
const menuBio = document.querySelector("li");

menuBio.addEventListener("click", function () {
  console.log("Wassup!");
  lineFromBio.style.animation = "extend 0.8s ease-in-out forwards";
});
