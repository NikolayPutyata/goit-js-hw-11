import createHttpRequest from './js/pixabay-api';
import addImagesToHtml from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', searchImagesFu);

function searchImagesFu(event) {
  event.preventDefault();

  let inputUserText = form.elements[0].value.trim();

  if (inputUserText === '') {
    iziToast.error({
      title: '',
      message: 'Enter some text!',
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
        if (data) {
          addImagesToHtml(data.hits);
        }
      })
      .catch(error => {
        loader.style.display = 'none';
        console.error('Error fetching images:', error);
      });
    form.elements[0].value = '';
  }
}
