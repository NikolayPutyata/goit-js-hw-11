import createHttpRequest from './js/pixabay-api';
import addImagesToHtml from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', searchImagesFu);

function searchImagesFu(event) {
  event.preventDefault();

  const inputUserText = form.elements[0].value.trim();

  if (inputUserText === '' || inputUserText.length < 3) {
    iziToast.error({
      title: '',
      message: 'The input field is empty or has less than three characters!',
    });
  } else {
    loader.style.display = 'block';

    const options = {
      key: '45056360-0d73312e4ecad0bc63c18ca30',
      q: form.elements[0].value.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };
    createHttpRequest(options)
      .then(data => {
        loader.style.display = 'none';

        if (data.hits.length === 0) {
          gallery.innerHTML = '';
          iziToast.error({
            title: '',
            message: 'No pictures found! Try again!',
          });
        } else {
          addImagesToHtml(data.hits);
        }
      })
      .catch(error => {
        loader.style.display = 'none';
        iziToast.error({
          title: '',
          message: `Error fetching images:${error}`,
        });
      })
      .finally(() => form.reset());
  }
}
