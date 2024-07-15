import { renderFavorite } from '../events/favorites-events.js';

/**
 * Generates an HTML string for a heart icon, indicating whether a GIF is a favorite.
 * @param {string} gifId - The ID of the GIF.
 * @param {string} type - The type of heart icon (e.g., 'active' or 'inactive').
 * @returns {string} The HTML string for the heart icon.
 */
export const toggleHeart = (gifId, type) => `
    <i class="favorite ${type} fa-heart" data-gif-id="${gifId}"></i>`;

/**
 * Generates an HTML string for displaying user information as an overlay on a GIF.
 * @param {Object} gif - The GIF object.
 * @param {Object} user - The user object.
 * @returns {string} The HTML string for the user info overlay.
 */
export const gifOverlayUserInfo = (gif, user) => {
  if (user) {
    return `
    <div class="account">
        <span class="avatar"><img src=${
  user.avatar_url || ''
} alt="User Avatar"></span>
        <span class="account-name">${user.display_name || gif.username}</span>
    </div>`;
  }
  return '';
};

/**
 * Generates an HTML string for a heart button, indicating whether a GIF is a favorite.
 * @param {Object} gif - The GIF object.
 * @returns {string} The HTML string for the heart button.
 */
export const heartFavoriteView = gif => {
  return `
  <div class="heart-button favorite" data-gif-id="${gif.id}">
    ${renderFavorite(gif.id)}
  </div>`;
};

/**
 * Determines the height of a GIF based on its width and aspect ratio, with a fixed width of 256px.
 * @param {Object} gif - The GIF object.
 * @returns {number} The calculated height of the GIF.
 */
export const determineHeight = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);

  const aspectRatio = height / width;
  const newHeight = Math.round(256 * aspectRatio);

  return newHeight;
};

/**
 * Generates an HTML string to preview an uploaded GIF.
 * @param {string} url - The URL of the uploaded GIF.
 * @returns {string} The HTML string for the GIF preview or an icon if the URL is empty.
 */
export const previewUpload = url =>
  url
    ? `<img class="modal-gif-img" src="${url}" alt="GIF Preview"/>`
    : '<i class="fa-solid fa-video-slash"></i>';
