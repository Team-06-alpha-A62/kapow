import { renderFavorite } from '../events/favorites-events.js';

export const toggleHeart = (gifId, type) => `
    <i class="favorite ${type} fa-heart" data-gif-id="${gifId}"></i>`;

export const gifOverlayUserInfo = (gif, user) => {
  if (user) {
    return `
    <div class="account">
        <span class="avatar"><img src=${user.avatar_url || ''}></span>
        <span class="account-name">${gif.username || 'Unknown User'}</span>
    </div>`;
  }
  return '';
};

export const heartFavoriteView = gif => {
  return `
  <div class="heart-button favorite" data-gif-id="${gif.id}">
    ${renderFavorite(gif.id)}
  </div>`;
};

export const determineHeight = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);

  const aspectRatio = height / width;
  const newHeight = Math.round(256 * aspectRatio);

  return newHeight;
};
