// ANIMATING BIO LIST ON CLICK
const bioMainBox = document.querySelector(".bio-box");
const bioFull = document.querySelector(".bio-full");
let bioExpanded = false;
bioMainBox.addEventListener("click", function () {
  console.log("hi!");
  if (!bioExpanded) {
    bioMainBox.style.opacity = "1";
    bioFull.style.animation = "100ms fadeIn";
    bioFull.style.visibility = "visible";
    bioFull.style.opacity = "1";
    bioExpanded = !bioExpanded;
  } else {
    bioFull.style.animation = "";
    bioFull.style.visibility = "hidden";
    bioFull.style.opacity = "0";
    bioMainBox.style.opacity = "0";
    bioExpanded = !bioExpanded;
  }
});

// ANIMATING PROJECTS LIST ON CLICK
const projectsMainBox = document.querySelector(".projects-box");
const projectsList = document.querySelector(".projects-full-list");
let projectsExpanded = false;
projectsMainBox.addEventListener("click", function () {
  console.log("hi!");
  if (!projectsExpanded) {
    projectsMainBox.style.opacity = "1";
    projectsList.style.animation = "100ms fadeIn";
    projectsList.style.visibility = "visible";
    projectsList.style.opacity = "1";
    projectsExpanded = !projectsExpanded;
  } else {
    projectsList.style.animation = "";
    projectsList.style.visibility = "hidden";
    projectsList.style.opacity = "0";
    projectsMainBox.style.opacity = "0";
    projectsExpanded = !projectsExpanded;
    projectsBackdrop.style.visibility = "hidden";
  }
});

// ANIMATING PROJECTS DESCRIPTIONS ON CLICK
// OMNIFOOD
const projectsBackdrop = document.querySelector(".projects-expanded");

const ofButton = document.querySelector(".omnifood-button");
const cprButton = document.querySelector(".cpr-button");
const rlButton = document.querySelector(".resource-library-button");

const ofText = document.querySelector(".omnifood-description");
const cprText = document.querySelector(".cpr-description");
const rlText = document.querySelector(".resource-library-description");

// Omnifood
ofButton.addEventListener("click", function () {
  // Animating backdrop
  projectsBackdrop.style.opacity = "1";
  projectsBackdrop.style.animation = "100ms fadeIn";
  projectsBackdrop.style.visibility = "visible";

  // Animating specific text
  ofText.style.opacity = "1";
  ofText.style.animation = "100ms fadeIn";
  ofText.style.display = "inline-block";
  // Making other text disappear
  cprText.style.opacity = "0";
  cprText.style.displaynone = "none";
  rlText.style.opacity = "0";
  rlText.style.displaynone = "none";
});

// CPR
cprButton.addEventListener("click", function () {
  // Animating backdrop
  projectsBackdrop.style.opacity = "1";
  projectsBackdrop.style.animation = "100ms fadeIn";
  projectsBackdrop.style.visibility = "visible";

  // Animating specific text
  cprText.style.opacity = "1";
  cprText.style.animation = "100ms fadeIn";
  cprText.style.display = "inline-block";
  // Making other text disappear
  ofText.style.opacity = "0";
  ofText.style.display = "none";
  rlText.style.opacity = "0";
  rlText.style.display = "none";
});

// Resource Library
rlButton.addEventListener("click", function () {
  // Animating backdrop
  projectsBackdrop.style.opacity = "1";
  projectsBackdrop.style.animation = "100ms fadeIn";
  projectsBackdrop.style.visibility = "visible";

  // Animating specific text
  rlText.style.opacity = "1";
  rlText.style.animation = "100ms fadeIn";
  rlText.style.display = "inline-block";
  // Making other text disappear
  ofText.style.opacity = "0";
  ofText.style.display = "none";
  cprText.style.opacity = "0";
  cprText.style.display = "none";
});

// ANIMATING CONTACT DEETS ON CLICK
const talkyMainBox = document.querySelector(".talkytalk-box");
const talkyExpanded = document.querySelector(".talky-talk-expanded");
let expanded = false;
talkyMainBox.addEventListener("click", function () {
  console.log("hi!");
  if (!expanded) {
    talkyExpanded.style.animation = "100ms fadeIn";
    talkyExpanded.style.visibility = "visible";
    talkyExpanded.style.opacity = "1";
    talkyMainBox.style.opacity = "1";
    expanded = !expanded;
  } else {
    talkyExpanded.style.animation = "";
    talkyExpanded.style.visibility = "hidden";
    talkyExpanded.style.opacity = "0";
    talkyMainBox.style.opacity = "0";
    expanded = !expanded;
  }
});

// ANIMATING COFFEE PIC ON FIRST NAME HOVER
const bigFirstName = document.querySelector(".big-first-name");
const coffeePic = document.querySelector(".me-drinking-coffee");
bigFirstName.addEventListener("mouseover", function () {
  coffeePic.style.animation = "20ms fadeIn";
  coffeePic.style.visibility = "visible";
  coffeePic.style.opacity = "1";
});
bigFirstName.addEventListener("mouseout", function () {
  coffeePic.style.animation = "";
  coffeePic.style.visibility = "hidden";
  coffeePic.style.opacity = "0";
});

// ANIMATING BOB PIC ON LAST NAME HOVER
const bigLastName = document.querySelector(".big-last-name");
const bobPic = document.querySelector(".bob");
bigLastName.addEventListener("mouseover", function () {
  bobPic.style.animation = "20ms fadeIn";
  bobPic.style.visibility = "visible";
  bobPic.style.opacity = "1";
});
bigLastName.addEventListener("mouseout", function () {
  bobPic.style.animation = "";
  bobPic.style.visibility = "hidden";
  bobPic.style.opacity = "0";
});
