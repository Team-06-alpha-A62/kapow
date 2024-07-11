import { renderFavorite } from '../events/favorites-events.js';
import { gifOverlayUserInfo } from './view-helpers.js';
import { determineHeight } from './view-helpers.js';

export const toGifsView = (gifs = []) => {
  return `<div class="gifs-container">
            ${
              gifs
                .map(gif => toSingleGifView(gif, gif.user || null))
                .join('\n') || 'empty array of gifs'
            }
          </div>`;
};

export const toSingleGifView = (gif, user) => {
  const newHeight = determineHeight(gif);
  return `
  <div class="gif-item" style="height: ${newHeight}px;">
    <img  src="${gif.images.original.url}" alt="${gif.title}" class="gif-image">
    <div class="overlay">
    <div class="actions">
        <div class="heart-button favorite" data-gif-id="${gif.id}">
          ${renderFavorite(gif.id)}
        </div>
        <div>
          <i class="fa-solid fa-link"></i>
        </div>
      </div>
      ${gifOverlayUserInfo(gif, user)}
    </div>
  </div>`;
};
