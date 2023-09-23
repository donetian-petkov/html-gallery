import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('[id*="button-"]');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const close = document.querySelector('.close');


buttons.forEach(button =>
    button.addEventListener('click', function(e) {

        populateGallery(e.target.name);
    }));

close.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

const populateGallery = (tag = "all", index = 0) => {

    gallery.replaceChildren();

    let images;

    if (tag !== "all") {
        images = imageList.find(item => item.tag === tag)?.images;
    } else {
        images = imageList.map(item => item.images).flat();
    }

    images?.forEach(x => {
        const divElement = document.createElement('div');
        const imgElement = document.createElement('img');

        divElement.className = "gallery__item";
        imgElement.addEventListener('click',  function() {
            lightboxImage.src = this.getAttribute('src');
            lightbox.style.display = 'block';
        });

        imgElement.src = x;
        imgElement.alt = `nature${index++}`;
        divElement.appendChild(imgElement)
        gallery.appendChild(divElement);
    });

}





populateGallery();