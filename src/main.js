import createHttpRequest from './js/pixabay-api';
import addImagesToHtml from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', searchImagesFu);

function searchImagesFu(event) {
  event.preventDefault();
  const inputUserText = form.elements[0].value.trim();

  if (inputUserText === '') {
    iziToast.error({
      title: '',
      message: 'Enter some text!',
    });
  } else {
    const options = {
      key: '45056360-0d73312e4ecad0bc63c18ca30',
      q: form.elements[0].value.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };

    createHttpRequest(options)
      .then(data => {
        if (data) {
          addImagesToHtml(data.hits);
        }
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }
}
