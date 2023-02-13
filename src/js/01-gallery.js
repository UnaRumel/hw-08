// Add imports above this line


import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const cardPicctures = creetePicturesCard(galleryItems);



function creetePicturesCard(item) {
    return item.map(({ preview, original, description }) => {
         return `<div class="gallery__item"><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description}/>
</a></div>`
    }).join("");
}

galleryRef.innerHTML = cardPicctures
new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay:250,});



