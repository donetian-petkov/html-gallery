import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');

const populateGallery = (tag, index = 0) => {

    const images = imageList.find(item => item.tag === tag)?.images;

   images?.forEach(x => {
       const imgElement = document.createElement('img');
       imgElement.src = x;
       imgElement.alt = `nature${index++}`;
       imgElement.className = "sideImages";
       gallery.appendChild(imgElement);
   });

}

populateGallery("nature");