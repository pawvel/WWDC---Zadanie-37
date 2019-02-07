// HOW WE WORKS - show and hide description
function toggleDescription(n) {
  const description = document.getElementsByClassName("image-shade");

  console.log(description);

  if (description[n - 1].classList.contains("shade-hide")) {
    description[n - 1].classList.remove("shade-hide");
    description[n - 1].classList.add("shade-show");
  } else {
    description[n - 1].classList.remove("shade-show");
    description[n - 1].classList.add("shade-hide");
  }
}

// OUR CREATIVE TEAM - carousel
const carouselItem = document.getElementsByClassName("carousel");
const carouselClass = ["top", "left", "back", "right"];
const personJob = document.getElementsByClassName("team-job-wrapper");

var carouselIndex = 1;

function carouselSlide(n) {
  moveClass(n);
  carousel((carouselIndex += n));
  console.log(personJob);
}

function moveClass(n) {
  var temp;
  if (n == -1) {
    for (i = 1; i < carouselClass.length; i++) {
      temp = carouselClass[i - 1];
      carouselClass[i - 1] = carouselClass[i];
      carouselClass[i] = temp;
    }
  }

  if (n == 1) {
    for (i = carouselClass.length - 1; i > 0; i--) {
      temp = carouselClass[i];
      carouselClass[i] = carouselClass[i - 1];
      carouselClass[i - 1] = temp;
    }
  }
}

function carousel(n) {
  for (i = 0; i < carouselItem.length; i++) {
    personJob[i].classList.add("hide");
    if (carouselClass[i] == "top") {
      personJob[i].classList.remove("hide");
    }

    carouselItem[i].className = "carousel";
    carouselItem[i].classList.add(carouselClass[i]);
  }
}

// WHAT CLIENTS SAY - change pistures and citats
function currentClient(n) {
  const picture = document.getElementsByClassName("client-img");
  const citat = document.getElementsByClassName("citat");
  const miniature = document.getElementsByClassName("miniature-wrapper");

  for (i = 0; i < miniature.length; i++) {
    picture[i].classList.add("hide");
    citat[i].classList.add("hide");
    miniature[i].classList.remove("active");
  }
  picture[n - 1].classList.remove("hide");
  citat[n - 1].classList.remove("hide");
  miniature[n - 1].classList.add("active");
}
