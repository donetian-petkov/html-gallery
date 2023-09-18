import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');

const populateGallery = (tag, index) => {

    if (!index) {
        index = 0;
    }

    const images = imageList.find(item => item.tag === tag)?.images;

   images?.forEach(x => {
       const imgElement = document.createElement('img');
       imgElement.src = x;
       imgElement.alt = `nature${index++}`;

       if (index === Math.ceil(images.length/2)) {
           imgElement.className = "highlight";
       } else {
           imgElement.className = "sideImages";
       }

       gallery.appendChild(imgElement);
   });

}

populateGallery("nature");