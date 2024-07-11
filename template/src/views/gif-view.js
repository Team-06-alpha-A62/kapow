import { renderFavorite } from '../events/favorites-events.js';

const determineSizeClass = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);
  console.log(width, height);

  if (width >= 512) {
    return { sizeClass: 'large' };
  } else {
    return { sizeClass: 'small' };
  }
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
  const { sizeClass } = determineSizeClass(gif);

  return `
  <div class="gif-item ${sizeClass}">
    <img src="${gif.images.original.url}" alt="${gif.title}" class="gif-image">
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
