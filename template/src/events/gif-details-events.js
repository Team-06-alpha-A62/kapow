import { loadSingleGif } from '../services/request-service.js';
import { toGifDetailsView } from '../views/gif-view.js';

export const renderGifDetails = async gifId => {
  const gif = await loadSingleGif(gifId);
  document.querySelector('.modal-content').innerHTML = toGifDetailsView(gif);
  document.querySelector('.modal').classList.add('show');

  setTimeout(() => {
    document.querySelector('.modal-content').classList.add('show');
  }, 10);
};

export const closeGifDetails = () => {
  document.querySelector('.modal-content').innerHTML = '';
  document.querySelector('.modal').classList.remove('show');
  setTimeout(() => {
    document.querySelector('.modal-content').classList.remove('show');
  }, 10);
};
