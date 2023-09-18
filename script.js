import imageList from "./imageList.js";

const gallery = document.getElementById('gallery');

const populateGallery = (tag, index = 0) => {

    const images = imageList.find(item => item.tag === tag)?.images;

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

populateGallery("nature");