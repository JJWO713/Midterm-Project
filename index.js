fetch("./data.json")
    .then(response => response.json())
    .then((myFlowers) => loadPage(myFlowers));

function loadPage(myFlowers){
    let row = document.getElementById("row1");
    for (let i = 0; i < myFlowers.flowers.length; i++) {
        if (i >= 6){
            row = document.getElementById("row2");
        }
        let flower = document.createElement("div");
        let src = myFlowers.flowers[i].src;
        let name = myFlowers.flowers[i].name;
        console.log("test");
        flower.classList.add("col-lg");
        flower.innerHTML = `
        <div class="circular--landscape">
            <img src=${src} alt="${name}">
        </div>
        <h3 class="flower-headers">${name}</h3>
        `;
        row.appendChild(flower);
    }

    let carousel = document.getElementById("carousel-inner");
    for (let i =0; i < myFlowers.carousel.length; i++) {
        let src = myFlowers.carousel[i].src;
        let title = myFlowers.carousel[i].title;
        let text = myFlowers.carousel[i].text;
        let button = myFlowers.carousel[i].button;
        let href = "#flowerForm";
        if (i == 2){
            href = "./bites.html";
        }
        
        let carouselCard = document.createElement("div");
        carouselCard.classList.add("carousel-item");
        if (i == 0){
            carouselCard.classList.add("active");
        }
        carouselCard.innerHTML = `
        <img src=${src} width="fill">
        <div class="container">
          <div class="carousel-caption text-start">
            <h1 class="carousel-text">${title}</h1>
            <p class="opacity-75 carousel-text">${text}.</p>
            <p><a class="btn btn-lg btn-primary" id="btn" href="${href}">${button}</a></p>
          </div>
        </div>
        `;
        carousel.appendChild(carouselCard);
    }
}
document.getElementById("formSubmit").addEventListener('click', ()=>{
    let modal = document.getElementById("exampleModal");
    modal.classList.remove("fade");

});

// function loadCarousel(myFlowers){
    
// }