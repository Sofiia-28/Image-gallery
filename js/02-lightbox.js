import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

function createGallery() {
  const markupLiEl = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    )
    .join("");

  ulEl.insertAdjacentHTML("beforeend", markupLiEl);
}
createGallery();

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
