const items = [
    {
        id: 1,
        name: "Images-1",
        image: "images/images9.png",
        link: "tour.html",
    },
    {
        id: 2,
        name: "Images-2",
        image: "images/images15.jpg",
        link: "tour.html",
    },
    {
        id: 3,
        name:"Images-3",
        image: "images/images2.png",
        link: "tour.html",
    },
    {
        id: 4,
        name:"Images-4",
        image: "images/images3.png",
        link: "tour.html",
    },
    {
        id: 5,
        name: "Images-5",
        image: "images/images17.jpg",
        link: "tour.html",
    },
    {
        id: 6,
        name: "Images-6",
        image: "images/images6.png",
        link: "tour.html",
    },{
        id: 7,
        name: "Images-7",
        image: "images/images10.png",
        link: "tour.html",
    },
    {
        id: 8,
        name: "Images-8",
        image: "images/images8.png",
        link: "tour.html",
    },
    {
        id: 9,
        name: "Images-9",
        image: "images/images1.png",
        link: "tour.html",
    },
    {
        id: 10,
        name: "Images-10",
        image: "images/images7.png",
        link: "tour.html",
    },
    {
        id: 11,
        name: "Images-11",
        image: "images/images16.jpg",
        link: "tour.html",
    },
    {
        id: 12,
        name: "Images-12",
        image: "images/images12.png",
        link: "tour.html",
    },
    {
        id: 13,
        name: "Images-13",
        image: "images/images13.png",
        link: "tour.html",
    },
    {
        id: 14,
        name: "Images-14",
        image: "images/images14.png",
        link: "tour.html",
    },
    {
        id: 15,
        name: "Images-15",
        image: "images/images5.png",
        link: "tour.html",
    },
    {
        id: 16,
        name: "Images-16",
        image: "images/images4.png",
        link: "tour.html",
    },
    {
        id: 17,
        name: "Images-17",
        image: "images/images11.png",
        link: "tour.html",
    }
];

const galleryPages = [items];
  
  function renderGalleryPosition (positions) {
    let galleryPositionsDomString1 = '';
    let galleryPositionsDomString2 = '';
    for (const position of positions){
        if(position.id % 2 !== 0){
            galleryPositionsDomString1 += `
            <div class="gallery-position">
                    <img src="${position.image}" alt="${position.name}">
                <div class="gallery-position-text">
                    <h3 class="gallery-position-name">
                        <a href="${position.link}" class="gallery-position-link">${position.name}</a>
                    </h3>         
                </div>
            </div>
            `;
        }else {
            galleryPositionsDomString2 += `
            <div class="gallery-position">
                    <img src="${position.image}" alt="${position.name}">
                <div class="gallery-position-text">
                    <h3 class="gallery-position-name">
                        <a href="${position.link}" class="gallery-position-link">${position.name}</a>
                    </h3>         
                </div>
            </div>
            `;
        }
    }  
    const galleryPageContainer1 = document.querySelector(".gallery-column-1");//`#${id}`);
    galleryPageContainer1.innerHTML = galleryPositionsDomString1;
    const galleryPageContainer2 = document.querySelector(".gallery-column-2");//`#${id}`);
    galleryPageContainer2.innerHTML = galleryPositionsDomString2;
};


renderGalleryPosition(galleryPages[0]);

let galleryNavSectionsButton = document.querySelectorAll(".gallery-nav-sections-button");
galleryNavSectionsButton.forEach((button) => {
    button.addEventListener("click", (_) => {
        renderGalleryPosition(galleryPages[`${button.dataset.id}`]);
    });
});
