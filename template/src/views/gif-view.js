import { renderFavorite } from '../events/favorites-events.js';

const determineHeight = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);

  const aspectRatio = height / width;
  const newHeight = Math.round(256 * aspectRatio); // Calculate new height based on fixed width of 256px

  return newHeight;
};
export const toGifsView = (gifs = []) => {
  return `<div class="gifs-container">
            ${
              gifs.map(gif => toSingleGifView(gif)).join('\n') ||
              'empty array of gifs'
            }
          </div>`;
};

export const toSingleGifView = gif => {
  const newHeight = determineHeight(gif);

  return `
  <div class="gif-item" style="height: ${newHeight}px;">
    <img  src="${gif.images.original.url}" alt="${gif.title}" class="gif-image">
    <div class="overlay">
      <div class="account">
        <span class="account-name">${gif.username || 'Unknown User'}</span>
      </div>
      <div class="heart-button favorite" data-gif-id="${gif.id}">
        ${renderFavorite(gif.id)}
      </div>
    </div>
  </div>`;
};
