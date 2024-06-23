const rooms = [
    {
        id: "1",
        name: "First room",
        image: "images/free-icon-living-room.png",
        link: "tour.html",
    },
    {
        id: "2",
        name: "Studio",
        image: "images/free-icon-workspace.png",
        link: "tour.html",
    }
];

const galleryPages = [rooms];
  
  function renderGalleryPosition (positions) {
    let galleryPositionsDomString = '';
    for (const position of positions){
        galleryPositionsDomString += `
        <div class="gallery-position">
            <div class="gallery-position-img">
                <img src="${position.image}" alt="${position.name}">
            </div>
            <div class="gallery-position-text">
                <h3 class="gallery-position-name">
                    <a href="${position.link}" class="gallery-position-link">${position.name}</a>
                </h3>         
            </div>
        </div>
        `;
    }  
    const galleryPageContainer = document.querySelector(".gallery-pages");//`#${id}`);
      galleryPageContainer.innerHTML = galleryPositionsDomString;
};


renderGalleryPosition(galleryPages[0]);

let galleryNavSectionsButton = document.querySelectorAll(".gallery-nav-sections-button");
galleryNavSectionsButton.forEach((button) => {
    button.addEventListener("click", (_) => {
        renderGalleryPosition(galleryPages[`${button.dataset.id}`]);
    });
});
