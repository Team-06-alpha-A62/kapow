import { loadSingleGif } from '../services/request-service.js';
import { toGifDetailsView } from '../views/gif-details-view.js';

export const renderGifDetails = async gifId => {
  const gif = await loadSingleGif(gifId);
  console.log(gif);
  document.querySelector('.modal-content').innerHTML = toGifDetailsView(gif);
  console.log(toGifDetailsView(gif));
  document.querySelector('.modal').classList.add('show');
};

export const closeGifDetails = () => {
  document.querySelector('.modal-content').innerHTML = '';
  document.querySelector('.modal').classList.remove('show');
};
