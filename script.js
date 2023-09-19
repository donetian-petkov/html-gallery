import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('[id*="button_"]');

buttons.forEach(button =>
    button.addEventListener('click', function() {
        populateGallery(this.name);
    }))


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
        divElement.className = "gallery-item";
        imgElement.src = x;
        imgElement.alt = `nature${index++}`;
        divElement.appendChild(imgElement)
        gallery.appendChild(divElement);
    });

}



populateGallery();