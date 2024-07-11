import { renderFavorite } from '../events/favorites-events.js';
import { gifOverlayUserInfo } from './helper-views.js';

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
