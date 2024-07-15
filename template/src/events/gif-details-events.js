import { loadSingleGif } from '../services/request-service.js';
import { toGifDetailsView, toUploadGifDetailsView } from '../views/gif-view.js';

/**
 * Renders the details of a single GIF in a modal.
 * @param {string} gifId - The ID of the GIF to be displayed.
 * @returns {Promise<void>}
 */
export const renderGifDetails = async gifId => {
  const gif = await loadSingleGif(gifId);
  document.querySelector('.modal-content').innerHTML = toGifDetailsView(gif);
  document.querySelector('.modal').classList.add('show');

  setTimeout(() => {
    document.querySelector('.modal-content').classList.add('show');
  }, 10);
};

/**
 * Renders the details of an uploaded GIF in a modal, including a preview.
 * @param {File} file - The uploaded GIF file.
 * @param {string} previewUrl - The URL of the preview image of the uploaded GIF.
 * @returns {Promise<void>}
 */
export const renderUploadGifDetails = async (file, previewUrl) => {
  document.querySelector('.modal-content').innerHTML = toUploadGifDetailsView(
    file,
    previewUrl
  );
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
