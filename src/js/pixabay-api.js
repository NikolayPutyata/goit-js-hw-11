import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function createHttpRequest(options) {
  const queryString = new URLSearchParams(options).toString();
  const url = `https://pixabay.com/api/?${queryString}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return null;
      } else {
        return data;
      }
    })
    .catch(error => {
      throw error;
    });
}
