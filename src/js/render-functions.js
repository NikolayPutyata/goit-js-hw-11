export default function addImagesToHtml(images) {
  console.log(images);
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';

  const imagesHtml = images
    .map(image => {
      return `<li class="item-ul"><img src="${image.webformatURL}" alt="${image.tags}"><div class"about-img-div"><p class="description-img">Likes</p>
<p class="description-img">Views</p>
<p class="description-img">Comments</p>
<p class="description-img">Downloads</p>
<span class="description-value">${image.likes}</span
><span class="description-value">${image.views}</span
><span class="description-value">${image.comments}</span
><span class="description-value">${image.downloads}</span></div></li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imagesHtml);
}
