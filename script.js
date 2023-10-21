import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('[id*="button-"]');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const close = document.querySelector('.close');
// Get the button element
const myButton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

myButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
buttons.forEach(button =>
    button.addEventListener('click', function(e) {

        populateGallery(e.target.name);
    }));

close.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function() {
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

    images?.forEach(image => {
        const divElement = document.createElement('div');
        const imgElement = document.createElement('img');

        divElement.className = "gallery__item";
        imgElement.addEventListener('click',  function() {
            lightboxImage.src = this.getAttribute('src');
            lightbox.style.display = 'block';
        });

        imgElement.src = image;
        imgElement.alt = `nature${index++}`;
        divElement.appendChild(imgElement)
        gallery.appendChild(divElement);
    });

}

populateGallery();