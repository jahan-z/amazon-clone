const cardsEl = document.querySelector(".card-el");

const infoCardData = [
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/31OQiaA6pkL._AC_SX184_.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/41I2ElKi4gS._AC_SX184_.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/41qPw+U8psS._AC_SX184_.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/B08Y8QDL32.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/B09R81ZMZX.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "i/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "i/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "i/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "i/images/mobile pics/Flagship_honor50.jpg",
  },
  {
    title: "Mobile Phomes",
    imgpath: "i/images/mobile pics/Flagship_honor50.jpg",
  },
];

const data = infoCardData.map((item) => {
  
  const cardData = `<div class="card mx-3 my-3" style="width: 18rem;">
  <img src="${item.imgpath}" class="card-img-top h-50" alt="...">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <a href="">See more</a>
  </div>
</div>
 
  
    `;

  cardsEl.innerHTML += cardData;
});