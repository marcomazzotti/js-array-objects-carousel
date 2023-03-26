//array immagini
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

//next - prev btn
const nextUp = document.querySelector(".next-up");// bottone next
const prevDown = document.querySelector(".prev-down");//bottone prev

grid(images);

//start - pause btn
const btnP = document.querySelector("#replay-icon");
btnP.addEventListener("click", startPause);

//stato iniziale
const thumbNailsItemsArrey = document.querySelectorAll(".thumb-item");
const sliderItemsArray = document.querySelectorAll(".item");

let itemCounter = 0;
sliderItemsArray[itemCounter].classList.add("active");
thumbNailsItemsArrey[itemCounter].classList.add("active");

//AUTO PLAY
myAutoInterval = setInterval(previous, 3000);

//bottone next
nextUp.addEventListener("click", function () {
  next();
  if (myAutoInterval === null) {
      iconPlayPause();
  } else {
      clearInterval(myAutoInterval);
      myAutoInterval = setInterval(next, 3000);
      iconPausePlay();
  }
});

//bottone prev
prevDown.addEventListener("click", function () {
  previous();
  if (myAutoInterval === null) {
      iconPlayPause();
  } else {
      clearInterval(myAutoInterval);
      myAutoInterval = setInterval(previous, 3000);
      iconPausePlay();
  }
});

//carosello
function grid(myImgArray) {
  let sliderItemsContainer = document.querySelector(".slider-items"); 

//thumbnail
myImgArray.forEach((film, index) => {
  const {image, title, text} = film;
    sliderItemsContainer.innerHTML +=
        `<div class="item">
          <img src="${image}" alt="">
            <section class="image-text">
              <h2>${title}</h2>
                <p>${text}</p>
            </section>
        </div>`;

    thumbImg = document.createElement("div");
    thumbImg.classList.add("thumb-item");
    thumbImg.innerHTML = `<img src="${image}" alt="">`;
    thumbImg.addEventListener("click", function () {
      clearInterval(myAutoInterval);
      hideDiscoverImg(index);
      iconPausePlay();
      myAutoInterval = setInterval(previous, 3000);
      });
    document.querySelector(".thumbnails-image").append(thumbImg);
  });
};


//funzioni
function previous() {
  iconPausePlay();
  if (itemCounter === 0) {
      hideDiscoverImg((sliderItemsArray.length - 1));
  } else {
      hideDiscoverImg((itemCounter - 1));
  };
};

function next() {
  iconPausePlay();
  if (itemCounter === sliderItemsArray.length - 1) {
      hideDiscoverImg(0);
  } else {
      hideDiscoverImg((itemCounter + 1));
  }
};

function startPause() {
  if (myAutoInterval === null) {
      myAutoInterval = setInterval(previous, 3000);
      iconPausePlay();
  } else {
      clearInterval(myAutoInterval);
      myAutoInterval = null;
      iconPlayPause();
  }
};

function hideDiscoverImg(counter) {

  sliderItemsArray[itemCounter].classList.remove("active");
  thumbNailsItemsArrey[itemCounter].classList.remove("active");

  itemCounter = counter;

  sliderItemsArray[itemCounter].classList.add("active");
  thumbNailsItemsArrey[itemCounter].classList.add("active");
};

function iconPlayPause() {
  innerBtn = document.querySelector("#replay-icon");

  innerBtn.classList.remove("fa-solid");
  innerBtn.classList.remove("fa-pause");
  innerBtn.classList.add("fa-regular");
  innerBtn.classList.add("fa-circle-play");
};

function iconPausePlay() {
  innerBtn = document.querySelector("#replay-icon");

  innerBtn.classList.remove("fa-regular");
  innerBtn.classList.remove("fa-circle-play");
  innerBtn.classList.add("fa-solid");
  innerBtn.classList.add("fa-pause");
}